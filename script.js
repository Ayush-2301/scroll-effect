function scrollAppear() {
  var infoSection = Array.from(document.querySelectorAll(".info-section"));
  var screenPos = window.innerHeight / 1.2;
  infoSection.forEach((info) => {
    var infoPos = info.getBoundingClientRect().top;
    if (infoPos < screenPos) {
      info.classList.add("appear");
    } else {
      info.classList.remove("appear");
    }
  });
}
window.addEventListener("scroll", scrollAppear);
