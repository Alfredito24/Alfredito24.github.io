document.getElementById("pullCord").addEventListener("click", () => {
    gsap.to("#cord", { opacity: 0, duration: 0.5 });
    gsap.to("#pullCord", { opacity: 0, duration: 0.5, onComplete: () => {
        document.getElementById("cord").style.display = "none";
        document.getElementById("pullCord").style.display = "none";

        document.getElementById("frame").innerHTML = `
            <div class="content">
                <div class="gif-container">
                    <img src="gift.gif" class="gif-animation">
                </div>
                <p class="question-text">¿Quieres Pasar El 24 De Marzo Con Migo? 💖</p>
                <div class="button-container">
                    <button id="yesButton">Sí</button>
                    <button id="noButton">No</button>
                </div>
            </div>
        `;

        // Evento cuando se presiona "Sí"
        document.getElementById("yesButton").addEventListener("click", () => {
            document.getElementById("frame").innerHTML = `
                <div class="content">
                    <div class="video-container">
                        <video src="Gato.mp4" autoplay class="thank-you-video"></video>
                    </div>
                    <p class="thank-you-text">¡Sabía que dirías que sí, Te Amooo muchoo! 💕</p>
                </div>
            `;
        });

        // Hacer que el botón "No" se mueva
        document.getElementById("noButton").addEventListener("mouseover", (e) => {
            let maxX = window.innerWidth - e.target.clientWidth;
            let maxY = window.innerHeight - e.target.clientHeight;
            
            e.target.style.position = "absolute";
            e.target.style.top = Math.max(0, Math.random() * maxY) + "px";
            e.target.style.left = Math.max(0, Math.random() * maxX) + "px";
        });
    }});
});

