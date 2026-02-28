(() => {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  const specificInnerContainer = document.getElementById("weaponDescriptions");

  function onScroll() {
    const pos = specificInnerContainer ? specificInnerContainer.scrollTop : window.scrollY || document.documentElement.scrollTop;
    if (pos > 300) btn.classList.add("visible");
    else btn.classList.remove("visible");
  }

  window.addEventListener("scroll", onScroll);
  if (specificInnerContainer) {
    specificInnerContainer.addEventListener("scroll", onScroll);
  }

  btn.addEventListener("click", () => {
    if (specificInnerContainer) {
      specificInnerContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  onScroll();
})();
