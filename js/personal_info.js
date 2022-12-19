const setting_item = document.querySelectorAll(".setting_item");
let isChange = false;

setting_item.forEach((el) => {
  console.log(el.children);
  el.children[1].addEventListener("click", () => {
    if (isChange) return;
    el.children[0].disabled = false;
    el.children[2].style.display = "block";
    el.children[1].style.display = "none";
    isChange = true;
  });

  el.children[2].addEventListener("click", () => {
    el.children[0].disabled = true;
    el.children[2].style.display = "none";
    el.children[1].style.display = "block";
    isChange = false;
  });
});
