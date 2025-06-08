import localStorage from './localStorage.js';

console.log("Number in localStorage:", localStorage.length());

const theme = localStorage.getItem("theme");

console.log("Theme in localStorage:", theme);

if(!theme) {
    console.log("Setting default theme to 'light'");
    localStorage.setItem("theme", "light");
    localStorage.setItem("number", 42);
}