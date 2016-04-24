# About

# Usage
#### Dependencies
This is what you would need set up a development environment and deploy changes to Github Pages.  There are additional node dependencies that are listed in the `package.json` file.
  - [Node](https://nodejs.org/en/)  
  - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  

#### Project Organization  
This app is being served by Github using ["Github Pages"](https://pages.github.com/).  See Github's documentation on how "Project Pages" work, and how to configure a Github Pages project (for example, changing the URL of the site from the default http://{USERNAME}.github.io/{REPOSITORY_NAME} to a custom domain name).  

There are two branches:  

1.  **Master**  : Where the code lives that drives the app.  The *source* directory in this branch contains all the code that you would use to make changes to the app (style or javascript).  This branch also contains the tools and configuration for the development environment, which will neatly pack up all the code in the source directory for our gh-pages branch.  

2.  **gh-pages**:  The code in this branch is just the *public* directory in the Master branch.  Github will automatically look at the files in this branch and serve the index.html file.  Don't ever edit this branch directly.  Make any changes in the Master branch, and run the `npm run deploy` script from Master in order to build and update the gh-pages branch.

#### Editing the Data
The water quality data is stored in a CartoDB table [here](https://bfriedly.cartodb.com/tables/cascobay_2005_2012_waterquality).  When the webpage loads, a request is sent to the table and it's loaded onto the map.  This means that if you update any of the data in the table, it will be instantly updated on the map.  

You can go to the table on CartoDB's website directly, or you can link this table directly to your GIS workflow, using [QGIS](http://www.qgis.org/en/site/) for Desktop GIS and adding the [CartoDB Plugin](http://blog.cartodb.com/qgis-plugin/).  This would let you edit directly in GIS and have the changes update the app.  

This will work for:  
 - Adding new rows to the table (new water quality sites)  
 - Updating the data values (updating Index Scores, Parameter Scores, Image URL's, Site Descriptions, etc.)  


 It's **important not to change the names of the fields/columns**.  Any changes to the table's schema will not be reflected in the app, because code refers to the column names.  If you want to add new fields or change the names, you'll have to also update the code to reflect that.  

#### Editing the Code

The code uses [Webpack](https://webpack.github.io/) to package all the code under the `source/` folder into a single file (`public/bundle.js`).  

To edit the code, you'll want to use the scripts included in `package.json` so you can test changes locally before pushing them into the production file on github (the gh-pages branch).  You will need a little command line to do this, but it's not so scary!  You'll need the command line for Git (version control that connects to the Github repository), and Webpack (which uses NPM).  Here's a good source for learning [Git](https://help.github.com/articles/good-resources-for-learning-git-and-github/).  And here's an introduction to [Webpack](http://survivejs.com/webpack_react/developing_with_webpack/).

To get started:
1.  Open a command line
2.  Find a place on your computer you'd like to keep the repository:  
`cd path/to/where/you/want/to/store`
3.  Download (clone) the Github repository  
`git clone https://github.com/USERNAME/REPOSITORY_NAME.git`
4.  Go into the newly created folder:  
`cd REPOSITORY_NAME`  
5.  Start the Webpack Development Server:  
`npm start`  
This will bundle all the source files and serve them locally.
6.  Open a browser and go to **localhost:8080**  
You should now see the website.  
7.  Make any changes to the `source` files.  When you save, Webpack will automatically refresh the webpage in your browser to show the changes!  Try changing the `$main-blue` value in `source/styles/colors.scss`.  Save and check the web page to see Webpack working.
8.  To end the development server, go to the command line and enter press `CTRL + C`

If you decide you want to keep the changes you've made and have them reflected in the live site, you'll want to do two things.  You want to update the `gh-pages` Github branch (which is hosting the live site).  

You'll also want to make sure you update the `master` branch, so that your code changes in the `source` are documented and saved.  If you update the gh-pages branch, but forget to push your changes you made to master, then the website would show your changes, but nobody would be able to find out what the source code is that made the change.  This is where Git is going to be really important.

##### Update gh-pages  
This is super easy.  There's a script in `package.json` that will:  
- Bundle `source/` into `public/bundle.js`
- Use Git to commit the changed file
- Push `public` folder into the Github `gh-pages` branch  

All you have to do is go to the repository folder on your computer and enter `npm run deploy`

##### Update master

Here you'll want to keep all the other files in sync with the Github repository.  There's quite a bit to this -- so I highly recommend getting comfortable with Git.
