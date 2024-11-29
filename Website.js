document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll(".anchors");

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior

      const targetId = this.getAttribute("href").substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
