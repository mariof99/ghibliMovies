import {movies} from "./data";

export class Connection {
    static searchMovie = async(search) => {
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

    static searchCharacters = async(characters) => {

    }
}

console.log(Connection.searchMovie('12cfb892-aac0-4c5b-94af-521852e46d6a'));
