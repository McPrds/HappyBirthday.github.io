function showSurprise() {
    var box = document.getElementById("surprise-box");
    var giftBox = document.getElementById("gift-box");
    var backgroundMusic = document.getElementById("background-music");
    var additionalContent = document.getElementById("additional-content");

    // Hide the gift box
    giftBox.style.display = "none";

    // Show the surprise box
    box.style.display = "block";

    // Show the additional content
    additionalContent.style.display = "block";

    // Play the background music
    backgroundMusic.play();

    // You can add more animations or surprises here
    setTimeout(function() {
        box.innerHTML = "<p>🎉 Surprise! 🎁 You bring so much joy into my life, and I hope this little surprise brings a smile to your face. Happy Birthday, my love!</p>";
    }, 1000);
}
