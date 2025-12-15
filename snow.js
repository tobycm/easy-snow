setInterval(() => {
  if (!document.christmas) return;

  const isReduced = window.matchMedia("(prefers-reduced-motion)").matches;
  if (isReduced) return;

  const snow = document.createElement("div");

  const size = Math.max(4, Math.ceil(Math.random() * 30) - 9);

  snow.style.width = size + "px";
  snow.style.height = size + "px";

  const x = Math.floor(Math.random() * window.innerWidth - size);
  const y = Math.floor(Math.random() * window.innerHeight);

  snow.style.left = x + "px";
  snow.style.top = "0px";

  snow.classList.add("snow");

  const lifeSpan = Math.floor(Math.random() * 4);

  snow.classList.add("snow" + (lifeSpan + 1));

  document.body.appendChild(snow);

  // snow truck
  setTimeout(() => {
    snow.remove();
  }, [10, 8, 6, 4][lifeSpan] * 1000);
}, 200);
