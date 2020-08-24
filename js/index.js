var anchorList = document.getElementsByClassName("anchor-point")

for(let i = 0; i < anchorList.length; i++) {
  anchorList[i].onclick = function () {
    addClass(anchorList[i], "active")
    for(let j = 0; j < anchorList.length; j++) {
      if (i !== j) {
        removeClass(anchorList[j], "active")
      }
    }
  }
}
