export function initializeUI() {
  const welcomeDialog = document.querySelector("dialog");
  const continueButton = document.querySelector("button");

  // Show dialog on initialization
  if (!welcomeDialog.hasAttribute("open")) {
    welcomeDialog.showModal();
  }

  function animateBackground() {
    welcomeDialog.classList.add("fade-effect");
  }

  function hideWelcomeScreen() {
    welcomeDialog.close();
    history.pushState(null, null, window.location.pathname + "pattern");
  }

  if (continueButton) {
    const buttonText = continueButton.querySelector("span");
    buttonText.textContent = "Continue";
    continueButton.disabled = false;
    continueButton.style.cursor = "pointer";
    continueButton.addEventListener("click", hideWelcomeScreen);
  }

  // Add event listener for back button
  window.addEventListener("popstate", () => {
    if (!welcomeDialog.hasAttribute("open")) {
      welcomeDialog.showModal();
    }
  });

  // Start background animation after a delay
  setTimeout(animateBackground, 2000);
}
