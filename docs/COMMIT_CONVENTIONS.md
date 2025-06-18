# Commit Message Conventions

This document describes the commit message format and conventions used in this project. We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification with some project-specific guidelines.

## Commit Message Format

Each commit message consists of a **header**, an optional **body**, and an optional **footer**.

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### Header

The header is mandatory and must conform to the following format:

```
<type>(<scope>): <subject>
```

- **type**: Describes the kind of change (see [Types](#types) below)
- **scope**: Optional, describes what part of the codebase is affected
- **subject**: Short description of the change

#### Rules:

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Don't capitalize the first letter
- No period (.) at the end

### Types

The following types are allowed:

| Type       | Description                                              | Example                                   |
| ---------- | -------------------------------------------------------- | ----------------------------------------- |
| `feat`     | New feature for the user                                 | `feat: add dark mode toggle`              |
| `fix`      | Bug fix                                                  | `fix: resolve memory leak in data grid`   |
| `docs`     | Documentation only changes                               | `docs: update API reference`              |
| `style`    | Code style changes (formatting, missing semicolons, etc) | `style: fix indentation in components`    |
| `refactor` | Code change that neither fixes a bug nor adds a feature  | `refactor: extract common logic to utils` |
| `perf`     | Performance improvements                                 | `perf: optimize image loading`            |
| `test`     | Adding missing tests or correcting existing tests        | `test: add unit tests for auth service`   |
| `build`    | Changes that affect the build system or dependencies     | `build: upgrade to Next.js 15`            |
| `ci`       | Changes to CI configuration files and scripts            | `ci: add GitHub Actions workflow`         |
| `chore`    | Other changes that don't modify src or test files        | `chore: update .gitignore`                |
| `revert`   | Reverts a previous commit                                | `revert: feat: add dark mode toggle`      |
| `wip`      | Work in progress (use sparingly)                         | `wip: initial implementation of search`   |

### Scope

The scope should be the name of the package or app affected (as perceived by the person reading the changelog).

For this monorepo, common scopes include:

- `web` - The main web application
- `web-e2e` - E2E tests for the web app
- `design-system` - Design system package
- `eslint-config` - ESLint configuration package
- `config` - General configuration changes
- `deps` - Dependency updates

Examples:

- `feat(web): add user profile page`
- `fix(design-system): button hover state`
- `test(web-e2e): add checkout flow tests`

### Subject

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No dot (.) at the end
- Limit to 72 characters

### Body

The body should include the motivation for the change and contrast this with previous behavior. This is the place to mention breaking changes.

- Use the imperative, present tense
- Include motivation for the change
- Contrast behavior with previous behavior

Example:

```
fix(web): prevent race condition in data fetching

Previously, multiple simultaneous requests could cause state
inconsistencies. This change implements a request queue to
ensure proper sequencing.

The fix involves:
- Adding a request queue mechanism
- Implementing proper cleanup on component unmount
- Adding error boundaries for failed requests
```

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit closes.

Breaking Changes should start with the word `BREAKING CHANGE:` with a space or two newlines.

Example:

```
feat(api): change authentication method

BREAKING CHANGE: JWT tokens are now required for all API endpoints.
Previously, some endpoints allowed anonymous access.

Closes #123
```

## Examples

### Simple Examples

```
feat: add Google Analytics integration
```

```
fix(web): correct navigation menu z-index issue
```

```
docs: add troubleshooting section to README
```

### Complex Example with Body and Footer

```
feat(web): implement real-time notifications

Add WebSocket-based notification system that allows users to receive
real-time updates for important events.

Implementation includes:
- WebSocket connection management
- Notification queue with persistence
- User preference settings
- Fallback to polling for older browsers

BREAKING CHANGE: Requires WebSocket support on the server.
The new notification system replaces the old email-only notifications.

Closes #456, #789
```

## Commit Message Validation

This project uses [commitlint](https://commitlint.js.org/) to ensure all commit messages follow these conventions. Invalid commit messages will be rejected with helpful error messages.

### Testing Your Commit Message

You can test if your commit message follows the conventions:

```bash
echo "feat: add new feature" | npx commitlint
```

## Tips for Writing Good Commit Messages

1. **Separate concerns**: Make each commit a logical unit of change. Don't mix unrelated changes.

2. **Explain why, not what**: The diff shows what changed, but the commit message should explain why.

3. **Consider the reviewer**: Write messages that will help code reviewers understand your changes.

4. **Think about the future**: Write messages that will make sense to someone (maybe you!) reading them months from now.

## Common Mistakes to Avoid

❌ **Too vague:**

```
fix: fix bug
chore: update files
```

✅ **Be specific:**

```
fix: prevent form submission with invalid email
chore: update ESLint config to support React 19
```

❌ **Multiple changes in one commit:**

```
feat: add login page, fix navigation bug, update styles
```

✅ **Separate commits:**

```
feat(web): add login page
fix(web): correct navigation active state
style(web): update button hover effects
```

❌ **Past tense:**

```
feat: added new dashboard
```

✅ **Present tense imperative:**

```
feat: add new dashboard
```

## IDE Integration

### VS Code

- Install the [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) extension for auto-completion

### WebStorm/IntelliJ

- Enable the built-in commit message inspection under Settings → Version Control → Commit

## Questions?

If you have questions about these conventions, please:

1. Check the [Conventional Commits](https://www.conventionalcommits.org/) specification
2. Review existing commit messages in the repository
3. Ask the team for clarification
