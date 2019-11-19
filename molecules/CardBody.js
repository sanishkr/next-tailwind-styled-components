import React from 'react';

// import styled from 'styled-components';
import tw from 'tailwind.macro';

export default ({ title, description }) => {
  return (
    <div css={tw`px-6 py-4`}>
      <div css={tw`font-bold text-gray-900 text-xl mb-2`}>{title}</div>
      <p css={tw`text-gray-700 text-base`}>{description}</p>
    </div>
  );
};
