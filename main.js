let showBtn = document.getElementById("showBtn");

setInterval(() => {
  let hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let newC = [];
  for (let i = 0; i < 6; i++) {
    let color = hexArr[Math.floor(Math.random() * hexArr.length)];
    newC.push(color);
  }

  showBtn.style.backgroundColor = `#${newC.join("")}`;
}, 2000);

showBtn.onclick = function () {
  window.open(
    "https://1drv.ms/f/s!AnohkQij9rbrgxp1NmZ2c3zJEQV2?e=waD6s1",
    "_blank"
  );
};

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let imgEle = document.querySelector(".landing");
let currentIndex = 1;

next.addEventListener("click", function () {
  if (currentIndex != 3) {
    imgEle.classList.remove(`bg-${currentIndex}`);
    imgEle.classList.add(`bg-${currentIndex + 1}`);
    currentIndex++;
  }
});

prev.addEventListener("click", function () {
  if (currentIndex != 1) {
    imgEle.classList.remove(`bg-${currentIndex}`);
    imgEle.classList.add(`bg-${currentIndex - 1}`);
    currentIndex--;
  }
});

// function goNext() {
//   if (nextBtn.classList.contains("disabeld")) {
//     return false;
//   } else {
//     currentIndex++;
//     checker();
//   }
// }
// function goPrev() {
//   if (prevBtn.classList.contains("disabeld")) {
//     return false;
//   } else {
//     currentIndex--;
//     checker();
//   }
// }
