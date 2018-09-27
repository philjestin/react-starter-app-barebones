import React from 'react';
import { storiesOf } from '@storybook/react';

import Summary from '../src/Summary';

storiesOf('Summary Page', module)
  .add('Renders Summary Page', () => {
    return (
      <Summary />
    );
  });
