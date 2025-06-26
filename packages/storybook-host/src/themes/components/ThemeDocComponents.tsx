import React from 'react';
import './ThemeDocStyles.css';

// Color Circle Component
interface ColorCircleProps {
  variable: string;
  label: string;
  border?: string;
}

export const ColorCircle: React.FC<ColorCircleProps> = ({
  variable,
  label,
  border = 'var(--border)',
}) => (
  <div className="color-circle-container">
    <div
      className="color-circle"
      style={{
        backgroundColor: `var(--${variable})`,
        border: `2px solid ${border}`,
      }}
    />
    <div className="color-circle-label">{label}</div>
  </div>
);

// Color Card Component
interface ColorCardProps {
  variable: string;
  description: string;
  showDemo?: boolean;
  demoContent?: React.ReactNode;
}

export const ColorCard: React.FC<ColorCardProps> = ({
  variable,
  description,
  showDemo = true,
  demoContent,
}) => (
  <div className="color-card">
    {showDemo && (
      <div
        className="color-demo"
        style={{ backgroundColor: `var(--${variable})` }}
      >
        {demoContent || (
          <div className="color-demo-content">
            {variable.includes('text') ? 'Sample Text' : 'Color Sample'}
          </div>
        )}
      </div>
    )}
    <div className="color-info">
      <div className="color-variable">--{variable}</div>
      <div className="color-description">CSS Variable: var(--{variable})</div>
      <div className="color-usage">{description}</div>
    </div>
  </div>
);

// Color Row Component (for lists)
interface ColorRowProps {
  variable: string;
  label?: string;
}

export const ColorRow: React.FC<ColorRowProps> = ({ variable, label }) => (
  <div className="color-row">
    <div
      className="color-row-swatch"
      style={{ backgroundColor: `var(--${variable})` }}
    />
    <div className="color-row-label">--{label || variable}</div>
  </div>
);

// Theme Section Component
interface ThemeSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ThemeSection: React.FC<ThemeSectionProps> = ({
  title,
  children,
}) => (
  <div className="theme-section">
    <h3 className="theme-section-title">{title}</h3>
    <div className="theme-section-content">{children}</div>
  </div>
);

// Text Sample Component
interface TextSampleProps {
  variable: string;
  label: string;
  background?: string;
}

export const TextSample: React.FC<TextSampleProps> = ({
  variable,
  label,
  background = 'var(--surface-subtle)',
}) => (
  <div className="text-sample" style={{ backgroundColor: background }}>
    <div
      className="text-sample-content"
      style={{ color: `var(--${variable})` }}
    >
      {label}
    </div>
    <div className="text-sample-variable">--{variable}</div>
  </div>
);

// Action Button Sample
interface ActionButtonProps {
  variable: string;
  label: string;
  textVariable?: string;
  borderVariable?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  variable,
  label,
  textVariable,
  borderVariable,
}) => (
  <div className="action-button-container">
    <div
      className="action-button"
      style={{
        backgroundColor: `var(--${variable})`,
        color: textVariable
          ? `var(--${textVariable})`
          : 'var(--primary-text-on-primary)',
        border: borderVariable ? `1px solid var(--${borderVariable})` : 'none',
      }}
    >
      {label}
    </div>
    <div className="action-button-variable">--{variable}</div>
  </div>
);

// State Message Component
interface StateMessageProps {
  type: 'success' | 'warning' | 'danger';
  children: React.ReactNode;
}

export const StateMessage: React.FC<StateMessageProps> = ({
  type,
  children,
}) => (
  <div
    className="state-message"
    style={{
      backgroundColor: `var(--${type}-surface)`,
      border: `1px solid var(--${type}-border)`,
      color: `var(--${type}-text)`,
    }}
  >
    <div
      className="state-message-icon"
      style={{ backgroundColor: `var(--${type}-base)` }}
    />
    <div className="state-message-content">
      <div className="state-message-label">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      <div className="state-message-variable">--{type}-base</div>
    </div>
  </div>
);

// Border Sample Component
interface BorderSampleProps {
  variable: string;
  label: string;
  showFocus?: boolean;
}

export const BorderSample: React.FC<BorderSampleProps> = ({
  variable,
  label,
  showFocus = false,
}) => (
  <div
    className={`border-sample ${showFocus ? 'border-sample-focus' : ''}`}
    style={{
      border: `2px solid var(--${variable})`,
      ...(showFocus && {
        outline: '2px solid var(--focus-ring)',
        outlineOffset: '2px',
      }),
    }}
  >
    <div className="border-sample-label">{label}</div>
    <div className="border-sample-variable">
      --{variable}
      {showFocus && ' + --focus-ring'}
    </div>
  </div>
);

// Component Example Card
interface ComponentExampleProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const ComponentExample: React.FC<ComponentExampleProps> = ({
  title,
  description,
  children,
}) => (
  <div className="component-example">
    <h4 className="component-example-title">{title}</h4>
    <p className="component-example-description">{description}</p>
    <div className="component-example-content">{children}</div>
  </div>
);

// Form Example Component
export const FormExample: React.FC = () => (
  <div className="form-example">
    <label className="form-label">Input Field</label>
    <input type="text" placeholder="Enter text..." className="form-input" />
  </div>
);

// Button Group Component
export const ButtonGroup: React.FC = () => (
  <div className="button-group">
    <button className="btn btn-primary">Primary</button>
    <button className="btn btn-secondary">Secondary</button>
  </div>
);

// Color Palette Overview
interface ColorPaletteProps {
  colors: Array<{
    variable: string;
    label: string;
    border?: string;
  }>;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => (
  <div className="color-palette">
    {colors.map((color) => (
      <ColorCircle
        key={color.variable}
        variable={color.variable}
        label={color.label}
        border={color.border}
      />
    ))}
  </div>
);
