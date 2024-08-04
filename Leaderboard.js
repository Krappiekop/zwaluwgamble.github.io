// leaderboard.js
const db = firebase.database();

function updateLeaderboard() {
    db.ref('bets').once('value', snapshot => {
        const leaderboard = document.getElementById('leaderboard');
        leaderboard.innerHTML = ''; // Clear current leaderboard
        snapshot.forEach(childSnapshot => {
            const bet = childSnapshot.val();
            const entry = document.createElement('div');
            entry.textContent = `User: ${childSnapshot.key}, Bet: ${bet.amount}, Racer: ${bet.racer}`;
            leaderboard.appendChild(entry);
        });
    });
}

updateLeaderboard();
