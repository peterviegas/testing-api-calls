# Testing API calls in React with the SWAPI API - Assignment

🧪 Assignment - Testing API calls in React with the Star Wars API 🧪

## Part 1:
Have a read of the React Testing Library Documentation: https://testing-library.com/docs/react-testing-library/example-intro#full-example
and Mock Service Worker Library: https://mswjs.io/
Once you’re familiar, have a go at this React Testing Library Quiz!
It’s important you do this before starting on the Part 2

## Part 2:
Now you have familiarised yourself with the React Testing and Mock Service Worker Libraries and how to mock an API call example(s) you are ready for the next step!
Your challenge is to put these learnings into practice and mock an API call from a React app (don’t forget the TypeScript flag!) that you’ve created. For this challenge you will be putting into practice your knowledge of TypeScript, React, Hooks, APIs and Testing. 💃
You’ve got this! 🙌

📝 The Brief:
The aim of this is to make a GET request to the Star Wars people end point and for your App component to display the title of the first person that comes back from the API end point (name: 'Luke Skywalker').

## Star Wars API docs: SWAPI - The Star Wars API
👉 Create a React app
👉 Have the React app call the Star Wars API people end point and display the first person on the page.
👉 Next, add msw so you can mock (or "stub") the API response.
👉 Use your mock server to write a test to check the first person that your mock server returns is being correctly rendered to the page.

##🔥 Part 3 (extension):
👉 Write a test that checks your component displays an error message saying "Oops... something went wrong, try again 🤕" if the API returns Status Code 500 (Internal Server Error: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 ).
👉 Write another test checking your component displays an error message saying "418 I'm a tea pot 🫖, silly" in the scenario the API returns Status Code 418 (I’m a tea pot: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418 )

## 💡Top Tips💡
This exercise is about what your app looks like so don’t worry about styling! If you have time to add styling later - then great! But make sure you get through the extensions first 🫖
You will need to create a React app from scratch and strip out excess boiler plate.
1npx create-react-app myAppName --template typescript
You will need to make an API call (Hint: recall how to use and the hook for this)
You will need to consider waiting for your data to load in both your app and your tests
(Hint: and and the jest-dom queries that start with findBy )
Remember to commit little and often to GitHub, and to keep your commit messages nice and descriptive
Don’t forget to add a README explaining how to run your app when it’s done! 🔥


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
