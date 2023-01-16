const track = document.querySelector(".track");

document.addEventListener("mousemove", (event) => {
  if (window.innerWidth < 740) return;
  event = event || window.event;

  const x = ((event.clientX / window.innerWidth) * 40 + 30).toFixed(2);
  const y = ((event.clientY / window.innerHeight) * 40 + 30).toFixed(2);

  track.style.backgroundPosition = `${x}% ${y}%`;
});
