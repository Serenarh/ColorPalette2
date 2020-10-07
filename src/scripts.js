const root = document.documentElement; //.documentElement is a special property that we can use to have access to root: We'll have access to the top level variables
const button = document.querySelector("button"); //querySelector is a method--ind by ()--& we're passing in what we want to select; here we want teh button. The string inside the () can be any CSS selector
const display = document.querySelector("#display"); //must use # to grab a CSS id tag
const colorInput = document.querySelector("[type='color']"); //from html line 33; could do the same thing with any attribute eg for, type,
const palettes = document.querySelectorAll("#palette div"); //all the divs inside the palette tag html line 22;must say querySelectorAll b/c otherwise will only grab the first one

const tools = document.querySelectorAll("[type='range'");

console.log(tools);
