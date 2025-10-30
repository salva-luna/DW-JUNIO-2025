const list = document.getElementById("projectList");
const bg = document.getElementById("bgLayer");

let hideTimer = null;

list.addEventListener(
  "pointerenter",
  () => {
  },
  true
);

list.addEventListener("pointerover", (e) => {
  const item = e.target.closest(".project");
  if (!item || !list.contains(item)) return;

  const img = item.querySelector("img");
  if (!img) return;

  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }

  bg.style.backgroundImage = `url(${img.src})`;
  bg.style.opacity = "1";
});


list.addEventListener("pointerleave", () => {
 
  hideTimer = setTimeout(() => {
    bg.style.opacity = "0";
    setTimeout(() => {
      bg.style.backgroundImage = "";
    }, 350);
  }, 40);
});
