# Link
 
## Overview

The application I created is called Link.  The purpose of the application is to create a shared space for business owners, specifically, retail business owners, to share their inventories and suppliers with other retail business owners.  My goals is for the application is to allow these retail business owners to make business decisions for their organization based off of having the ability to view similar business owners' profile.  A third-party API was called from a shopping platform by the name of ShopStyle.  The purpose of using the API was for letting business owner's view what categories of inventories are available for placing an order with the supplier/vendor.

## Link to Heroku

https://inv-tracker.herokuapp.com/


## Technology Used

* Ruby on Rails - backend framework
* React - frontend library
* HTML5, CSS3
* HTTParty used to call ShopStyle API for categories


## Wireframes, ERD, and pitch deck

ERDs were used to create the data models

![ERD](https://github.com/SupriyaY/inv_tracker/blob/master/Screen%20Shot%202018-03-01%20at%201.48.10%20AM.png)


Figma was the tool used to design the prototype of the application

![Wireframe](https://github.com/SupriyaY/inv_tracker/blob/master/Screen%20Shot%202018-03-01%20at%201.47.49%20AM.png)


## Features

* Create a business owner - frontend
* CRUD on business owner's model on the backend, admin privilages.

## Future Improvements

* CRUD functionality on other models (inventories and suppliers)
* Additonal Funtionality on ShopStyle API
* Join table between suppliers and inventories tracking if a particular supplier has an inventory available
* Overall, taking more risks without worrying about failure.