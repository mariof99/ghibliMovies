import {searchMovie, searchCharacters} from './storage/Connection';

const txtInput = document.getElementById('txtInput');
const displayDiv = document.getElementById('displayDiv');

export const getMovie = async(search) => {
    try {
        const movies = await searchMovie(search);
        movies.forEach(mov => {
            console.log('movId => ' + mov.id);
            mov.characters = searchCharacters(mov.id);
        });

        return movies;
    }
    catch(err) {
        throw err;
    }
}


const crateMovieHtml = (movie, characters) => {

}