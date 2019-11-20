import { configure } from '@storybook/react';

configure(require.context('../atoms', true, /\.stories\.js$/), module);
