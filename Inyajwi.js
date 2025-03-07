
    document.querySelectorAll('.audio-button').forEach(button => {
  button.addEventListener('click', () => {
    const vowel = button.getAttribute('data-vowel');
    const audio = document.getElementById(`audio-${vowel}`);

    // Stop all other audio before playing the new one
    document.querySelectorAll('audio').forEach(a => {
      if (a !== audio) {
        a.pause();
        a.currentTime = 0;
      }
    });

    // Toggle play/pause
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
