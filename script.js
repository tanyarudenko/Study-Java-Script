"use strict";

// const personalMovieDb = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDb.count = +prompt ("Сколько фильмов вы уже посмотрели?", "");

//         while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
//             personalMovieDb.count = +prompt ("Сколько фильмов вы уже посмотрели?", "");
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt ("Один из последних просмотренных фильмов?", "").trim(),
//                 b = prompt ("На сколько оцените его?", "");

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDb.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('errror');
//                 i--;
//             }
//         }   
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDb.count < 10) {   
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) { 
//             console.log("Вы классический зритель ");
//         } else if (personalMovieDb.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     },
//     showMyDb: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDb);
//         }   
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDb.privat) {
//             personalMovieDb.privat = false;
//         } else {
//             personalMovieDb.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//             personalMovieDb.genres[i - 1] = genre;
//         }
//     }
// };



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    
    },
    actors: {

    },
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
