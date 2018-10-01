# React Starter App Barebones Edition
Just a repo of the kind of stuff I want when starting a react app.

## Getting Started
To run on your computer

* `brew install yarn`
* `yarn install`
* `yarn start`

## Technologies Being Used
*  [React](https://reactjs.org/)
*  [Redux](https://redux.js.org/)
*  [React-Router](https://reacttraining.com/react-router/)
*  [RxJS](https://rxjs-dev.firebaseapp.com/)
*  [ImmutableJS](http://facebook.github.io/immutable-js/)
*  [SASS](https://sass-lang.com/)
*  [Jest](https://jestjs.io/)
*  [Enzyme](http://airbnb.io/enzyme/)
*  [Yarn](https://yarnpkg.com/en/)
*  [Webpack](https://webpack.js.org/)
*  [Babel](https://babeljs.io/)

## Getting Started
To run on your computer

* `brew install yarn`
* `git clone ssh://git@bitbucket.associatesys.local/ims/react-postsales.git`
* `yarn install`
* `yarn start`


## Developer Command Reference
* `yarn start` Compile the app in a dev environment, watch for changes and do hot-reloading. The app starts on [http://localhost:9001](http://localhost:9001)
* `yarn build` Creates a dist build folder containing minified production assets.
* `yarn storybook` Launches the storybook for the project. Which is a nice place to develop react components, it provides many different useful tools to speed up the development process.
* `yarn test` Runs unit tests once.
* `yarn test -u` Runs the unit tests and updates Jest snapshots so that snapshots don't fail when you have made changes to a react component.

## Testing

### Snapshot Testing with Jest
"Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case for a mobile app renders a UI component, takes a screenshot, then compares it to a reference image stored alongside the test. The test will fail if the two images do not match: either the change is unexpected, or the screenshot needs to be updated to the new version of the UI component."

## What is Storybook

[Storybook](https://storybook.js.org/basics/introduction/) is a UI development environment for your UI components. With it, you can visualize different states of your UI components and develop them interactively.

[Storybook](https://storybook.js.org/basics/introduction/) runs outside of your app. So you can develop UI components in isolation without worrying about app specific dependencies and requirements.

## Enabled Storybook Addons

The list of currently added Addon's that are registered to the story book are as follows:

### [a11y](https://github.com/storybooks/storybook/tree/master/addons/a11y)

With a11y you can test compliance of your stories with web accessibility standards.

### [Actions](https://github.com/storybooks/storybook/tree/release/3.4/addons/actions)

With actions, you can inspect events related to your components. This is pretty neat when you are manually testing your components.

Also, you can think of this as a way to document events in your components.

### [Knobs](https://github.com/storybooks/storybook/tree/release/3.4/addons/knobs)

Knobs allow you to edit React props dynamically using the Storybook UI.
You can also use Knobs as dynamic variables inside your stories.

### [Notes](https://github.com/storybooks/storybook/tree/release/3.4/addons/notes)

With this addon, you can write notes for each story in your component. This is pretty useful when you are working with a team.

### [Info](https://github.com/storybooks/storybook/tree/release/3.4/addons/info)

If you are using Storybook as a style guide, then this addon will help you to build a nice-looking style guide with docs, automatic sample source code with a PropType explorer.

### [Viewport](https://github.com/storybooks/storybook/tree/release/3.4/addons/viewport)

Viewport allows your stories to be displayed in different sizes and layouts in [Storybook](https://storybook.js.org).  This helps build responsive components inside of Storybook.
