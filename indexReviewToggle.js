(() => {
  // Map button IDs to review section IDs
  const reviewMap = {
    guillaumeButton: "guillaumeReview",
    liamButton: "liamReview",
    lucasButton: "lucasReview",
    francoisButton: "francoisReview",
  };

  // Helper to get element by ID safely
  function queryID(id) {
    return document.getElementById(id);
  }

  // Function to display a specific review and hide others
  function displayReview(reviewId) {
    Object.values(reviewMap).forEach((id) => {
      const section = queryID(id);
      if (section) {
        section.classList.remove("visible");
      }
    });

    const activeSection = queryID(reviewId);
    if (activeSection) {
      activeSection.classList.add("visible");
    }
  }

  // Function to update button states
  function updateButtons(activeButtonId) {
    Object.keys(reviewMap).forEach((btnId) => {
      const btn = queryID(btnId);
      if (btn) {
        btn.classList.remove("active");
        if (btnId === activeButtonId) {
          btn.classList.add("active");
        }
      }
    });
  }

  // Attach click handlers to all buttons
  Object.entries(reviewMap).forEach(([btnId, reviewId]) => {
    const btn = queryID(btnId);
    if (!btn) return;

    btn.addEventListener("click", () => {
      displayReview(reviewId);
      updateButtons(btnId);
    });
  });

  // Initialize: show Guillaume's review and mark his button as active
  displayReview("guillaumeReview");
  updateButtons("guillaumeButton");
})();
