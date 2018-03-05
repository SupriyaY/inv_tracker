# Link
 
## Overview

The application I created is called Link.  The purpose of the application is to create a shared space for business owners, specifically, retail business owners, to share their inventories and suppliers with other retail business owners.  My goal is for the application is to allow these retail business owners to make business decisions for their organization based off of having the ability to view similar business owners' profiles.  A third-party API was called from a shopping platform by the name of ShopStyle.  The purpose of calling the API was for letting business owner's view what categories of inventories are available for placing an order with the supplier/vendor.  

When a user initially opens up a browser with the site's URL, they are can read about the application.  Then, they can select a link called Business Owners.  Once redirected to the business owner's page, a user can add themselves to a "business card".  They have the ability to view other owner's inventories and supplier information.  An administrator has the ability to add, update, delete, and create a business owner.  There is another link from the homepage called Categories, which currently lists the various categories along with minimal details about each category.  This section is not completely functional and is currently under contruction.  

Further funtionalities regarding the suppliers and inventories are under construction as well.

## Link to Heroku

https://inv-tracker.herokuapp.com/


## Technology Used

* Ruby on Rails - backend framework
* React - frontend library
* HTML5, CSS3
* HTTParty used to call ShopStyle API for categories


## Wireframes, ERD, Trello, and pitch deck

ERDs were used to create the data models

![ERD](https://github.com/SupriyaY/inv_tracker/blob/master/Screen%20Shot%202018-03-01%20at%201.48.10%20AM.png)


Figma was the tool used to design the prototype of the application

![Wireframe](https://github.com/SupriyaY/inv_tracker/blob/master/Screen%20Shot%202018-03-01%20at%201.47.49%20AM.png)


User Stories Management - [Trello](https://trello.com/b/wCyE9Qn8/capstone)

Presentation slides - [Pitch Deck](https://docs.google.com/presentation/d/1Ox_N6X6wLHgILcQlosDC2e8ChNDWKJYKYhG6_zIprEE/edit#slide=id.p)

## Features

* Create a business owner - frontend
* CRUD on business owner's model on the backend, admin privileges.

## Future Improvements

* CRUD functionality on other models (inventories and suppliers)
* Additonal Funtionality on ShopStyle API
* Join table between suppliers and inventories tracking, whether a particular supplier has an inventory available for the business owner to place an order
* DRY code
* Overall, taking more risks without worrying about failure.