# Movie Listing App
Built a Movie Information app that displays a list of movies using React-native.

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

## Feature Requirements Covered

1. List of movies sorted in descending order of popularity.
2. Movie card displays the movie information i.e  movie title, image, genre, and a short description.
3. 20 movies are loaded for each year.
4. Year 2012 movies are shown by default.
5. Implemented bi directional scrolling list.
6. Smooth scrolling without jitters.
7. User can filter movies on the basis of genre.
8. On selection of one or more genres, the list will display the movies of the selected genres.
9. Multiple genre select and deselect functionality.

## Bonus Requirements Covered

1. Implemented this project in React Native.
2. Make movies load seamlessly as you scroll in any direction, showing previous year's movies when scrolling up and next year's movies when scrolling down, until reaching the current year.
3. Implemented Search bar which searches the movie on basis of movie title.
4. TypeScript used for enhanced type safety and code quality.
5. Tested on both iOS and Android.

## Additional Details

1. Used context api to avoid prop drilling.
2. Code standardization and abstraction is followed.
3. Well-structured and scalable code.
4. Performance optimizations:-
    1. Unnecessaray component rendering reduced.
    2. Movie information cards mounting/unmounting checked.
    3. Section list performance flags added.





