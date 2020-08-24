// 宽度为1100px
// window.onload = function(){
//   //获取imgList
//   var imgList = document.getElementById("imgList");
//   //获取页面中所有的img标签
//   // var imgArr = document.getElementsByTagName("img");
//   var imgArr = document.getElementsByClassName("swiper_img");
//   //设置imgList的宽度
//   imgList.style.width = 1100*imgArr.length+"px";
//   //获取navDiv
//   var navDiv = document.getElementById("navDiv");
//   var outer = document.getElementById("outer");
//   navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";
//   var index = 0;
//   // var allA = document.getElementsByTagName("a");
//   var allA = document.getElementsByClassName("dot");
//   //设置默认选中的效果
//   allA[index].style.backgroundColor = "black";

//   for(var i=0; i<allA.length ; i++){
//     allA[i].num = i;
//     allA[i].onclick = function(){
//       clearInterval(timer);
//       index = this.num;
//       setA(); 
//       move(imgList , "left" , -1100*index , 30 , function(){
//         autoChange();
//       });
//     };
//   }
  
//   autoChange();
  
//   function setA(){
//     if(index >= imgArr.length - 1){  
//       index = 0;
//       imgList.style.left = 0;
//     }

//     for(var i=0 ; i<allA.length ; i++){
//       allA[i].style.backgroundColor = "";
//     }

//     allA[index].style.backgroundColor = "black";

//   };
//   var timer;

//   function autoChange(){
//     timer = setInterval(function(){
//       index++;
//       index %= imgArr.length;
//       move(imgList , "left" , -1100*index , 30 , function(){
//         setA();
//       });
//     },3000);
//   }
// };




// 宽度为自适应

window.onload = function(){
  let width = document.documentElement.scrollWidth  || document.body.scrollWidth 
  //获取imgList
  var imgList = document.getElementById("imgList");
  //获取页面中所有的img标签
  // var imgArr = document.getElementsByTagName("img");
  var imgArr = document.getElementsByClassName("swiper_img");
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].style.width = width + "px"
    console.log(imgArr[i].style.width);
    
  }
  //设置imgList的宽度
  imgList.style.width = width*imgArr.length+"px";
  //获取navDiv
  var navDiv = document.getElementById("navDiv");
  var outer = document.getElementById("outer");
  navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";
  var index = 0;
  // var allA = document.getElementsByTagName("a");
  var allA = document.getElementsByClassName("dot");
  //设置默认选中的效果
  allA[index].style.backgroundColor = "black";

  for(var i=0; i<allA.length ; i++){
    allA[i].num = i;
    allA[i].onclick = function(){
      clearInterval(timer);
      index = this.num;
      setA(); 
      move(imgList , "left" , -width*index , 30 , function(){
        autoChange();
      });
    };
  }
  
  autoChange();
  
  function setA(){
    if(index >= imgArr.length - 1){  
      index = 0;
      imgList.style.left = 0;
    }

    for(var i=0 ; i<allA.length ; i++){
      allA[i].style.backgroundColor = "";
    }

    allA[index].style.backgroundColor = "black";

  };
  var timer;

  function autoChange(){
    timer = setInterval(function(){
      index++;
      index %= imgArr.length;
      move(imgList , "left" , -width*index , 30 , function(){
        setA();
      });
    },3000);
  }
};