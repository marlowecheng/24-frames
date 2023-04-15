import AsyncStorage from '@react-native-async-storage/async-storage';


export async function getWatchlistArrayByUser(userId) {

    let arrWatch = [];

    try {
        arrWatch = await AsyncStorage.getItem(userId + '_LIST');
    } catch (e) {
        console.log('error: ' + e);
    }

    return arrWatch;
}

export async function updateWatchlistArrayByUser(userId, arrWatchlist) {

    try {
        await AsyncStorage.setItem(userId + '_LIST', JSON.stringify(arrWatchlist))
    } catch (e) {
        console.log('error: ' + e);
    }
}

export function checkWatchlist(checkKey, currWatchlist) {

    let foundIndex = currWatchlist.findIndex(ele => ele.id == checkKey);

    if (foundIndex >= 0) {
        return true;
    }

    return false;
}

export function addToWatchlist(newMovie, currWatchlist) {

    if (!checkWatchlist(newMovie.id, checkWatchlist)) {

        const liteMovie = {
            id: newMovie.id,
        }

        currWatchlist.push(newMovie);
    }
}

export function delWatchlist(delMovie, currWatchlist) {

    let filteredList = currWatchlist.filter(ele => ele.id != delMovie.id);

    return filteredList;
}