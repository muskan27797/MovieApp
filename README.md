## How to run the app
To build and run the app, please install the necessary dependencies. Please follow the instructions on [reactnative.dev](https://reactnative.dev/docs/next/environment-setup)

<details>

<summary>Instructions for iOS</summary>

1. `git clone git@github.com:muskan27797/MovieApp.git`
2. `cd MovieApp` 
3. `npm install`
4. `cd ios && pod-install` 
5. `cd ..`
6. `npm run ios`

</details>

<details>

<summary>Instructions for Android</summary>

1. `git clone git@github.com:muskan27797/MovieApp.git`
2. `cd MovieApp` 
3. `npm install`
4. `npm run android`
</details>

<summary>Requirements Fulfilled</summary>
1. Built a Movie Information app that displays a list of movies using React-native.
2. Comaptible on both iOS and Android.
1. Make movies load seamlessly as you scroll in any direction, showing previous year's movies when scrolling up and next year's movies when scrolling down, until reaching the current year.
3. TypeScript used for enhanced type safety and code quality.
2. Well-structured and scalable code.
3. Code standardization and abstraction is followed.
1. List of movies sorted in descending order of popularity.
2. Movie card displays the movie information i.e  movie title, image, genre, cast, director, and a short description.
3. 20 movies are loaded for each year.
4. Year 2012 movies are shown by default.
5. User can filter movies on the basis of genre. When a user selects one or more genres, the list will display the movies of the selected genres.

8. Multiple genre select and deselect functionality.

6. Used context api to avoid prop drilling.
7. Performance optimizations:-
    1. Unnecessaray component rendering reduce.
    2. Movie imformation cards mounting unmounting.
    3. Section list performance flags.



Code flow to be shown-----> 





