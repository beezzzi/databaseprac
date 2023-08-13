const Test = '1xHw7XP5eLWG9VCO2kYEB9j6Zg633phbppCj5rbJg9w4/edit?usp=sharing';
const base = `https://docs.google.com/spreadsheets/d/ ${SheetID}/gviz/tq?`;
const sheetName ='users';
const query= encodeURIComponent(qu);
const url = `${base}&sheet=${Test}&tq=${query}`;
const data = [];
document.addEventListener('DomContentLoaded',init);

const output = document.querySelector('.output');

function init() {
    console.log('ready');
}

