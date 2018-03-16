# NYT-SPA-React
## Overview

In this project, I created app that allows you to interact with the [New York Times](https://www.nytimes.com/) API. This app is a MERN SPA which performs the majority of it's functions on the front end using React. Routing is handled by react router to render each component to the page correctly. This app is utilizing a Mongoose ORM to query the Mongo database, and sending the data back to the user using a custom API and axios calls. This app interacts with the databse using all the CRUD methods.


## Inspiration
New York Times is one of the most influential newspapers of our time. I wanted to make an easy and interactive way to utilize the NYT's  API so visitors can view and save persistent data in real time. I also wanted to put my MERN stack skills to the test and try a simple SPA to better my understanding of how powerful React is.


## How I built it

I primarily worked with node.js, handlebars, and the express frame work to handle routing, connecting to the server and sending files to the front end. On the front end, I used html, javascript, jQuery and CSS and Semantic ui styling framework.
There is still room for improvement including adding more pages for different websites to scrape and some interactivity with clicking buttons. I included the following packages:
* [axios](https://www.npmjs.com/package/axios)
* [bodyParser](https://www.npmjs.com/package/body-parser)
* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [request](https://www.npmjs.com/package/request)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)

Running an npm install should install all of the dependencies you need to get this project started.

## What I learned
This app helped me understand the architecture and strategic choices that are required when making a React app. Reusability and compartmentalization are key when it comes to building a robust React app, especially when your app needs to scale.

[NYT-SPA](https://nyt-spa-react.herokuapp.com/)
