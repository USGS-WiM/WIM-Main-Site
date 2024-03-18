# WIM Public Website Notes

## Overview
* Built with [Nunjucks](https://mozilla.github.io/nunjucks/) templating
	 * Better for SEO, performance, than using Angular, Vue, etc. 
	 * Regular, basic HTML, CSS, and Javascript.
	 * It allows you to easily reuse components (header, footer) across pages - compiles everything on build.
* Uses [11ty](https://www.11ty.dev) static site generator for compiling
* Includes some parts of USWDS


## File Structure

### src
* \> src/_data
	* Config files for Nunjucks. This is where you can define new page paths/routes if needed.
	* Also can define multiple layouts if needed. Currently only one in use for all pages.
* \> src/_includes
	* All of the reusable components that are used on multiple pages.
	* Layout, Favicon, Header, Footer
* \> src/assets
	* Non Nunjucks-files. Any images, javascript, CSS.
* \> src/index.njk
	* All of the `.njk` files in the root of the src folder are the Nunjucks files for each page.


## Current Pages
* / - Home page
* /team
* /projects
* /geonarrative 

## Changing Team
* Get a headshot and crop and center to the same size as the existing photos.
* Add the image to `/assets/images/images/team`
* Edit the `/team.njk` file
	* Copy a block of code from an exsting person. Paste it where it should go, and change the details and image SRC.
* Edit the map in `/assets/scripts/team.js`
	* The `geojsonFeature` defines all locations on the map. Either find an exsting location to add a new person, or if they are the first at a location, you will have to define a new location in the object.


## Deploying
* Currently it is manually uploaded to S3 after build.
* `npm run build` will build to `/dist` folder. The contents of that folder should be uploaded to the root of wim.usgs.gov