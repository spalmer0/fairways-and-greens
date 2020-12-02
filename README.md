# Fairways and Greens App
Fairways and Greens is a full-stack application using Node, Express, and MongoDB.  It enables a user to create a list of favorite golfers and tournaments, as well as view additional details about each.  Once logged-in through Google authentication a user can add, update, and delete player and tournament information.

## Getting Started
Link to application: https://fairways-and-greens.herokuapp.com/
Login with Google to enable "add" links and other functionality

## Motivation
I enjoy following golf, and Dustin Johnson recently won the Masters.  I wanted to explore a way to incorporate the database lessons with some of the interesting traditions of golf.

## Technologies Used
- HTML
- CSS
- Javascript
- Node
- Express
- MongoDB
- Heroku
- OAuth

## Build Status
This project is in its "mvp" state.  I hope to incorporate several additional features in the future.

## Screenshots
![image](https://user-images.githubusercontent.com/34992505/100804660-46a5a200-33fb-11eb-8009-bf338bf4402b.png)
![image](https://user-images.githubusercontent.com/34992505/100804711-58874500-33fb-11eb-81ef-05637a44fdb0.png)
![image](https://user-images.githubusercontent.com/34992505/100804757-676df780-33fb-11eb-8511-5d317d4eaa3d.png)
![image](https://user-images.githubusercontent.com/34992505/100811862-9d19dd00-3409-11eb-999c-16f26d4034c1.png)
![image](https://user-images.githubusercontent.com/34992505/100804805-7ce32180-33fb-11eb-8166-edc8a53ca8a4.png)

## Features
- Role-based access control through OAuth
- View a list of all players in the DB
- View a list of all tournaments in the DB
- View additional details about a player
- View additional details about a tournament
- Update a player's information
- Delete a player


### Backlog features
- "Trophy case" feature that will "add" trophies to case
- Displaying only 4 majors on Tournaments page, with the ability to view all results from that particular major
- Display other tournaments on tournaments page, with the ability to view all results from that particular tournament
- Lookup player image from pgatour website or other source so as not to require the user to submit a url
- Lookup trophy image from tournament schema or other source so as not to require the user to submit a url
- Incorporate validation on new data
- Incorporate drop-downs for tournaments
- Incorporate drop-downs for countries
- Incorporate flags for countries

