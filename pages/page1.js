import styled from "styled-components";
import tw from "tailwind.macro";
import "../assets/css/pages/page1.css";

const Container = styled.div.attrs({ dir: "rtl" })`
	${tw`bg-gray-800 min-h-screen flex flex-col items-center justify-center text-xl`};
	margin: 10px;
	&[dir="ltr"] {
		margin-left: 1rem;
		margin-right: 1rem;
	}
	&[dir="rtl"] {
		margin-left: 2rem;
		margin-right: 2rem;
	}
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
