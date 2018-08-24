//轮播图片
var tt = null;
var kkk;
var n = 0;
var timer = 0;
window.onload = function () {
    var li = document.getElementById("btn").getElementsByTagName("li");
    kkk = document.getElementById("imm").getElementsByTagName("a");
    for (var i = 0; i < kkk.length; i++) {
        if (i != 0) {
            kkk[i].style.opacity = 0;
        }
    }
    for (var j = 0; j < li.length; j++) {
        li[j].onmouseover = function () {
            var that = this;
            tt = setTimeout(function () {
                var index = that.innerHTML - 1;
                n = index;
                if (index < kkk.length) {
                    for (var o = 0; o < li.length; o++) {
                        li[o].className = "";
                        kkk[o].style.opacity = 0;
                        kkk[o].style.zIndex = 9998;
                    }
                    that.className = "on";
                    kkk[index].style.opacity = 1;
                    kkk[index].style.zIndex = 9999;
                    kkk[index].style.transition = "opacity 1s";
                    leftf(-300, 0, kkk[index]);
                }
            }, 100);

        };
        li[j].onmouseout = function () {
            clearTimeout(tt)
        }
    }
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var jiao = document.getElementById("jiao");
    var body = document.getElementById("cont");

    timer = setInterval("autoplay()", 3000);
    body.onmouseover = function () {
        jiao.style.display = "block";
        clearInterval(timer);
    };
    body.onmouseout = function () {
        jiao.style.display = "none";
        timer = setInterval("autoplay()", 3000);
    };
    left.onclick = function () {
        if (n > 0) {
            n--
        } else if (n == 0) {
            n = kkk.length - 1;
        }
        var li = document.getElementById("btn").getElementsByTagName("li");
        li[n].onmouseover()
    };
    right.onclick = function () {
        n = n >= (kkk.length - 1) ? 0 : ++n;
        var li = document.getElementById("btn").getElementsByTagName("li");
        li[n].onmouseover()
    }
};
function leftf(start, end, ele) {
    var tt = setInterval(function () {
        start += 10;
        ele.style.left = start + "px";
        if (start == end) {
            clearInterval(tt)
        }
    }, 20)
}
function autoplay() {
    n = n >= (kkk.length - 1) ? 0 : ++n;
    var li = document.getElementById("btn").getElementsByTagName("li");
    li[n].onmouseover()
};


//发AJAX
function index() {
    $.get('/index_page', function (data) {
        // console.log(data)
        let str = '';
        for (let i = 0; i < data.length - 4; i++) {
            str += `<li><a href="xiangqing.html?${data[i]._id}"> <img src="http://127.0.0.1:8848${data[i].movie_cover_img}" alt="" /></a>
         <p><a href="">购票</a></p> 
         <div class="div_movie_div"><a href="xiangqing.html?${data[i]._id}">${data[i].movie_cName}</a></div>
         <div class="movie_div"> ${data[i].movie_scoring}</div>
         
            </li>`
        }
        $('.fuhuo').html(str)
      let add=''
        for (let b = 4; b < data.length; b++) {

            add += `<li><a href="xiangqing.html?${data[b]._id}"> <img src="http://127.0.0.1:8848${data[b].movie_cover_img}" alt="" /></a>
            <p><a href="">购票</a></p> 
            <div class="div_movie_div"><a href="xiangqing.html?${data[b]._id}">${data[b].movie_cName}</a></div>
            <div class="movie_div"> ${data[b].movie_scoring}</div>
               </li>`   
        }
$('.fuhuo1').html(add)
    });
}
index()
$.get('/index_page',function(data){

       
    console.log(data)
    let two='';
   two+=`    <h1>今日票房</h1>

   <p class="piaofang1">
       <img src="http://127.0.0.1:8848${data[0].movie_cover_img}" alt="" />
   </p>
   <div class="piaofang2">
       <span>${data[0].movie_cName}</span>
       <p> ${data[0].movie_ticket}</p>

       <p>
   </div>


   </p>`
    let page='';
    let a=2;
    for (let z = 0; z < data.length; z++) {
     page+=`
     <p class="jingtian">
     <i>${a++}</i>${data[z].movie_cName}
     <span>${data[z].movie_ticket}</span>
 </p>
     `
        
    }
    $('#div_page').html(page)
    $('#div_page1').html(two)

})