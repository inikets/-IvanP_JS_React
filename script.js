console.log("Marik");

let NumberOfFilms;

function start() {
    NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
    NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//personalMovieDB.movies[LastMovie] = GradeMovie;
//personalMovieDB.movies[LastMovie2] = GradeMovie2;

//console.log(personalMovieDB);


function rememberMyFilms() {
    for (let i = 0; i < 0; i++){
        let LastMovie = prompt('Один из последних просмотрных фильмов?','');
        let GradeMovie = prompt('На сколько оцените его?','');
    
        if (LastMovie.length < 50 && LastMovie != null && LastMovie != '' && GradeMovie != null && GradeMovie != '') {
            personalMovieDB.movies[LastMovie] = GradeMovie;
        } else {
            i--;
        }
    }; 
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert ('Вы посмотрели очень мало фильмов')
    }  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert ('Вы классический зритель')
    }  else if (personalMovieDB.count >= 30) {
        alert ('Вы киноман')
    }  else {
        alert ('Error')
    };
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    };
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genr = prompt(`Ваш лыбимый жанр под номером ${i}`,"");
        personalMovieDB.genres[i - 1] = genr;
    }
    
}

writeYourGenres();