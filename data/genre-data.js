// makes a function to getAllGenres from the array below
export function getAllGenres(){
    return GENREDATA;
}

export function getGenreById(id){
    return GENREDATA.find(item => item.id === id);
}

//holds a multi-dimensional array with genre name, images, and IDs
export const GENREDATA = [
    {
        id: "01",
        name: "Action",
        genreImage: require('../assets/images/action.jpg'),
        genreSmallImage: require('../assets/images/small_action.jpg'),
        genreId: "28",
    },
    {
        id: "02",
        name: "Adventure",
        genreImage: require('../assets/images/adventure.jpg'),
        genreSmallImage: require('../assets/images/small_adventure.jpg'),
        genreId: "12",
    },
    {
        id: "03",
        name: "Animation",
        genreImage: require('../assets/images/animation.jpg'),
        genreSmallImage: require('../assets/images/small_animation.jpg'),
        genreId: "16",
    },
    {
        id: "04",
        name: "Comedy",
        genreImage: require('../assets/images/comedy.jpg'),
        genreSmallImage: require('../assets/images/small_comedy.jpg'),
        genreId: "35",
    },
    {
        id: "05",
        name: "Documentary",
        genreImage: require('../assets/images/doc.jpg'),
        genreSmallImage: require('../assets/images/small_doc.jpg'),
        genreId: "99",
    },
    {
        id: "06",
        name: "Drama",
        genreImage: require('../assets/images/drama.jpg'),
        genreSmallImage: require('../assets/images/small_drama.jpg'),
        genreId: "18",
    },
    {
        id: "07",
        name: "Fantasy",
        genreImage: require('../assets/images/fantasy.jpg'),
        genreSmallImage: require('../assets/images/small_fantasy.jpg'),
        genreId: "14",
    },
    {
        id: "09",
        name: "Horror",
        genreImage: require('../assets/images/horror.jpg'),
        genreSmallImage: require('../assets/images/small_horror.jpg'),
        genreId: "27",
    },
    {
        id: "10",
        name: "Music",
        genreImage: require('../assets/images/musical.jpg'),
        genreSmallImage: require('../assets/images/small_musical.jpg'),
        genreId: "10402",
    },
    {
        id: "11",
        name: "Romance",
        genreImage: require('../assets/images/romcom.jpg'),
        genreSmallImage: require('../assets/images/small_romcom.jpg'),
        genreId: "10749",
    },
    {
        id: "12",
        name: "Sci-Fi",
        genreImage: require('../assets/images/sci-fi.jpg'),
        genreSmallImage: require('../assets/images/small_sci-fi.jpg'),
        genreId: "878",
    },
    {
        id: "13",
        name: "Western",
        genreImage: require('../assets/images/western.jpg'),
        genreSmallImage: require('../assets/images/small_western.jpg'),
        genreId: "37",
    },
]