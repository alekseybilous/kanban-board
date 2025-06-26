import React from 'react';
import {
  ColorPalette,
  ComponentExample,
  ThemeSection,
  TextSample,
  ActionButton,
  StateMessage,
  BorderSample,
  FormExample,
  ButtonGroup,
  ColorRow,
} from './ThemeDocComponents';
import {
  ThemeData,
  generateUsageExample,
  generateThemeOverview,
} from './themeData';

interface ThemeTemplateProps {
  themeData: ThemeData;
  themeName: string;
}

export const ThemeTemplate: React.FC<ThemeTemplateProps> = ({
  themeData,
  themeName,
}) => {
  const dataTheme = themeName.toLowerCase();

  return (
    <div data-theme={dataTheme} style={{ minHeight: '100vh' }}>
      <h1>{themeData.name}</h1>

      <p>{themeData.description}</p>

      <h2>Theme Overview</h2>
      <p>{generateThemeOverview(themeData.name)}</p>

      <h2>Color Palette Overview</h2>
      <ColorPalette colors={themeData.paletteColors} />

      <h2>Interactive Component Examples</h2>
      <div className="component-examples">
        <ComponentExample
          title="Card Component"
          description={`This is how a card component looks with the ${dataTheme} theme applied.`}
        >
          <ButtonGroup />
        </ComponentExample>

        <ComponentExample
          title="Form Component"
          description="Form elements using theme variables for consistent styling."
        >
          <FormExample />
          <div className="success-message">✓ Success message example</div>
        </ComponentExample>
      </div>

      <h2>Complete Color Showcase</h2>
      <div className="theme-showcase">
        <ThemeSection title="Canvas Colors">
          <ColorRow variable="canvas" label="canvas" />
          <ColorRow variable="canvas-subtle" label="canvas-subtle" />
        </ThemeSection>

        <ThemeSection title="Surface Colors">
          {themeData.surfaceColors.map((surface) => (
            <ColorRow key={surface} variable={surface} />
          ))}
        </ThemeSection>

        <ThemeSection title="Text Colors">
          {themeData.textColors.map((text) => (
            <TextSample
              key={text.variable}
              variable={text.variable}
              label={text.label}
              background={text.background}
            />
          ))}
        </ThemeSection>

        <ThemeSection title="Action Colors">
          {themeData.actionColors.map((action) => (
            <ActionButton
              key={action.variable}
              variable={action.variable}
              label={action.label}
              textVariable={action.textVariable}
              borderVariable={action.borderVariable}
            />
          ))}
        </ThemeSection>

        <ThemeSection title="State Colors">
          <StateMessage type="success">Success state message</StateMessage>
          <StateMessage type="warning">Warning state message</StateMessage>
          <StateMessage type="danger">Danger state message</StateMessage>
        </ThemeSection>

        <ThemeSection title="Borders & Focus">
          {themeData.borderSamples.map((border) => (
            <BorderSample
              key={border.variable}
              variable={border.variable}
              label={border.label}
              showFocus={border.showFocus}
            />
          ))}
        </ThemeSection>
      </div>

      <h2>Usage Example</h2>
      <pre>
        <code>{generateUsageExample(themeData.name)}</code>
      </pre>

      <h2>Design Characteristics</h2>
      <p>The {themeData.name} is characterized by:</p>
      <ul>
        {themeData.characteristics.map((characteristic, index) => (
          <li key={index}>
            <strong>{characteristic.split(' ')[0]}</strong>{' '}
            {characteristic.split(' ').slice(1).join(' ')}
          </li>
        ))}
      </ul>

      <p>This theme is ideal for:</p>
      <ul>
        {themeData.idealFor.map((use, index) => (
          <li key={index}>{use}</li>
        ))}
      </ul>
    </div>
  );
};
