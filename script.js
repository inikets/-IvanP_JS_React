console.log("Marik");

let NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(NumberOfFilms);

//let LastMovie = prompt('Один из последних просмотрных фильмов?','');
//let GradeMovie = prompt('На сколько оцените его?','');

//let LastMovie2 = prompt('Один из последних просмотрных фильмов?','');
//let GradeMovie2 = prompt('На сколько оцените его?','');

personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//personalMovieDB.movies[LastMovie] = GradeMovie;
//personalMovieDB.movies[LastMovie2] = GradeMovie2;

console.log(personalMovieDB);

// for (let i = 0; i < 1; i++){
//     let LastMovie = prompt('Один из последних просмотрных фильмов?','');
//     let GradeMovie = prompt('На сколько оцените его?','');

//     if (LastMovie.length < 50 && LastMovie != null && LastMovie != '' && GradeMovie != null && GradeMovie != '') {
//         personalMovieDB.movies[LastMovie] = GradeMovie;
//     } else {
//         i--;
//     }
// };

if (personalMovieDB.count < 10) {
    alert ('Вы посмотрели очень мало фильмов')
}  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert ('Вы классический зритель')
}  else if (personalMovieDB.count >= 30) {
    alert ('Вы киноман')
}  else {
    alert ('Error')
};

let a = 0;

do {
    let LastMovie = prompt('Один из последних просмотрных фильмов?','');
    let GradeMovie = prompt('На сколько оцените его?','');

    if (LastMovie.length < 50 && LastMovie != null && LastMovie != '' && GradeMovie != null && GradeMovie != '') {
        personalMovieDB.movies[LastMovie] = GradeMovie;
    } else {
        a--;
    }   
a++;
}
while (a < 2);
