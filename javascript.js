// Simple click animation feedback
document.querySelectorAll(".links a").forEach(link => {
  link.addEventListener("click", () => {
    link.style.opacity = "0.7";
    setTimeout(() => {
      link.style.opacity = "1";
    }, 150);
  });
});
