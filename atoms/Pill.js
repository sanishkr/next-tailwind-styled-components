import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledPill = styled.span`
  ${tw`mb-2 xl:mb-0 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2`};
`;

export default ({ text }) => {
  return <StyledPill>{text}</StyledPill>;
};
