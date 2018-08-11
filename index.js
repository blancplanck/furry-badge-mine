const SAVE_BUTTON_ID = 'save-button';
const MATRIX_FORM_ID = 'matrix-form';
const MATRIX_ROW_CLASS = 'matrix-row';
const DURATION_INPUT_ID = 'duration-input';
const MATRIX_ROW_DELIMITER = ':';

const MATRIX_ROWS_SELECTOR = '#' + MATRIX_FORM_ID + ' ' + '.' + MATRIX_ROW_CLASS;

let isMouseDown = false;

(function () {
    doThings();
})();

function doThings() {
    const $saveButton = document.getElementById(SAVE_BUTTON_ID);
    const $matrixFormId = document.getElementById(MATRIX_FORM_ID);
    const $body = document.querySelector('body');
    const $matrixRows = document.querySelectorAll(MATRIX_ROWS_SELECTOR);

    $matrixFormId.onsubmit = handleFormSubmit;
    $body.onmousedown = handleMouseDown;
    $body.onmouseup = handleMouseUp;
    $matrixRows.forEach(bindCellMouseMove);
}

function handleMouseDown () {
    isMouseDown = true;
}

function handleMouseUp () {
    isMouseDown = false;
}

function bindCellMouseMove ($cell) {
    const $checkboxCellList = $cell.querySelectorAll('input');
    $checkboxCellList.forEach(function ($cell) {
        $cell.onmousemove = handleCellsMouseMove;
    });
}

function handleCellsMouseMove (event) {
    const $cell = event.target;
    $cell.checked = isMouseDown;
}

function handleFormSubmit (event) {
    event.preventDefault();
    const keyframe = formatKeyframe();
    console.log(keyframe);
}

function formatKeyframe () {
    const duration = getDuration();
    const formattedMatrix = getMatrix();

    return {
        duration,
        format: formattedMatrix
    }
}

function getDuration () {
    const $durationInput = document.getElementById(DURATION_INPUT_ID);

    return $durationInput.value;
}

function getMatrix () {
    const $matrixRows = document.querySelectorAll(MATRIX_ROWS_SELECTOR);

    return formatMatrix($matrixRows);
}

function formatMatrix ($matrixRows) {
    let formatStringList = [];

    $matrixRows.forEach(function ($element, index) {
        const $checkboxCellList = $element.querySelectorAll('input');
        const parsedRow = parseMatrixRow($checkboxCellList);
        formatStringList.push(parsedRow);
    });

    return formatStringList.join(MATRIX_ROW_DELIMITER);
}

function parseMatrixRow ($row) {
    let rowString = '';

    $row.forEach(function ($cell) {
        const isChecked = parseMatrixCell($cell)
        rowString += isChecked ? 'f' : '0';
    });

    return rowString;
}

function parseMatrixCell ($cell) {
    return $cell.checked;
}
