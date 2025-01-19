// JavaScript to toggle visibility of ingredients list
document.getElementById('showIngredients').addEventListener('click', function() {
    let ingredientsList = document.getElementById('ingredients-list');
    if (ingredientsList.style.display === 'none') {
        ingredientsList.style.display = 'block';
        this.textContent = 'Sembunyikan Semua Bahan';
    } else {
        ingredientsList.style.display = 'none';
        this.textContent = 'Tampilkan Semua Bahan';
    }
});

// Timer function for baking
let timerInterval;
document.getElementById('startTimer').addEventListener('click', function() {
    let timeLeft = 30;  // Time in minutes (for baking)
    document.getElementById('timer').textContent = `${timeLeft} menit tersisa`;

    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').textContent = `${timeLeft} menit tersisa`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = "Brownies siap dimakan!";
        }
    }, 60000);  // Update every minute
});

// Rating function
function rateRecipe(rating) {
    const feedback = document.getElementById('feedback');
    let message = "";
    switch(rating) {
        case 1: message = "Terima kasih! Anda memberi 1 bintang."; break;
        case 2: message = "Terima kasih! Anda memberi 2 bintang."; break;
        case 3: message = "Terima kasih! Anda memberi 3 bintang."; break;
        case 4: message = "Terima kasih! Anda memberi 4 bintang."; break;
        case 5: message = "Terima kasih! Anda memberi 5 bintang."; break;
    }
    feedback.textContent = message;
}
