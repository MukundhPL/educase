# Educase Internship Assignment 

This is my submission for the internship assignment given by Educase - [Link](https://forms.office.com/pages/responsepage.aspx?id=Nf87G5TqKE2JRrIiSJ10xoaKXKtohGpMiJCUYBuwggJUQjVSNERUWUVWSkVITVY0VEJJRTYwNENINC4u&route=shorturl)

Done by - Mukundh P L

## Routes

###  /listSchool ?latitude=X & longitude=Y (GET request)
    
- Get all schools in database sorted by distance relative to latitude and longitude given as query parameters. By default both params are assumed to be zero until a valid one is passed

### /addSchool (POST Request)
- Create a school with following parameters:
    - name: string with max length of 50
    - address: string with max length of 500
    - latitude: number with max value of 90 and min value of -90
    - longitude: number with max value of 180 and min value of -180
- id is created automatically (serial type)

## Setup


- Run "npm i" to install required node_modules 
- Make sure you have a MySQL instance and pass the required credentials in .env file
- Run "npm run start" to  start the server
- Server will run in by default [http://localhost:3500](http://localhost:3500), can be changed by setting the PORT in the .env file
- Note: You might find it easier to do DML operations using drizzle-kit studio with its nice UI interface. To use it run "npm run studio" and go to [https://local.drizzle.studio](https://local.drizzle.studio)
