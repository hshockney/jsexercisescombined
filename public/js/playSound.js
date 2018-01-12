function playSound(event) {
            const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
            const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
            audio.currentTime = 0;
            if (!audio) return; //Stops the function from running
            audio.play();
            key.classList.add('playing');
        }
        function removeTransition(event) {
            if (event.propertyName !== 'transform'); //skips if it's not a transform
            this.classList.remove('playing');
        }
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));
        window.addEventListener('keydown', playSound);
   