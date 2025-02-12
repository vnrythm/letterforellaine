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

  // Function to resize canvas
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
  bgMusic.volume = 0.4;
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



  // Event listeners for Yes and No buttons
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");

  yesBtn.addEventListener("click", () => {
    // Save response in localStorage
    localStorage.setItem("valentine-response", "yes");

    // You can add any additional action or display a message here instead of redirecting
    alert("You chose YES! 💖");
  });

  noBtn.addEventListener("click", () => {
    // Save response in localStorage
    localStorage.setItem("valentine-response", "no");

    // You can add any additional action or display a message here instead of redirecting
    alert("You chose NO. 💔");
  });
});

const closeBtn = document.getElementById("close-btn");
console.log(closeBtn); // Should not be null

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    hideLetterPaper();
  });
} else {
  console.log("Close button not found in the DOM");
}


function hideLetterPaper() {
  console.log("hideLetterPaper() triggered!");
  
  const letterPaper = document.querySelector(".letter-paper");
  const heartsCanvas = document.getElementById("heartsCanvas");
  const envelope = document.getElementById("envelope");

  if (!letterPaper) {
    console.log("Letter paper element not found!");
    return;
  }

  heartsCanvas.classList.remove("blur-background");
  envelope.classList.remove("blur-background");

  letterPaper.style.visibility = "hidden";
  letterPaper.style.opacity = "0";
  letterPaper.style.transform = "translate(-50%, -50%) scale(0.8)";
}


document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const buttonContainer = document.getElementById("button-container");
  const gifContainer = document.getElementById("gif-container");
  const responseGif = document.getElementById("response-gif");
  const responseText = document.getElementById("response-text");
  const resetBtn = document.getElementById("reset-btn");



  function showGif(response) {
    if (response === "yes") {
      responseGif.src = "happy.gif"; // Change to your actual happy GIF
      responseText.textContent = "";
    } else {
      responseGif.src = "sad.gif"; // Change to your actual sad GIF
      responseText.textContent = "Nah, you will be my valentine!";
    }

    buttonContainer.classList.add("hidden"); // Hide buttons
    gifContainer.classList.remove("hidden"); // Show GIF
    resetBtn.classList.remove("hidden"); // Show reset button
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const buttonContainer = document.getElementById("button-container");
  const gifContainer = document.getElementById("gif-container");
  const responseGif = document.getElementById("response-gif");
  const responseText = document.getElementById("response-text");
  const resetBtn = document.getElementById("reset-btn");


  yesBtn.addEventListener("click", () => {
    localStorage.setItem("valentine-response", "yes");
    showGif("yes");
  });

  noBtn.addEventListener("click", () => {
    localStorage.setItem("valentine-response", "no");
    showGif("no");
  });

  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("valentine-response");
    buttonContainer.classList.remove("hidden");
    gifContainer.classList.add("hidden");
    responseText.classList.add("hidden");
    resetBtn.classList.add("hidden");
  });

  function showGif(response) {
    buttonContainer.classList.add("hidden"); // Hide buttons

    if (response === "yes") {
      responseGif.src = "happy1.gif"; // Replace with actual happy GIF
      responseText.textContent = "Yayyyy! YAHOOO!! <3";
    } else {
      responseGif.src = "happy.gif"; // Replace with actual sad GIF
      responseText.textContent = "Nah, you'll be my valentine!";
    }

    responseText.classList.remove("hidden"); // Show text
    gifContainer.classList.remove("hidden"); // Show GIF
    resetBtn.classList.remove("hidden"); // Show reset button
  }
});




function submitToGoogleForm(response) {
  let formURL = "https://docs.google.com/forms/d/e/1s4DTdxoY3f6UCxVWt7OoamdOt347i9_fbp0uPyxCCNM/formResponse";
  
  // Use the correct entry ID copied from the form
  let entryID = "entry.980724091";  // Correct Entry ID from your form

  // Construct the full URL
  let fullURL = `${formURL}?${entryID}=${response}&submit=Submit`;

  // Submit the response
  fetch(fullURL, { mode: "no-cors" })
    .then(() => {
      console.log("✅ Response submitted successfully!");
      alert(`Response "${response}" submitted successfully! 🎉`);
    })
    .catch((error) => {
      console.error("❌ Error submitting response:", error);
      alert("Something went wrong while submitting the response.");
    });
}

// Attach event listeners to the buttons
document.getElementById("yes-btn").addEventListener("click", () => submitToGoogleForm("Yes"));
document.getElementById("no-btn").addEventListener("click", () => submitToGoogleForm("No"));




async function saveResponse(response) {
  const url = 'https://script.google.com/macros/s/AKfycbxej6aHE-2-0tTdpJpDkAbIS6j_s2jR40lMoGDVCSs6lmfBfq0HiFCmH84TUH2m3v5k6w/exec';  // Paste the URL from your Google Apps Script Web App
  const params = {
    method: 'POST',
    body: new URLSearchParams({ response }),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  };

  await fetch(url, params);
  alert(`Response "${response}" saved successfully! 🎉`);
}

// Attach event listeners to buttons
document.getElementById("yes-btn").addEventListener("click", () => saveResponse("Yes"));
document.getElementById("no-btn").addEventListener("click", () => saveResponse("No"));
