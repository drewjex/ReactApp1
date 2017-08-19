// Libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Webpack loaders take care of compiling this and injecting it onto the page
// when this script is run.
import './styles.scss';

// tsconfig and webpack are setup so the "~" character is an absolute reference
// to the "src" directory of the project. This helps avoid paths like this
// "../../../App" and makes refactoring much easier.
import { view } from '~/index';

export function init() {
  // Store a reference to the app container DOM node found in www/index.html
  const appContainer = document.querySelector('#app-container');

  let app = React.createElement(view.App);

  // Tell ReactDOM to render the App component
  // inside the DOM node we've selected.
  ReactDOM.render(app, appContainer);
}
