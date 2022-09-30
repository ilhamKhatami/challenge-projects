let validEmail;

document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    validEmail = email.match(/\w+[@]{1}\w+[\.]{1}\w+/);

    const displayError = document.getElementById('displayError');

    if (!displayError.classList.contains('hidden')) {
        displayError.classList.add('hidden');
    }

    if (!!validEmail) {
        document.getElementById('displaySuccess').classList.remove('hidden');
        document.getElementById('displayForm').classList.add('hidden');
    } else {
        displayError.classList.remove('hidden');
    }
})