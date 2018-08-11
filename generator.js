'use strict'

const source = require('./animations/bloog.json');

let rows = source[0].frame.split(/:/);

for (let row in rows) {
    const rowString = rows[row];
    console.log(`dcfurs.set_row(${row}, 0x${doTheThing(rowString)})`);
}

function doTheThing (row) {
    return parseInt(row.split('').reverse().join('').replace(/f/g, 1), 2).toString(16).padStart(5, '0');
}
