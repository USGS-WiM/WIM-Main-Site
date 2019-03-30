# Styleguide

This project lets you easily create a base stylesheet for projects, as well as a style guide for reference.

## Development

Install with npm

```bash
npm install
```
Serve project from /app/ with
```bash
gulp
```
Build it with
```bash
gulp build
```
Serve project from build folder with
```bash
gulp serve-build
```

## Customization

Most variables, like fonts and measurements, are located in `variables.less`.
Colors variables can be found in `colors.less`. 

When you change a variable value, it will:
 * 1: Change the stylesheets to match your change (obviously)
 * 2: Automatically update all places that value is referenced in the styleguide interface

## License
[MIT](https://choosealicense.com/licenses/mit/)