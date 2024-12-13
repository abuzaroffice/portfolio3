import React, { useState, useEffect, useRef } from "react";

const SoundEffects = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Use ref to persist the backgroundMusic instance across renders
  const backgroundMusicRef = useRef(null);
  const clickSoundRef = useRef(null);

  useEffect(() => {
    // Create the background music instance inside useEffect hook
    backgroundMusicRef.current = new Audio("/assets/sounds/Bgsound.mp3");
    backgroundMusicRef.current.loop = true;
    backgroundMusicRef.current.volume = 0.1; // Set the default volume to the lowest possible (0.01)

    clickSoundRef.current = new Audio("/assets/sounds/Click.mp3");

    // Event listener for click and scroll to start background music
    const startAudio = () => {
      if (!isMusicPlaying) {
        backgroundMusicRef.current.play().catch((err) => {
          console.log("Autoplay failed:", err); // Handle potential autoplay failure
        });
        setIsMusicPlaying(true);
      }
    };

    // Add event listeners for user interactions
    document.body.addEventListener("click", startAudio);
    document.body.addEventListener("scroll", startAudio);

    // Play click sound on any click event
    const handleClick = () => {
      clickSoundRef.current.play();
    };

    // Add event listener to play click sound
    document.body.addEventListener("click", handleClick);

    // Cleanup event listeners when component is unmounted
    return () => {
      document.body.removeEventListener("click", startAudio);
      document.body.removeEventListener("scroll", startAudio);
      document.body.removeEventListener("click", handleClick);
    };
  }, [isMusicPlaying]);

  return null; // No need to render anything in the DOM
};

export default SoundEffects;
