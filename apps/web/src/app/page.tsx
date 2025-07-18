import Link from 'next/link';
import { Button } from '@kanban-board/desing-system';

import styles from './page.module.css';
import { SignedOut, SignUpButton } from '@clerk/nextjs';

export default function RootPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <span className={styles.badgeText}>
                ✨ New Dashboard Available
              </span>
            </div>
            <h1 className={styles.heroTitle}>
              Transform Your Team&apos;s
              <span className={styles.heroHighlight}> Workflow</span>
            </h1>
            <p className={styles.heroSubtitle}>
              The modern Kanban board that adapts to your team&apos;s needs.
              Visualize progress, boost productivity, and deliver projects
              faster than ever.
            </p>
            <div className={styles.heroActions}>
              <SignedOut>
                <SignUpButton>
                  <Button size="lg" variant="primary">
                    Get Started Free
                  </Button>
                </SignUpButton>
              </SignedOut>
              <Button asChild size="lg" variant="ghost">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10k+</span>
                <span className={styles.statLabel}>Active Users</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>Uptime</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Integrations</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.kanbanDemo}>
              <div className={styles.kanbanColumn}>
                <div className={styles.columnHeader}>To Do</div>
                <div className={styles.kanbanCard}>
                  <div className={styles.cardTitle}>Design Homepage</div>
                  <div className={styles.cardMeta}>2 days left</div>
                </div>
                <div className={styles.kanbanCard}>
                  <div className={styles.cardTitle}>User Research</div>
                  <div className={styles.cardMeta}>1 week left</div>
                </div>
              </div>
              <div className={styles.kanbanColumn}>
                <div className={styles.columnHeader}>In Progress</div>
                <div className={styles.kanbanCard}>
                  <div className={styles.cardTitle}>API Integration</div>
                  <div className={styles.cardMeta}>5 days left</div>
                </div>
              </div>
              <div className={styles.kanbanColumn}>
                <div className={styles.columnHeader}>Done</div>
                <div className={styles.kanbanCard}>
                  <div className={styles.cardTitle}>Project Setup</div>
                  <div className={styles.cardMeta}>Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Everything you need to manage projects
            </h2>
            <p className={styles.sectionSubtitle}>
              Powerful features designed for modern teams
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Visual Task Management</h3>
              <p className={styles.featureDescription}>
                Organize tasks with intuitive drag-and-drop boards. See progress
                at a glance and keep everyone aligned.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Team Collaboration</h3>
              <p className={styles.featureDescription}>
                Work together seamlessly with real-time updates, comments, and
                team member assignments.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Lightning Fast</h3>
              <p className={styles.featureDescription}>
                Built for speed with instant updates and optimized performance
                for teams of any size.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Powerful Integrations</h3>
              <p className={styles.featureDescription}>
                Connect with your favorite tools and services. Slack, GitHub,
                Jira, and 50+ more integrations.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19C15 17.8954 14.1046 17 13 17H11C9.89543 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 12C3 10.8954 3.89543 10 5 10H7C8.10457 10 9 10.8954 9 12C9 13.1046 8.10457 14 7 14H5C3.89543 14 3 13.1046 3 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 12C15 10.8954 15.8954 10 17 10H19C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14H17C15.8954 14 15 13.1046 15 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Customizable Workflows</h3>
              <p className={styles.featureDescription}>
                Adapt to your team&apos;s unique processes with custom columns,
                labels, and automation rules.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3V21H21V3H3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 15H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Advanced Analytics</h3>
              <p className={styles.featureDescription}>
                Track team performance with detailed insights, burndown charts,
                and productivity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to transform your workflow?
            </h2>
            <p className={styles.ctaSubtitle}>
              Join thousands of teams already using our platform to deliver
              better results, faster.
            </p>
            <div className={styles.ctaActions}>
              <Button asChild size="lg" variant="primary">
                <Link href="/auth/login">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
