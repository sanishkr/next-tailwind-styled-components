import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

configure(require.context('../atoms', true, /\.stories\.js$/), module);
configure(require.context('../molecules', true, /\.stories\.js$/), module);
addDecorator(withInfo);
