// auth.js
const auth = firebase.auth();

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log('Registered:', userCredential.user);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log('Logged in:', userCredential.user);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
});

auth.onAuthStateChanged(user => {
    if (user) {
        window.location.href = 'video.html';
    }
});