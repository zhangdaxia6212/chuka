// 发送AJAX
function details() {
    let play = location.search.substring(1);///获得了当前链接的中?号后的参数

    $.ajax({
        type: 'get',
        url: '/details',
        data: { _id: play },
        success: function (data) {
            let left = data.movie_actors.split('、');
            console.log(data)
            console.log(left)

            $('#action_a1').text(data.movie_cName)
            $('#action_a2').text(data.movie_eName);
            $('#action_a3').text(data.movie_type);
            $('#action_a4').text(data.movie_region);
            $('.juqing P').text(data.movie_introduce);
            //演员名字
            for (let z = 0; z < left.length - 3; z++) {
                $('#figure_z1').text(left[z])
            }
            for (let x = 1; x < left.length - 2; x++) {  
                $('#figure_z2').text(left[x])
            }
            for (let v = 2; v < left.length -1; v++) {    
                $('#figure_z3').text(left[v])
            }
            for (let n = 3; n < left.length; n++) {          
                $('#figure_z4').text(left[n])
            }
                
            
            $('.xingdong1 p span:nth-child(2)').text(data.movie_duration)
            $('.xingdong1 p:nth-child(5)').text(data.movie_date)
            $('.xingdong').html(`<img src="http://127.0.0.1:8848${data.movie_cover_img}"/>`)
            $('.yonghu10 p:nth-child(2)').text(data.movie_ticket);
            $('.yonghu p:nth-child(2)').text(data.movie_scoring)
            $('#figure_t1').html(`<img src="http://127.0.0.1:8848${data.movie_actors_img[0]}"/>`)
            $('#figure_t2').html(`<img src="http://127.0.0.1:8848${data.movie_actors_img[0]}"/>`)
            $('#figure_t3').html(`<img src="http://127.0.0.1:8848${data.movie_actors_img[1]}"/>`)
            $('#figure_t4').html(`<img src="http://127.0.0.1:8848${data.movie_actors_img[2]}"/>`)
            $('#figure_t5').html(`<img src="http://127.0.0.1:8848${data.movie_actors_img[3]}"/>`)
            $('.zuobian5').html(`<img src="http://127.0.0.1:8848${data.movie_img[0]}"/>`)
            let str = '';
            for (let i = 1; i < data.movie_img.length; i++) {
                str += `<img src="http://127.0.0.1:8848${data.movie_img[i]}"/>`
            }
            $('.youbian5').html(str)






        }
    })

    //相关电影发AJAX
    $.get('/movieList', function (data) {
        //相关电影
        let add = ""

        for (let i = 0; i < data.length - 2; i++) {
            // console.log(i)
            add += `<li>
<img src="http://127.0.0.1:8848${data[i].movie_cover_img}" alt="" />
<p class="fantan2">${data[i].movie_cName}</p>
<p>${data[i].movie_scoring}</p>
</li>`
        }
        $('.fantan').html(add)
    })


}
details();