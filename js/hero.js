window.onload = function() {
  let choice = document.getElementsByClassName("category-choice")
  let showList = document.getElementsByClassName("waterfall-flow")
  
  waterFall(236, 39, 4, "waterfall-flow", 0);
  // // 页面尺寸改变时实时触发
  // window.onresize = function() {
  //   waterFall(236, 16, 4, "waterfall-flow");
  // }

  for(let i = 0; i < choice.length; i++) {
    choice[i].onclick = function () {
      addClass(choice[i], "active")
      addClass(showList[i], "show")
      waterFall(236, 39, 4, "waterfall-flow", i);
      for(let j = 0; j < choice.length; j++) {
        if (i !== j) {
          removeClass(choice[j], "active")
          removeClass(showList[j], "show")
        }
      }
    }
  }
  
}
