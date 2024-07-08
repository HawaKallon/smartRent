// src/lib/js/toggleClass.js
export function setupToggleClass() {
    const signUpBtn = document.getElementById('signUp');
    const signInBtn = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpBtn && signInBtn && container) {
        signUpBtn.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInBtn.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
    } else {
        console.error('Sign up button, sign in button, or container not found');
    }
}
