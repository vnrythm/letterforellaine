document.addEventListener("DOMContentLoaded", () => {
  const messageContainer = document.getElementById("message-container");
  const message = document.getElementById("message");
  const envelopeContainer = document.getElementById("envelope-container");
  const heartsCanvas = document.getElementById("heartsCanvas");
  const ctx = heartsCanvas.getContext("2d");
  const letterPaper = document.querySelector(".letter-paper");

  let hearts = [];
  const heartImage = new Image();
  heartImage.src = "snoopy.png";


  
  function resizeCanvas() {
    heartsCanvas.width = window.innerWidth;
    heartsCanvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);

  setTimeout(() => {
    message.textContent = "I made you this letter!";
  }, 2000);

  setTimeout(() => {
    messageContainer.classList.add("hidden");
    envelopeContainer.classList.remove("hidden");
    envelopeContainer.classList.add("show");
  }, 4000);

  document.body.style.backgroundColor = "#FFC0CB"; // Set background to pink

  const envelope = document.getElementById("envelope");
  
  envelope.style.backgroundColor = "#99caff"; // Light pink envelope

  // Create and autoplay background music
  const bgMusic = document.createElement("audio");
  bgMusic.src = "palagi.mp3";
  bgMusic.loop = true;
  bgMusic.volume = 0.8;
  document.body.appendChild(bgMusic);

  function playMusic() {
    bgMusic.play().catch(error => console.log("Autoplay blocked. User interaction required."));
  }

  document.addEventListener("click", playMusic, { once: true });
  window.addEventListener("load", playMusic);

  envelope.addEventListener("click", () => {
    if (envelope.classList.contains("open")) {
      envelope.classList.add("close");
      envelope.classList.remove("open");

      hearts = [];
      createHearts(14); 
    } else {
      envelope.classList.add("open");
      envelope.classList.remove("close");
      setTimeout(showLetterPaper, 600);

      addHeartsWithTransition(69 - hearts.length); // Add hearts dynamically
    }
  });

  document.addEventListener("click", (e) => {
    if (!letterPaper.contains(e.target) && !envelope.contains(e.target)) {
      if (letterPaper.style.visibility === "visible") {
        hideLetterPaper();
      }
    }
  });

  function getScaleForDevice() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const baseWidth = 650;
    const baseHeight = 950;
    const scaleX = viewportWidth / baseWidth;
    const scaleY = viewportHeight / baseHeight;

    return Math.min(scaleX, scaleY, 1);
  }

  function showLetterPaper() {
    const scale = getScaleForDevice();

    heartsCanvas.classList.add("blur-background");
    envelope.classList.add("blur-background");

    letterPaper.style.visibility = "visible";
    letterPaper.style.opacity = "1";
    letterPaper.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  function hideLetterPaper() {
    heartsCanvas.classList.remove("blur-background");
    envelope.classList.remove("blur-background");

    letterPaper.style.visibility = "hidden";
    letterPaper.style.opacity = "0";
    letterPaper.style.transform = "translate(-50%, -50%) scale(0.8)";
  }

  window.addEventListener("resize", () => {
    const scale = getScaleForDevice();

    if (letterPaper.style.visibility === "visible") {
      letterPaper.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
  });

  resizeCanvas();
  createHearts(14);
  animateHearts();
});

const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');

const heartImage = new Image();
heartImage.src = 'heart.png'; // Make sure to set the correct image path

heartImage.onload = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawHearts() {
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const scale = Math.random() * 0.1 + 0.05;  // Random size for hearts
      ctx.drawImage(heartImage, x, y, heartImage.width * scale, heartImage.height * scale);
    }
    requestAnimationFrame(drawHearts);
  }
  
  drawHearts();
};

document.getElementById("close-btn").addEventListener("click", function() {
  document.querySelector(".letter-paper").style.display = "none";
});
