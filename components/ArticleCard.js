import styled from "styled-components";
import tw from "tailwind.macro";

import CardBody from "../molecules/CardBody";
import Pill from "../atoms/Pill";

const Card = styled.div`
	${tw`w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-sm`};
`;

export default ({ data }) => {
	const { id, title, description, imgUrl, imgAlt, tags } = data;
	return (
		<Card>
			<div css={tw`mb-4 mx-2 bg-white rounded overflow-hidden shadow-lg`}>
				<img css={tw`w-full`} src={imgUrl} alt={imgAlt} />
				<CardBody title={title} description={description}></CardBody>
				<div css={tw`px-6 py-4`}>
					{tags.map((tag, i) => (
						<Pill key={i} text={`#${tag}`}></Pill>
					))}
				</div>
			</div>
		</Card>
	);
};
