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
