let count = 0
let str = [];
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    
    let countArr = str.push(`${count}`);
    saveEl.textContent = `Previous entries: ${str}`
    console.log(str)
}

function refresh() {
    countEl.textContent = 0
    count = 0
    saveEl.textContent = ``
}

