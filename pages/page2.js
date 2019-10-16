import ArticlesList from "../layouts/ArticlesList";

import "../assets/css/pages/page2.css";

const articlesData = [
	{
		id: 1,
		imgUrl: "https://tailwindcss.com/img/card-top.jpg",
		imgAlt: "Sunset in the mountains",
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
		tags: ["photography", "travel", "winter"]
	},
	{
		id: 2,
		imgUrl: "https://tailwindcss.com/img/card-top.jpg",
		imgAlt: "Sunset in the mountains",
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
		tags: ["photography", "travel", "winter"]
	},
	{
		id: 3,
		imgUrl: "https://tailwindcss.com/img/card-top.jpg",
		imgAlt: "Sunset in the mountains",
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
		tags: ["photography", "travel", "winter"]
	},
	{
		id: 4,
		imgUrl: "https://tailwindcss.com/img/card-top.jpg",
		imgAlt: "Sunset in the mountains",
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
		tags: ["photography", "travel", "winter"]
	},
	{
		id: 5,
		imgUrl: "https://tailwindcss.com/img/card-top.jpg",
		imgAlt: "Sunset in the mountains",
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
		tags: ["photography", "travel", "winter"]
	},
	{
		id: 6,
		imgUrl: "https://tailwindcss.com/img/card-top.jpg",
		imgAlt: "Sunset in the mountains",
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
		tags: ["photography", "travel", "winter"]
	},
	{
		id: 7,
		imgUrl: "https://tailwindcss.com/img/card-top.jpg",
		imgAlt: "Sunset in the mountains",
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
		tags: ["photography", "travel", "winter"]
	},
	{
		id: 8,
		imgUrl: "https://tailwindcss.com/img/card-top.jpg",
		imgAlt: "Sunset in the mountains",
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
		tags: ["photography", "travel", "winter"]
	},
	{
		id: 9,
		imgUrl: "https://tailwindcss.com/img/card-top.jpg",
		imgAlt: "Sunset in the mountains",
		title: "The Coldest Sunset",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
		tags: ["photography", "travel", "winter"]
	}
];

export default () => {
	return <ArticlesList articleList={articlesData}></ArticlesList>;
};
