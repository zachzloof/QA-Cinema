Test Coverage: 81%

[Jira Board](https://zachzloof.atlassian.net/jira/software/projects/QC)

[Jira Burndown Chart](https://zachzloof.atlassian.net/jira/software/projects/QC/boards/4/reports/burndown)

---------------------

# QA-Cinema

---------------------

## Introduction
--------------------
For our final project we were given the task to create a full-stack web application for the QA Cinema chain. The company required the creation of a API integrated website that implements MERN. 

## Project Management
---------------------
We used Jira software for planning, implementing the scrum model. We created a backlog made up of epics, user stories and tasks making sure to include MosCow prioritisation and agile fundamentals. We initiated two sprints each having a five-day timeline. 
 
## Full Stack Development
------------------------
For the back-end framework we used node.js teamed with express, this made creating an api very easy, and as we are going down the MERN route it is by far the best option for the job.
For the front-end framework we used React to set up a user interface and connect to the back-end, again following the MERN style of coding, this was ideal as React paired with express allowed us to code the entirety of the website using Javascript.

## Installation
--------------------
Please follow these instructions in order to run the website project into your local machine.
Prerequisites
Required Programmes:
*	Git Bash
*	Postman
*	Visual Studio Code
*	Node.js
*	MySQL

Installing Git Bash
* Step 1.  Navigate to this [link](https://git-scm.com/downloads) and download the option suitable for your machine.
* Step 2. Once the download is finished, navigate to the files location and click “Run”.
* Step 3. Once the installer is running, please click “Next” after reading the licensing documentation.
* Step 4. Select the location for its destination and then click “Next”.
* Step 5. Leave the selected components and click “Next”.
* Step 6. Leave the default start menu folder and click “Next”.
* Step 7. You may change the default editor to your preference. Then click “Next”
* Step 8. Leave the PATH environment as “Use Git from Git Bash only” and click “Next”.
* Step 9. Leave the backend as OpenSSL and click “Next”.
* Step 10. Leave the line ending conversation as default and click “Next”.
* Step 11. Leave the Terminal Emulator as default and click “Next”.
* Step 12. Leave the extra options as default and click “Next”.
* Step 13. Please do not add “Experimental options” and click “Install”.
* Step 14. Wait for the installation to complete then click “Finish”.

Installing Visual Code
* Step 1. Navigate to this [link](https://code.visualstudio.com/) and download VS Code into your machine.
* Step 2. Navigate to the location of the download location and double-click to the run the file.
* Step 3. Accept the terms and conditions agreement and click “Next”.
* Step 4. Leave all the defaults settings and click “Next”.

Installing Postman
* Step 1. Navigate to this [link](https://www.postman.com/downloads/) Then download the application and then choose the option for your machine.
* Step 2. Navigate to the location of the download and double-click the file to run the application

Installing Node.js
* Step 1. Navigate to this [link](https://nodejs.org/en/download/) and download the file.
* Step 2. Navigate to the location of the download
* Step 3. Click “Next”.
* Step 4. Click “Accept” and then “Next”.
* Step 5. Leave the destination as default and click “Next”.
* Step 6. Click “Next” until it gives you the option to install.
* Step 7. Click “Install”.

Installing mySQL
* Step 1. Download the installer from this [link](https://dev.mysql.com/downloads/windows/installer/8.0.html).
* Step 2. When you run the installer, it will prompt you to allow the application to make changes to your system, proceed and allow.
* Step 3. Next you will face a set of options for your setup type, click custom.
* Step 4. Now you need to select which software is going to be installed.
* Step 5. Choose the newest version of mySQL server, MySQL workbench and the samples and examples option.
* Step 6. Click next, and following that click execute.
* Step 7. Following this you will be on the installation page, follow this through and click execute.
* Step 8. From this keep pressing "next" until you reach the username and password setting stage, here you want to keep your username as root, and you can set any password, but it is recommended to vault this password as soon as you set it so you do not forget.
* Step 9. Now continue pressing "next" and "execute" until you reach a page which refers to connecting to a server, there should be only one which will be the "MySQL server", select this and connect to it.
* Step 10. From here keep clicking next until you hit finish, and SQL will be installed.
* Step 11. Next you will need to modify your system variables.
* Step 12. Get to your system variables window.
* Step 13. Add a new system variable with the name MYSQL_HOME with your SQL server folder as the path.
* Step 14. Next edit your path in your system variables.
* Step 15. From here you want to add %MYSQL_HOME%\bin and end it with a semi colon (;).
You now have SQL ready to use.

## Running the application
* Step 1. Navigate to your api folder, through QA-Cinema/api and run "npm i" in your console, followed by "npm start", now the api is ready for use.
* Step 2. Navigate to your front-end folder, through QA-Cinema/react/front-end and run "npm i" followed by "npm start" again, now the front-end is ready for use and the website is running, but we are missing a database.
* Step 3. open MySQL workbench, and paste in the commands given in the QA-Cinema/documentation/SQL folder, these commands are required to interact with the database.
* Step 4. Run the "CREATE DATABASE" lines, followed by the "USE qa-cinema" line of code, and then run all 3 "CREATE TABLE" lines of code, now your database is ready for use.
* Step 5. Application is ready for use.


## Testing
--------------

For testing our aim was to obtain roughly around 80% coverage, this was achieved with a test coverage of 81%. We were pleased with this and decided not to go any further once this was achieved as we were close to our deadline.
To run all the tests, and provide coverage results for the application, navigate to QA-Cinema/api and "npm run coverage".

## Built With
----------------
* Jira – Kanban board
* Visual Studio Code – Source Code Editor
* MySQL – Database
* React – Front-end Framework
* Express – Back-end Framework
* Node – JS Runtime Environment
* Chai – Back-end Testing

## Versioning
* Git – Versioning
* GitHub – Remote Repository

## Authors
------------------

*	Shamil Ali - [GitHub](github.com/shamil-ali) – (Front-end - Homepage/gettingThere/screens/header/aboutUs)
*	John Bonapos - [GitHub](github.com/jdbonapos1) - (Dev-ops - ListingsPage/classifications)
*	Owen Cornock - [GitHub](github.com/owencornock) - (UI/UX Designer - Navigation/upcoming/footer)
*	Zachary Zloof - [GitHub](github.com/zachzloof) - (Back-end/Scrum Master - Search/login/registration/myTickets/Booking/Payment/openingT/contactUs)
