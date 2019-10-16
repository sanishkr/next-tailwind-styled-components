import styled from "styled-components";
import tw from "tailwind.macro";

const Header = styled.h1`
	${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

export default () => {
	return (
		<div css={tw`text-center`}>
			<Header>
				<p css={tw`text-blue-300`}>
					Using <code>tailwind</code> and <code>styled-components</code>{" "}
					together.
				</p>
			</Header>
		</div>
	);
};
