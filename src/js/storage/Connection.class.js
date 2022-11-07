import {movies} from "./data";

export class Connection {
    static searchMovie = async(id) => {
        const movie = movies.filter(mov => {
            return mov.id === id;
        });

        if (movie) {
            return movie;
        }
        else {
            throw Error('could not find the movie');
        }
    }
}

console.log(Connection.searchMovie('12cfb892-aac0-4c5b-94af-521852e46d6a'));

