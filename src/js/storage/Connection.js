import {movies, people} from "./data";

export const searchMovie = async(search) => {
    const movieSearch = movies.filter(mov => {
        return mov.title.toUpperCase().includes(search.trim().toUpperCase());
    });

    if (movieSearch.length > 0) {
        return movieSearch;
    }
    else {
        throw Error('could not find the movie');
    }
}

export const searchCharacters = async(movieId) => {
    const movieCharacters = people.filter(char => {
        return char.films[0] == movieId;
    });

    if (movieCharacters) {
        console.log(movieCharacters);
        return movieCharacters;
    }
    else {
        throw Error('could not find the characters');
    }
}


