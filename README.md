


# Anime Art-Wishlist Web App

The Anime Art-Wishlist web app allows users to store, view, and manage their favorite anime-related artworks or items. It serves as a personal wishlist where users can add, update, and remove entries for anime art they wish to own or collect. The app also provides a smooth user experience with simple navigation and clearly defined routes to perform specific actions, such as adding new items to the wishlist or updating existing ones. It's built using React for the front-end, ensuring a dynamic, fast, and responsive interface.



## Appendix

Index
- [Features](#Features)
- [Screen Shots](#Screenshots)
- [Installation](#installation)
- [Environment Variables](##Environmentalvariables)


# Features

# Home Page:

A welcoming landing page introducing the web app.
Overview of the purpose and features.
# Store Anime Art:

Users can add new anime artwork or items to their wishlist.
Input fields to capture essential information like artwork name, description, artist, and price (optional).
View Wishlist:

A dedicated page to display all saved anime artworks or items in the wishlist.
Each entry shows key details and can be viewed in a detailed format.
# Update Wishlist Entry:

Ability to update existing wishlist entries by clicking on an individual item and navigating to an update page.
Modify artwork information such as name, description, or any relevant detail.
# Dynamic Routing:

The app uses URL parameters (/update/:id) for editing specific entries, making it easy to handle individual items dynamically.
Delete Option:

Ability to remove any anime art from the wishlist if no longer desired.
# 404 Not Found:

A fallback page for undefined routes, providing user-friendly feedback when an incorrect URL is entered.
Responsive Design:

The app adjusts seamlessly to different screen sizes, ensuring a consistent user experience across devices.

## Installation

Install my-project with npm

```bash
  cd frontend
  npm install

  cd ..
  cd server
  npm install

```
## Screenshots

![Screenshot 1](https://i.postimg.cc/dVFw7bDD/ani1.png)

![Screenshot 2](https://i.postimg.cc/YSnHsjRm/ani2.png)

![Screenshot 3](https://i.postimg.cc/90TH0bhG/ani3.png)

![Screenshot 4](https://i.postimg.cc/8zwQ7sqn/ani4.png)

![Screenshot 5](https://i.postimg.cc/HLPqtRWw/ani5.png)

![Screenshot 6](https://i.postimg.cc/Kz6C6TM4/ani6.png)

![Screenshot 7](https://i.postimg.cc/qBKP81PK/ani7.png)

![Screenshot 8](https://i.postimg.cc/VkKpYpCx/ani8.png)

![Screenshot 9](https://i.postimg.cc/1X1YCZkq/ani9.png)



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


```bash
PORT=5000

DB_HOST=localhost
DB_PORT=27017
DB_NAME=projecthub
DB_USER=your_db_username
DB_PASS=your_db_password

JWT_SECRET=your_jwt_secret_key

```



## Tech Stack

ReactJS,
NodeJs,
ExpressJs,
MongoDB


