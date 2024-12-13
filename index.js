 // Drum Kit
        const drums = document.querySelectorAll(".drum");
        drums.forEach(drum => {
            drum.addEventListener("click", () => playSound(drum));
        });

        document.addEventListener("keydown", event => {
            const key = event.key.toLowerCase();
            const drum = Array.from(drums).find(d => d.textContent.toLowerCase() === key);
            if (drum) playSound(drum);
        });

        function playSound(drum) {
            const sound = new Audio(drum.dataset.sound);
            sound.play();
            animateButton(drum);
        }

        function animateButton(button) {
            button.classList.add("pressed");
            setTimeout(() => button.classList.remove("pressed"), 100);
        }
