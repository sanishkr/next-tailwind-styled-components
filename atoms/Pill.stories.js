import React from 'react';
import Pill from './Pill';

export default { title: 'Pill' };

export const withText = () => <Pill text="Hello Pill"></Pill>;

export const withHashtag = () => <Pill text="#Pill"></Pill>;

export const withEmoji = () => <Pill text="😀 😎 👍 💯"></Pill>;
