import styled from "styled-components";
import tw from "tailwind.macro";
import "../assets/css/pages/page1.css";

const Container = styled.div`
	${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl`};
	margin: 10px;
`;

export default () => {
	return (
		<div css={tw`text-center`}>
			<Container>
				Hello, World!!
				<p css={tw`text-blue-300`}>
					I'm using <code>tailwind</code> and <code>styled-components</code>{" "}
					together.
				</p>
			</Container>
		</div>
	);
};
