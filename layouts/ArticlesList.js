import ArticleCard from "../components/ArticleCard";
import styled from "styled-components";
import tw from "tailwind.macro";

const Header = styled.h1`
	${tw`text-6xl text-center text-gray-800 text-black font-mono`}
`;

export default ({ articleList }) => {
	return (
		<>
			<Header>Articles</Header>
			<div css={tw`mt-4 mx-4 flex flex-wrap justify-around`}>
				{articleList.map((article, i) => (
					<ArticleCard key={i} data={article}></ArticleCard>
				))}
			</div>
		</>
	);
};
