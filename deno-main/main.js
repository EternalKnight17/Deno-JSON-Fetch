import { bold, italic, yellow, red } from "https://deno.land/std@0.74.0/fmt/colors.ts";

window.addEventListener('load', () => {
    console.log("load")
})

window.addEventListener('unload', () => {
    console.log("unload")
})

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
  
const url = Deno.args[0]

if (url == null) {
    console.log(red(bold(italic("main.js <url>"))))
    Deno.exit(1)
}

let space = " "

console.log(yellow(bold("Fetching Data From " + url)))
sleep(1000)

const json = await fetch(url)
const data = await json.json()

for (let index = 0; index < 1; index++) {    
    console.log(data)
}

console.log(space)

console.log(yellow(bold("Data Fetched Successfully! " + url)))
