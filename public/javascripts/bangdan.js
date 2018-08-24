function movieList() {
    
    $.ajax({
        type: 'get',
        url: '/movieList',
        success: function (data) {
            let str = `  <div>
            <div class="huang">
            <img src="../xiangmutu/huangguai.png" alt="" />
        </div>
        </div>
        <div class="diyige1">
        <div class="huang1">
         <a href="xiangqing.html?${data[0]._id}"><img src="http://127.0.0.1:8848${data[0].movie_cover_img}" alt=""/></a></div>
         <div class="zhuyan">
            <p>${data[0].movie_cName}</p>
    
            <p>主演：${data[0].movie_actors}</p>
    
            <p>上映时间：${data[0].movie_date}</p>
        </div>
        <div class="zhuyan1">${data[0].movie_scoring}</div>
        </div>
        </div>
        `
            let a = 2
            for (let i = 1; i < data.length; i++) {
                str += `  <div>      
                    <div class="huang11">
                    <i>${a++}</i>
                </div>
                <div class="diyige1">
                <div class="huang1">
                 <a href="xiangqing.html?${data[i]._id}"><img src="http://127.0.0.1:8848${data[i].movie_cover_img}" alt=""/></a></div>
    
                 <div class="zhuyan">
                    <p>${data[i].movie_cName}</p>
            
                    <p>主演：${data[i].movie_actors}</p>
            
                    <p>上映时间：${data[i].movie_date}</p>
                </div>
                <div class="zhuyan1">${data[i].movie_scoring}</div>
                </div>
                </div>
              `
            }
            $('#section').html(str);
        }
    })
}

movieList()