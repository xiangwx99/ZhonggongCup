window.onscroll = function () {
  let gotoTop = document.getElementById("gotoTop")
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  if(scrollTop > 1000) {
    gotoTop.style.display = "block"
  } else {
    gotoTop.style.display = "none"
  }
}