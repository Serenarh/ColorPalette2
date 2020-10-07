const root = document.documentElement; //.documentElement is a special property that we can use to have access to root: We'll have access to the top level variables
const button = document.querySelector("button"); //querySelector is a method--ind by ()--& we're passing in what we want to select; here we want teh button. The string inside the () can be any CSS selector
const display = document.querySelector("#display"); //must use # to grab a CSS id tag
const colorInput = document.querySelector("[type='color']"); //from html line 33; could do the same thing with any attribute eg for, type,
const palettes = document.querySelectorAll("#palette div"); //all the divs inside the palette tag html line 22;must say querySelectorAll b/c otherwise will only grab the first one

const tools = document.querySelectorAll("[type='range'");

//Get the 'numbered color variables' out of 'paletteComputedStyles'
//collection of EVERYTHING related to CSS
const paletteComputedStyles = getComputedStyle(palettes[0]);

/*//Loop over each 'palette' in 'palettes'
//This is a callback function--a function that's 'called back' by another function/method
palettes.forEach(function (palette, index) {
  //console.log(palette, index);
  //Set its 'background color' & use its 'index' to get the correct variable name
  //Get the property from the 'giant collection' of 'palette div' styles
  //Set a property on the 'current palette' using a value from the 'computed style'
  palette.style.setProperty(
    "background-color",
    paletteComputedStyles.getPropertyValue(`--${index}`)//the template literal allows the program to pull in the index of the palette currently being accessed
  );
});*/

//above function changed to an arrow functions
palettes.forEach((palette, index) => {
  palette.style.setProperty(
    "background-color",
    paletteComputedStyles.getPropertyValue(`--${index}`)
  );
});

//console.log(paletteComputedStyles.getPropertyValue("--0"));
