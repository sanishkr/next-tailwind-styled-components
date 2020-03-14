import React from 'react';

// import styled from 'styled-components';
import tw from 'twin.macro';

export default ({ title, description }) => {
  return (
    <div css={tw`px-6 py-4`}>
      <div css={tw`mb-2 text-xl font-bold text-gray-900`}>{title}</div>
      <p css={tw`text-base text-gray-700`}>{description}</p>
    </div>
  );
};
