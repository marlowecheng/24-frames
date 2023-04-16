export function getAllUsers(){
    return USERDATA;
}

export function getUserById(id){
    return USERDATA.find(item => item.id === id);
}

export const USERDATA = [
    {
        id: "1",
        userName: "Wood3001",
        userEmail: "wood3001@gmail.com",
        password: "password1",
        userImage: require('../assets/images/user1.png'),
        about: "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit.",
        genrePref:["28", "35", "14", "878"],
        watchList:["438631", "324857", "111"],
        seenList:["299536", "483", "12133"],
        reviewList:["12133"],
    },
    {
        id: "2",
        userName: "Bob Flob",
        userEmail: "bob@flob.com",
        password: "password2",
        userImage: require('../assets/images/user2.png'),
        about: "ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit.",
        genrePref:[],
        watchList:[],
        seenList:[],
        reviewList:[],
    },
];