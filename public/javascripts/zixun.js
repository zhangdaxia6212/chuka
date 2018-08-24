//发送AJAX

function lnitialize() {
    let play = location.search.substring(1);///获得了当前链接的中?号后的参数

    $.get('/consulting',{_id:play},function(data){
              
            $('#h2').text(data.title)
            $('.maoyan').text(data.time)
            let str = ''
            for (let i = 0; i < data.img.length; i++) {
                console.log(data.img[i])
                str += `<img src="http://127.0.0.1:8848${data.img[i]}"/>
                <div class="txt_id">${data.txt[i]}</div>`;
            }
            $('#text_a1').html(str)
            //评论
            $('.one2 p:nth-child(3)').text(data.ments[1])
    })


}
lnitialize()

