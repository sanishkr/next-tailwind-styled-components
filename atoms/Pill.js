import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledPill = styled.span`
  ${tw`inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full xl:mb-0`};
`;

export default ({ text }) => {
  return <StyledPill>{text}</StyledPill>;
};
