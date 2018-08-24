function index() {
    $.ajax({
        type: 'get',
        url: '/movieList',
        success: function (data) {
            console.log(data);
            let str = '';
            for (let i = 0; i < data.length - 2; i++) {
                str += `<li class="fantan"><a href="xiangqing.html?${data[i]._id}"><img src="http://127.0.0.1:8848${data[i].movie_cover_img}" alt=""/></a>

<p  class="fantan1">${data[i].movie_cName}</p>

<p class="fantan2"><i>${data[i].movie_scoring}</i></p>
</li>`

            }
            $('.fantanfengbao').html(str);

        }
    })
}
index();