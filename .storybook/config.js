import { addDecorator, configure } from '@storybook/react';

// Globally Add with info 
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withViewport } from '@storybook/addon-viewport';

// Global Decorators
// addDecorator(withInfo);
addDecorator(centered);
addDecorator(checkA11y);
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
