# React TypeScript Starter

Welcome to **React TypeScript Starter**! This is a boilerplate project designed to kickstart your React projects with TypeScript. It is equipped with all the necessary tools and configurations to simplify development while maintaining a clean and efficient workflow.

---

## **Features**

- 🔷 **React with TypeScript**: Enjoy the power of type safety while building modern React applications.
- 🚀 **Webpack Setup**: Configured for efficient bundling and development.
- 🧹 **Code Quality Tools**: Integrated ESLint and Prettier to ensure high-quality, consistent code.
- ✅ **Testing Ready**: Includes Jest and React Testing Library for testing your components and logic.
- 🛠 **Developer Utilities**:
    - **Hot Module Replacement** for seamless development.
    - **Lint-staged** and **Husky** for automated pre-commit checks.
    - **npm-run-all** for efficient script execution.
- 🧪 **Type Checking**: Thorough type checking with TypeScript.
- ♻️ **Reusable Scripts**: Organized and reusable NPM scripts to speed up common tasks.

---

## **Quick Start**

Follow these simple steps to set up and start working with the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/paulpladziewicz/react-typescript-starter.git
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm start
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## **Available Scripts**

Here’s a list of the included NPM scripts:

- **Development**:
    - `npm start`: Starts the development server with hot module replacement.

- **Build**:
    - `npm run build`: Cleans up previous builds and compiles the application for production.

- **Linting and Formatting**:
    - `npm run lint`: Runs ESLint to check for code quality issues.
    - `npm run prettier`: Verifies code formatting using Prettier.
    - `npm run format`: Fixes both ESLint and Prettier issues.

- **Testing**:
    - `npm run test`: Executes all tests using Jest.

- **Type Checking**:
    - `npm run check-types`: Runs TypeScript for type checking.

- **Validation**:
    - `npm run validate`: Executes all necessary validations (tests, linting, type-checking, and formatting) to ensure code quality across the project.

---

## **Folder Structure**

```plaintext
root/
├── /src               # Main source files
├── /dist              # Compiled production files (generated after build)
├── /node_modules      # Installed dependencies
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── webpack.config.js  # Webpack configuration
├── .eslintrc.json     # ESLint configuration
├── .prettierrc.json   # Prettier configuration
└── .gitignore         # Ignored files in Git
```

---

## **Code Quality & Automation**

This starter template includes tools and automations to ensure your codebase remains clean and manageable:

- **Prettier**: Ensures consistent code formatting.
- **ESLint**: Helps identify problematic code patterns.
- **Husky**: Automatically runs pre-commit hooks.
- **Lint-staged**: Executes linters and formatters only on staged files for faster feedback.

---

## **Development Requirements**

To get started with the **React TypeScript Starter**, you’ll need the following requirements:

- Node.js (v16.x or higher recommended)
- npm (v8.x or higher)

---

## **Contributing**

Feel free to open issues or contribute to this project by submitting pull requests. Follow the existing code style and workflows for your contributions.

1. **Fork the Repository**
2. **Create a Feature Branch**
3. **Push Your Changes**
4. **Open a Pull Request**

---

## **License**

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for additional details.

---

## **Support**

For any issues or questions, please visit the [GitHub Issues](https://github.com/paulpladziewicz/react-typescript-starter/issues) page.

---

Happy coding! 🚀