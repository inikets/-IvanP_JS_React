console.log("Marik")

let NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(NumberOfFilms);

let LastMovie = prompt('Один из последних просмотрных фильмов?','');

let GradeMovie = prompt('На сколько оцените его?','');

personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[LastMovie] = GradeMovie;

console.log(personalMovieDB);