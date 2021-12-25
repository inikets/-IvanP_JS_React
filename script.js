console.log("Marik");




personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert ('Вы посмотрели очень мало фильмов')
        }  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert ('Вы классический зритель')
        }  else if (personalMovieDB.count >= 30) {
            alert ('Вы киноман')
        }  else {
            alert ('Error')
        };
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 0; i++){
            let LastMovie = prompt('Один из последних просмотрных фильмов?','');
            let GradeMovie = prompt('На сколько оцените его?','');
        
            if (LastMovie.length < 50 && LastMovie != null && LastMovie != '' && GradeMovie != null && GradeMovie != '') {
                personalMovieDB.movies[LastMovie] = GradeMovie;
            } else {
                i--;
            }
        }; 
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        };
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genr = prompt(`Ваш лыбимый жанр под номером ${i}`,"");
            personalMovieDB.genres[i - 1] = genr;
            if (genr != null && genr != '') {
                personalMovieDB.genr = genr;
            } else {
                i--;
            }
        };
        
    },
    toggleVisibleMyDb: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    } 
};
personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDb ();
console.log(personalMovieDB);

personalMovieDB.genres.forEach(function(item, i, genres) {
               console.log(`Любимый жанр ${++i} - это ${item}`)
});