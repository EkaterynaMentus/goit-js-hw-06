const inputForm = document.querySelector('#validation-inout');
const inputlength = document.querySelector('input[data-length]');

inputForm.addEventListener("blur", () => {
    if (inoutLength.value.length === Number(inoutLength.dataset.length)) {
        inputForm.classList.add('valid');
        inputForm.classList.remove('invalid');
    }
    else {
        inputForm.classList.add('invalid');
        inputForm.classList.remove('valid');
    }
});