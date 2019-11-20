import React from 'react';
import Pill from './Pill';

export default { title: 'Pill' };

export const withText = () => <Pill>Hello Button</Pill>;

export const withEmoji = () => (
  <Pill>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Pill>
);
