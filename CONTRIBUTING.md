# CONTRIBUTING.md

## Contributing to African Photos and Videos

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Report issues professionally
- Follow coding standards
- Respect intellectual property

## Ways to Contribute

### 1. Report Bugs

Submit issues on GitHub with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, browser, Node version)

### 2. Suggest Features

Open a discussion with:
- Feature description
- Use case and benefits
- Potential implementation approach
- Examples if available

### 3. Code Contributions

#### Setup Development Environment

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR-USERNAME/image-stock.git
cd image-stock

# Add upstream remote
git remote add upstream https://github.com/reddotmediang-ui/image-stock.git

# Install dependencies
npm install

# Create feature branch
git checkout -b feature/your-feature-name
```

#### Development Workflow

```bash
# Make your changes
# Test locally
npm run dev

# Lint code
npm run lint

# Build to catch errors
npm run build

# Commit with clear messages
git commit -m "feat: add your feature description"

# Push to your fork
git push origin feature/your-feature-name

# Create pull request on GitHub
```

### 4. Documentation

Help improve documentation:
- Fix typos
- Clarify instructions
- Add examples
- Translate content
- Add troubleshooting steps

## Coding Standards

### JavaScript/React

```javascript
// Use arrow functions
const myFunction = () => {};

// Use const by default
const value = 'string';

// Use meaningful names
const isUserLoggedIn = true;

// Add comments for complex logic
// Calculate the total with tax
const total = subtotal * (1 + taxRate);

// Use destructuring
const { name, email } = user;

// Use template literals
const message = `Hello, ${name}!`;
```

### CSS

```css
/* Use descriptive class names */
.button-primary { }

/* Use CSS modules for components */
.container { }
.title { }

/* Mobile-first approach */
@media (min-width: 768px) {
  .container { }
}
```

### Components

```javascript
// Import at the top
import styles from '@/styles/Component.module.css';

// Use function components
export default function Component({ prop1, prop2 }) {
  return (
    <div className={styles.container}>
      {/* Content */}
    </div>
  );
}
```

## Commit Message Format

```
type(scope): subject (50 chars max)

body (72 chars wrap, explain what and why)

footer (reference issues, breaking changes)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Test changes
- `chore`: Build, deps, etc.

### Examples

```
feat(blog): add reading time calculation

Calculates estimated reading time based on word count.
Uses average reading speed of 200 words per minute.

Fixes #123
```

```
fix(gallery): correct image loading on mobile

Image srcset was not properly applied on mobile devices,
causing incorrect image sizes to load.

Fixes #456
```

## Pull Request Process

1. **Update from upstream**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Test thoroughly**
   - Test locally
   - Run linter
   - Build production version
   - Test on multiple devices
   - Test in different browsers

3. **Write clear PR description**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation
   - [ ] Performance improvement
   
   ## How to Test
   Steps to verify the changes
   
   ## Screenshots
   If UI changes, include screenshots
   
   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Tests pass locally
   - [ ] No new console errors
   - [ ] Documentation updated
   ```

4. **Respond to reviews**
   - Address feedback promptly
   - Discuss concerns respectfully
   - Make requested changes
   - Re-request review after changes

5. **Merge**
   - Maintainer will merge when approved
   - Celebrate your contribution! 🎉

## Testing

### Manual Testing Checklist

- [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile (iOS, Android)
- [ ] Test on tablet
- [ ] Check responsive design
- [ ] Verify links work
- [ ] Check form submission
- [ ] Test keyboard navigation
- [ ] Check with screen reader
- [ ] Verify no console errors
- [ ] Check performance (Lighthouse)

## Documentation Style

- Use clear, simple language
- Include code examples
- Add screenshots when helpful
- Keep formatting consistent
- Link to related docs

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Web Accessibility](https://www.w3.org/WAI/)

## Questions?

Feel free to ask questions in:
- GitHub Issues
- GitHub Discussions
- Email: contact@africanphotosandvideos.com.ng

## Recognition

Contributors are recognized in:
- GitHub contributors page
- CONTRIBUTORS.md file
- Release notes
- Website credits (upon request)

Thank you for contributing! 🙏
