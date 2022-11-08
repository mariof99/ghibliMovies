import {searchMovie, searchCharacters} from './storage/Connection';

const txtInput = document.getElementById('txtInput');
const displayDiv = document.getElementById('displayDiv');
const searchButton = document.getElementById('searchButton');

export const getMovies = async(search) => {
    try {
        const moviesToPrint = await searchMovie(search);

        let charactersToPrint = [];
        const characters = moviesToPrint.map(mov => searchCharacters(mov.id))
        for await (const chars of characters) {
            charactersToPrint = charactersToPrint.concat(chars);
        }

        moviesToPrint.forEach(mov => {
            mov.characters = charactersToPrint.filter(char => {
                console.log(char);
                return char.films[0] === mov.id;
            });
        });

        
        console.error(moviesToPrint);
        return moviesToPrint;
    }
    catch(err) {
        throw err;
    }
}


const crateMovieHtml = (movie) => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movieDiv');
    const movieDivHtml = `
        <div class="title">Title: ${(movie.title)}</div>
        <div class="ogTitle">Original title: ${(movie.original_title)}</div>
        <div class="description">Description: ${(movie.description)}</div>
        <div class="director">Director: ${(movie.director)}</div>
        <div class="releaseDate">Release date: ${(movie.release_date)}</div>
        <div class="image"><img src="${(movie.image)}" /></div>
        <div class="characters">
            <p>Characters: </p>
        </div>
    `;

    movieDiv.innerHTML = movieDivHtml;

    movie.characters.forEach(char => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('characterDiv');
        const characterDivHtml = `
            <div class="character">
                <div class="chName">Name: ${(char.name)}</div>
                <div class="chGender">Gender: ${(char.gender)}</div>
                <div class="chAge">Age: ${(char.age)}</div>
            </div>
        `;

        characterDiv.innerHTML = characterDivHtml;
        movieDiv.getElementsByClassName('characters')[0].append(characterDiv);
    });

    displayDiv.append(movieDiv);

    return movieDiv;
}

searchButton.addEventListener('click', e => {
    getMovies(txtInput.value).then(movies => {
        movies.forEach(mov => {
            displayDiv.innerHTML = '';
            crateMovieHtml(mov);
        });
    });

    txtInput.value = '';
})

