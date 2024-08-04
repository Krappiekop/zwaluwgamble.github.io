// bets.js
const db = firebase.database();

document.getElementById('bet-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const betAmount = document.getElementById('bet-amount').value;
    const betRacer = document.getElementById('bet-racer').value;
    const userId = firebase.auth().currentUser.uid;
    db.ref('bets/' + userId).set({
        amount: betAmount,
        racer: betRacer
    })
    .then(() => {
        console.log('Bet placed');
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
});
