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


const restaurantMainMenu = [
    {
        description: "Dragon Sushi",
        info: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: '50$',
        imgSrc: images.sushiMenu1,
    },
    {
        description: "Creamy Sushi",
        info: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: '50$',
        imgSrc: images.sushiMenu2,
    },
    {
        description: "Roll Salmon Sushi",
        info: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.',
        price: '50$',
        imgSrc: images.sushiMenu3,
    },
]

const reservationEventInfo = [
    {
        description: "Dining Events",
        info: 'We provide dining event for your special day\nwith your important people',
        span: 'Choose your event',

    },
]

const reservationEvent = [
    {
        description: "Fine Dining",
        info: 'Bottle of Champagne\nFine Sushi Tower For 2+\nDessert',
        price: '$500',
        imgSrc: images.dining1,
    },
    {
        description: "Gold Dining",
        info: 'Bottle of Champagne\nSecret Menu Sushi For 2+\nDessert',
        price: '$1000',
        imgSrc: images.dining2,
    },
    {
        description: "Royalty Dinning",
        info: 'Bottle of Luxury Champagne\nSpecial Menu Sushi For 2+\nRoyal Dessert',
        price: '$1500',
        imgSrc: images.dining3,
    },
]




const data = { restaurantHeader, restaurantSpecialInfo, restaurantSpecialMenu, restaurantMainOffer, restaurantMainMenu, reservationEventInfo, reservationEvent };
export default data