export function getAllUsers(){
    return USERDATA;
}

export function getUserById(){
    return USERDATA;
}

export const USERDATA = [
    {
        id: "1",
        userName: "Wood3001",
        userEmail: "wood3001@gmail.com",
        password: "password1",
        userImage: require('../assets/user1.png'),
        about: "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit.",
        genrePref:[],
        watchList:[],
        seenList:[],
    },
    {
        id: "2",
        userName: "Bob Flob",
        userEmail: "bob@flob.com",
        password: "password2",
        userImage: require('../assets/user2.png'),
        about: "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit.",
        genrePref:[],
        watchList:[],
        seenList:[],
    },
]