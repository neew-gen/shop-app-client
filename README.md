# Shop-app

### The application is an online store that I am developing for practice purposes.

The application is hosted by heroku: https://shop-app69.herokuapp.com/. I'm currently working on a mobile version (there is no big screen version)

Features:
- I use vue 3 and typescript here.
- I use the custom implementation of vuex 4 (I have not found a better one)
- I use graphql and created my Apollo Graphql implementation for react. I have not found any library for vue 3 or a good implementation. So I had to make my own. Path: src/services/GraphqlService.
- I wanted to solve the problem of getting data from the server (in my previous projects I had this problem, I had to write a lot of code to get the data and also use store) and also Apollo Graphql Cache didn't work as expected, so I decided to create my own caching implementation. The result is a service that uses the reactivity of vue, or works in await mode. (I use it in store for example). I also use different caching strategies there. Path: src/services/FetchService
- I created my implementation of jwt authentication using axios jwt. It allows you to register and log in to the application as a user and as an admin. Login as admin is used to access admin-panel. Path: src/services/JwtService
- I created a service to handle LocalStorage. To retrieve and delete items. I also added the ability to work with arrays. Path: src/services/JwtService
- I use firebase storage to save images. It saves the images and returns the path to them. This is the path I save and use later. The path is src/services/Firebase/ImageStorageService.
- I use Swiper.js to display multiple images in the slider on the homepage, and in the product cards. Path: src/components/public-layout/home/HomeSwiper.
- There is an admin page that allows you to add, delete and edit products, categories, and slider pictures (swipes). It is protected by a guard, which works based on the received user roles. 
- The admin page in the swipe editor uses the drug and drop library "vuedraggable"

.env file variables:

VUE_APP_API_KEY

VUE_APP_AUTH_DOMAIN

VUE_APP_DATABASE_URL

VUE_APP_PROJECT_ID

VUE_APP_STORAGE_BUCKET

VUE_APP_MESSAGING_SENDER_ID

VUE_APP_APP_ID

VUE_APP_MEASUREMENT_ID
