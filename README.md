# Angular-To-Do-App
A tutorial on how to create a to-do app with Angular.js and Stamplay

##Overview
This application can sign up users, as well as create, complete, and delete tasks from a list. Angular combined the Stamplay Javascript SDK will be used
to write the front-end code, while Stamplay's platform will handle all of our server side logic. This means that we will not write any back-end code, instead
we will use the GUI provided by Stamplay to configure our back-end in just minutes. That's right, a full stack app with no back-end code!

##Configuring the back-end with Stamplay's platform
1. Login to your Stamplay account. If you don't have one, sign up for free at http://stamplay.com
2. Create a new app
3. Go to **Objects** and then *+ New*
4. *Name* your object "task"
5. Assign *property* of "description" to *type* of "String"
6. Assign *property* of "completed_status" to *type* of "Boolean"
7. Assign *property* of "deleted_status" to *type* of "Boolean"

![GitHub Logo](public/images/objectSection.png)

8. Now that the object model is made, we need to test this schema. Go to the **API Console**
9. The *API Console* serves as a tool for developers to make HTTP requests from Stamplay's platform to speed up the testing/development
process. Under the *Operation* dropdown select *Create Object*
10. Select "task" as the object instance, then fill out the property fields with random values. Hit **Send**
11. Go to **Data** and then *Objects*. View object detail, see how it matches with the object model "task"

![GitHub Logo](public/images/dataSection.png)

##Bringing in the front-end code and using the SDK
1. Clone this repo
```
git clone
```