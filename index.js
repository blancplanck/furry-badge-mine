const RESET_BUTTON_ID = 'reset-button';
const ADD_BUTTON_ID = 'add-button';
const SAVE_BUTTON_ID = 'save-button';
const CLEAR_BUTTON_ID = 'clear-button';
const MATRIX_FORM_ID = 'matrix-form';
const MATRIX_ROW_CLASS = 'matrix-row';
const DURATION_INPUT_CLASS = '.duration-input';
const MATRIX_ROW_DELIMITER = ':';
const MATRIX_FORM_WRAPPER_CLASS = '.matrix-form-wrapper';
const MATRIX_FORM_WRAPPER_DATA_ID_KEY = 'data-matrix-id';
const MATRIX_REMOVE_FORM_BUTTON_ID = '#remove-frame-button';
const MATRIX_CLEAR_FORM_BUTTON_ID = '#clear-frame-button';

const MATRIX_ROWS_SELECTOR = '#' + MATRIX_FORM_ID + ' ' + '.' + MATRIX_ROW_CLASS;

const MATRIX_FORM_TEMPLATE_SELECTOR = 'matrix-form-template';
const APP_CONTAINER_SELECTOR = 'app';
const FORMS_CONTAINER_SELECTOR = 'forms-container';
const CONTROLS_CONTAINER_SELECTOR = 'controls-container';

const $appContainer = document.getElementById(APP_CONTAINER_SELECTOR);
const $formsContainer = document.getElementById(FORMS_CONTAINER_SELECTOR);
const $controlsContainer = document.getElementById(CONTROLS_CONTAINER_SELECTOR);
const $resetButton = document.getElementById(RESET_BUTTON_ID);
const $addButton = document.getElementById(ADD_BUTTON_ID);
const $saveButton = document.getElementById(SAVE_BUTTON_ID);
const $clearButton = document.getElementById(CLEAR_BUTTON_ID);
const $matrixFormTemplate = document.getElementById(MATRIX_FORM_TEMPLATE_SELECTOR);
console.log($matrixFormTemplate)
console.log(MATRIX_FORM_TEMPLATE_SELECTOR)

let isMouseDown = false;

(function () {
    doThings();
})();

function doThings() {
    clearApp();
    addForm();
    const $saveButton = document.getElementById(SAVE_BUTTON_ID);
    const $matrixFormId = document.getElementById(MATRIX_FORM_ID);
    const $body = document.querySelector('body');

    // $matrixFormId.onsubmit = handleFormSubmit;
    $saveButton.onclick = handleFormSubmit;
    $addButton.onclick = addForm;
    $resetButton.onclick = resetForm;
    $body.onmousedown = handleMouseDown;
    $body.onmouseup = handleMouseUp;
}

function bindFormEvents (id) {
    const thisFormSelector = formatThisFormSelector(id);
    const $thisForm = document.querySelector(thisFormSelector);
    console.log($thisForm)
    const $matrixRows = document.querySelectorAll(MATRIX_ROWS_SELECTOR);
    const $removeFrameButton = $thisForm.querySelector(MATRIX_REMOVE_FORM_BUTTON_ID);
    const $clearFrameButton = $thisForm.querySelector(MATRIX_CLEAR_FORM_BUTTON_ID);

    $matrixRows.forEach(bindCellMouseMove);
    $removeFrameButton.onclick = removeFrame(id);
}

function formatThisFormSelector (id) {
    return '[' + MATRIX_FORM_WRAPPER_DATA_ID_KEY + '="' + id + '"]';
}

function removeFrame (id) {
    return function (event) {
        const thisFormSelector = formatThisFormSelector(id);
        const $thisForm = document.querySelector(thisFormSelector);
        $thisForm.remove();
    }
}

function addForm () {
    const $newForm = $matrixFormTemplate.content.cloneNode(true)
    const $newFormElement = $newForm.querySelector(MATRIX_FORM_WRAPPER_CLASS);
    const id = generateId();
    $newFormElement.setAttribute(MATRIX_FORM_WRAPPER_DATA_ID_KEY, id);
    $formsContainer.append($newForm);
    bindFormEvents(id);
}

function generateId () {
    return Math.random() + '_' + Date.now();
}

function resetForm () {
    clearForms();
    addForm();
}

function clearApp () {
    clearForms();
}

function clearForms () {
    $formsContainer.textContent = '';
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
    if (isMouseDown === true) {
        $cell.checked = true;
    }
}

function handleFormSubmit (event) {
    event.preventDefault();
    const $frames = document.querySelectorAll(MATRIX_FORM_WRAPPER_CLASS);
    const keyframeArray = [];
    $frames.forEach(function ($frame) {
        const id = $frame.getAttribute('data-matrix-id');
        const keyframe = formatKeyframe(id);
        console.log(keyframe);
        keyframeArray.push(keyframe);
    });
    console.log(keyframeArray)
}

function formatKeyframe (id) {
    const duration = getDuration(id);
    const formattedMatrix = getMatrix(id);

    return {
        duration,
        format: formattedMatrix
    }
}

function getDuration (id) {
    const thisFormSelector = formatThisFormSelector(id);
    const $thisForm = document.querySelector(thisFormSelector);
    const $durationInput = $thisForm.querySelector(DURATION_INPUT_CLASS);

    return $durationInput.value;
}

function getMatrix (id) {
    const thisFormSelector = formatThisFormSelector(id);
    const $thisForm = document.querySelector(thisFormSelector);
    const $matrixRows = $thisForm.querySelectorAll(MATRIX_ROWS_SELECTOR);

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
