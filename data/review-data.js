export function getAllReviews(){
    return REVIEWDATA;
}
export const REVIEWDATA = [
    {
        id: "01",
        movieId: "",
        userId: "1",
        userName: "Wood3001",
        userImage: require('../assets/images/user1.png'),
        text: "Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: "5",
    },
    {
        id: "02",
        movieId: "",
        userId: "2",
        userName: "Bob Flob",
        userImage: require('../assets/images/user2.png'),
        text: "Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: "3",
    },
]