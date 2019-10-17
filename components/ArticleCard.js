import styled from "styled-components";
import tw from "tailwind.macro";

import CardBody from "../molecules/CardBody";
import Pill from "../atoms/Pill";

const Card = styled.div`
	${tw`mb-4 mx-2 bg-white overflow-hidden shadow-lg`};
	${props => (props.rounded ? tw`rounded` : ``)};
`;

export default ({ data }) => {
	const { id, title, description, imgUrl, imgAlt, tags } = data;
	return (
		<div css={tw`w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-sm`}>
			<Card rounded>
				<img css={tw`w-full`} src={imgUrl} alt={imgAlt} />
				<CardBody title={title} description={description}></CardBody>
				<div css={tw`px-6 py-4`}>
					{tags.map((tag, i) => (
						<Pill key={i} text={`#${tag}`}></Pill>
					))}
				</div>
			</Card>
		</div>
	);
};
