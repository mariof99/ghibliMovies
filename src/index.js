import './styles.scss';

import {getMovie} from './js/components';
import {searchMovie, searchCharacters} from './js/storage/Connection';


const totoro = getMovie('toto');

console.log(totoro.characters);
