# Managing Metadata

- This is a web application that allows for managing metadata of people records. 
  - Fields for a person are:
    - name
	- email
	- birthday
	- zip code (5-digit)

  - Build a UI that implements the basic CRUD operations: (The operations should be executed via an API call)
	- Display existing entries in a data table
	- Functionality to create a new record
	- Functionality to update an existing record
	- Functionality to delete an existing record

## Tools & Resources Used
* HTML	
* CSS	
* JavaScript
* [ReactJS](https://github.com/facebook/react)
* [React with Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Node.js](https://nodejs.org/)
* [Semantic UI React](https://react.semantic-ui.com/)
* [Node Package Manager (NPM)](https://npmjs.com/)
* [MockAPI](https://mockapi.io/)
* [Axios](https://www.npmjs.com/package/axios)
* [Hook Agency Website Color Schemes for 2022](https://hookagency.com/blog/website-color-schemes/)

## How To Use This Application
First, clone [project repo](https://github.com/ashleyerffmeyer/managing-metadata). Then, run `npm install` to install the dependencies. Run with `npm start`. 

Navigate to [http://localhost:3000/create](http://localhost:3000/create) and add your first contact.

Go to [http://localhost:3000/read](http://localhost:3000/read) to see all of your contacts.

Finally, navigate to [http://localhost:3000/update](http://localhost:3000/update) to make an update to a specific contact.

## Development Approach & Assumptions
I sketched out an initial layout of a UI that implemented basic CRUD operations to manage metadata of people's records. Sketches were on paper; layouts consisted of a Create form, an Update form, and table to Read (display) form input.

Initially I wanted to develop this application using the Django framework. After investigating the documenation for a considerable amount of time, I decided to stick with tech I already knew (Javascript, React) in order to develop this application effectively and in a timely manner.

However, I decided to incorporate Semantic UI React to demonstrate that I can implement a new, unfamiliar UI framework. Choosing to use Semantic UI React made incorporating Formik and Yup validation less than straight forward compared to Material UI, my typical go-to UI framework. In the interest of time, I chose to include Formik implementation and validation at a later date.

Overall, learned some great lessons while working on this project such as: continuing to learn to estimate how long it takes to learn new tech (something software engineers can always refine!), sometimes the best solution is the simpliest solution, and always sketch out a plan first.

## Future Functionality
* [Django](https://www.djangoproject.com/)
* [Formik with Semantic UI React](https://formik.org/docs/3rd-party-bindings)
* [Yup Validation for Formik](https://formik.org/docs/guides/validation)
* [Jest](https://jestjs.io/)
* [Cypress](https://www.cypress.io/)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
