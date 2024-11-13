export function handleModuleError(event) {
  const welcomeDialog = document.querySelector("dialog");

  // If the error is from the main module script
  if (event.target?.tagName === "SCRIPT" && event.target.type === "module") {
    console.error("Module loading failed:", event);

    // Close the welcome screen if it's still open
    if (welcomeDialog.hasAttribute("open")) {
      welcomeDialog.close();
    }

    // Show error message to user
    const errorArticle = document.createElement("article");
    errorArticle.role = "alert";
    errorArticle.className = "error-content";
    errorArticle.innerHTML = `
        <header>
          <h2>Something went wrong</h2>
        </header>
        <section>
          <p>Please try refreshing the page or using a different browser.</p>
        </section>
      `;
    document.body.appendChild(errorArticle);
  }

  // Prevent default error handling
  event.preventDefault();
}
