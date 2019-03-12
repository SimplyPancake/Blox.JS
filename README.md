# Blox.JS
Simple website design in blocks. Basically blocs3, but in JS form and open source!

When my friends ask me to make a website for them, I'm too lazy too program a whole new website when I can just use Blox.
The Idea is simple, a website consists of cubes(blocks) and they are easy to work with.


# Examples
Site examples are: 
[Blox test site where Blox.js is showcased](https://htmlpreview.github.io/?https://github.com/SimplyPancake/Blox.JS/blob/master/testSite.html)

[Same site as the Blox.js test site, but recreated without Blox.js](https://htmlpreview.github.io/?https://github.com/SimplyPancake/Blox.JS/blob/master/siteWithoutBlox.html)

# How to install?
Link the raw Blox.js and Blox.css to your page.
_The Blox.js must be put in as an element after the rest of the page.
This ensures that the whole page is loaded before Blox.js takes action._


# Usage
With Blox.js, you can surround a divider element with your own stuff.
The divider __needs its own unique id__ and __a class describing with block type__ it needs to transform into.

Block type | class name
--- | ---
Single block | blockSingle
Double block (page wide) | blockDouble

If you want your block to have a __background__, simply put in an __img element__ with the id __"background"__ and ofcourse a source.

Before Blox.js:
```html
<ul>
  <li>Item one</li>
  <li>Iten two</li>
</ul>```
    
After Blox.js:

<div class="blockDouble" id="uniqueID">
    <ul>
      <li>Item one</li>
      <li>Iten two</li>
    </ul>
    <img id="background" src="myImage.png">
</div>



