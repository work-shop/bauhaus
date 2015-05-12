# Bauhaus 
The Work-Shop Front End Framework

Bauhaus is an evolving creature. It’s a product. 


**TODO**
- Restructuring SASS
- Writing HTML
- Cleaning up JS
- Writing readme
- Agreeing on ideals/principles
- Create repository


## Ideals of the system
- Composability 
- Agility 
- Legible, reusable modularity 
- Separation of skin and structure


## Ideals of the developer
- Strive for naming that makes sense for everyone
- Stand on the shoulders of giants
- Write code that looks like it was written by one person
- Write code as if you were explaining it to someone else
- Use comments liberally
- Don’t be clever


## Getting Started
- Whenever starting your work, run ‘make start’

### Makefile



## HTML
- Elements
- Classes
- IDs

### HTML Style


## CSS / SASS
_variables.scss
_style.scss
Only styles that are specific to the website in question
_objects.scss

CSS Refresh

### CSS/SASS Style

- Nesting can be useful for legibility and precise specifity, but can also lead to buggy and illegible code when used improperly. Generally, it is preferred that styles are written without nesting. If nesting is used, never go deeper than three levels deep. .button{ .button-link{ .button-arrow{ a


## JS
- Browserify?


### Libraries
- Jquery
- Flexslider. We prefer flexslider for all slideshows, because it’s one of the best responsive slider plugins out there. It’s not overbuilt, and performs beautifully. 


### JS Style

## Bootstrap
Use bootstrap for it’s grid system, 
*Now with sass source instead of less


## Jquery
- 


## Fonts

### Modern Pictograms


## Images and other assets


## Responsive Design
All elements of a website should responsive.

Unless otherwise specified, use conventional responsive standards for xs screens:
- Multi-column layouts become single-column-stacked layouts
- Elements fill the full width of the window 
- All typography becomes proportionally smaller
- Hover and other mouse interactions should be suppressed, and critical elements that are hidden until hovering should be shown  

Write media queries for the bootstrap device sizes. Site specific media queries should be written at the end of _style.scss, and all other media queries should be written alongside their respective objects. 




