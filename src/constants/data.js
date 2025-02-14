import images from '../constants/images'

const restaurantHeader = [
    {
        description: "Taste the rich flavor of \n high quality sushi",
        info: 'We only use the five star quality for \n our menu, come and get the richness in \n every food we serve.',
        span: 'Best sushi in town',
    },
]

const restaurantSpecialInfo = [
    {
        description: "Today's Special",
        info: "Special menu often comes different \n everyday, \n this is our special food for today.",
        span: 'Special Menu',
    },
]

const restaurantSpecialMenu = [
    {
        imgSrc: images.sushi1,
        title: "Tuna Sushi",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam architecto fuga.",
    },
    {
        imgSrc: images.sushi2,
        title: "Salomon Sushi",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam architecto fuga.",
    },
    {
        imgSrc: images.sushi3,
        title: "Just Sushi",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam architecto fuga.",
    },
];

const restaurantMainOffer = [
    {
        description: "Our Specialities",
        info: 'Authentic food from our restaurant served \n with high quality ingredients',
        span: 'Quality food for you',
    },
]

const data = { restaurantHeader, restaurantSpecialInfo, restaurantSpecialMenu, restaurantMainOffer };
export default data