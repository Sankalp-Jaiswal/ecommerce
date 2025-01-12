# E-Commerce Client

This is the client-side application for the E-Commerce project. Below is an explanation of each route used in `App.jsx` and all dependencies used in `package.json`.

## Routes in `App.jsx`

1. **Home Route (`/`)**
   - Component: `Home`
   - Description: This is the main landing page of the e-commerce site.

2. **Product Route (`/product/:productId`)**
   - Component: `Product`
   - Description: This route displays the details of a specific product based on the `productId` parameter.

3. **Cart Route (`/cart`)**
   - Component: `Cart`
   - Description: This route displays the user's shopping cart with all the items they have added.

4. **Checkout Route (`/checkout`)**
   - Component: `Checkout`
   - Description: This route handles the checkout process where users can review their order and make a payment.

5. **Search Route (`/search`)**
   - Component: `Search`
   - Description: This route displays the search results based on the user's query.

## Dependencies in `package.json`

- **react**: A JavaScript library for building user interfaces.
- **react-dom**: This package serves as the entry point to the DOM and server renderers for React.
- **react-router-dom**: DOM bindings for React Router, enabling navigation among views of various components in a React application.
- **react-toastify**: A library to add notifications to your app with ease.
- **axios**: A promise-based HTTP client for the browser and Node.js.
- **classnames**: A utility for conditionally joining classNames together.
- **react-icons**: Include popular icons in your React projects easily with react-icons.
- **react-scripts**: This package includes scripts and configuration used by Create React App.
- **styled-components**: Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- **web-vitals**: A library for measuring the quality of user experience on the web.

## Development Dependencies

- **eslint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **eslint-plugin-react**: React specific linting rules for ESLint.
- **prettier**: An opinionated code formatter.
- **prettier-eslint**: Formats your JavaScript using Prettier followed by ESLint --fix.
- **prettier-eslint-cli**: CLI for prettier-eslint.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Run tests:
   ```bash
   npm test
   ```

## Additional Information

- **Context API**: The application uses React's Context API to manage global state, such as the shopping cart and user authentication.
- **Toast Notifications**: The application uses `react-toastify` for displaying notifications to the user.
- **Styled Components**: The application uses `styled-components` for styling React components.

For more detailed information, please refer to the individual component and utility files.
