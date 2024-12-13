import React, { useState, useEffect } from "react";

const SoundEffects = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Create the background music instance outside of useEffect
  const backgroundMusic = new Audio("/assets/sounds/Bgsound.mp3");
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.01;// Set the default volume to the lowest possible (0.01)

  const clickSound = new Audio("/assets/sounds/Click.mp3");

  useEffect(() => {
    // Try to play the background music automatically when the page loads
    backgroundMusic.play().catch((err) => {
      console.log("Autoplay failed:", err); // Handle potential autoplay failure
    });

    // Mark the music as playing
    setIsMusicPlaying(true);

    // Event listener for click and scroll to start background music
    document.body.addEventListener("click", startAudio);
    document.body.addEventListener("scroll", startAudio);

    // Play click sound on any click event
    const handleClick = () => {
      clickSound.play();
    };

 

    // Add event listeners to body for click and hover
    document.body.addEventListener("click", handleClick);


    // Cleanup event listeners when component is unmounted
    return () => {
      document.body.removeEventListener("click", startAudio);
      document.body.removeEventListener("scroll", startAudio);
      document.body.removeEventListener("click", handleClick);
    
    };
  }, []);

  // Function to start background music after user interaction
  const startAudio = () => {
    if (!isMusicPlaying) {
      backgroundMusic.play();
      setIsMusicPlaying(true); // Mark music as playing
    }
  };

  return null; // No need to render anything in the DOM
};

export default SoundEffects;
