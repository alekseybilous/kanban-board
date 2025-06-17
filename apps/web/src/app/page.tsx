import { Button } from '@kanban-board/desing-system';
import styles from './page.module.css';

export default function Index() {
  return (
    <div className={styles.page}>
      <main style={{ padding: '2rem' }}>
        <h1>Button Component Examples</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
          <div>
            <h3>Variants:</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          
          <div>
            <h3>Sizes:</h3>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          
          <div>
            <h3>States:</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button>Active</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
          
          <div style={{ width: '300px' }}>
            <h3>Full Width:</h3>
            <Button fullWidth>Full Width Button</Button>
          </div>
          
          <div>
            <h3>As Child (renders as link):</h3>
            <Button asChild variant="primary">
              <a href="#example">I'm a link styled as button</a>
            </Button>
          </div>
          
          <div>
            <h3>With onClick handler:</h3>
            <Button>
              Click me!
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}