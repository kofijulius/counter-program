
let saveEl = document.getElementById("save-el")
let display = document.getElementById("counter");
console.log(display)

let count = 0;
console.log(count)

// function that increases the number of sales

function increment() {
    count++;
    console.log(count)
    display.textContent = count;
}

/// function that saves the previos data
function save() {
    let previousSales = saveEl.textContent += count + " - "
    display.textContent = 0;
    count = 0;
}
