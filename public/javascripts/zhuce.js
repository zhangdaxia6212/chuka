
let phone_phone;
let pwd_pwd;
let code_yzm;
let qrPwd;
//用正则验证手机号
let phon = /^1[3，9]\d{9}$/;
$('#phone_id').on('change', function () {
    if (phon.test($('#phone_id').val())) {
        $('#phone_i').html('√').css('color', 'green')
        judgeName();
        phone_phone = true;
    } else {
        $('#phone_i').html('× 手机号格式错误').css('color', 'red')
        phone_phone = false;

    }
})
//像服务器获取验证码
$('#addBut').on('click', function () {
    $.ajax({
        type: 'get',
        url: '/reg/code',
        success: function (data) {
            $('#taima').html(data);
        }
    })
})
//判断验证码和输入的是否一致
$('#dynamic_code').on('change', function () {
    if ($('#dynamic_code').val() == $('#taima').text()) {
        $('#code_id').html('输入正确').css('color', 'green')
        code_yzm = true
    } else {
        $('#code_id').html('输入错误').css('color', 'red')
        code_yzm = false;
    }
})
//用正则验证密码
let ppwd = /^[a-zA-Z0-9@!#]{8,16}$/;
$('#pwd').on('change', function () {
    if (ppwd.test($('#pwd').val())) {
        $('#pwd_i').html('√').css('color', 'green')
        pwd_pwd = true;
    } else {
        $('#pwd_i').html('× 密码只能数字字母，至少八位数').css('color', 'red')
        pwd_pwd = false;
    }
})
//验证密码和确认密码是否一致
$('#password').on('change', function () {
    if ($('#password').val() == $('#pwd').val()) {
        $('#password_i').html('√').css('color', 'green')
        qrPwd = true;
    } else {
        $('#password_i').html('× 密码不匹配 请重新输入').css('color', 'red')
        qrPwd = false;
    }
})
//判断密码长度变颜色
function pwdColor() {
    $('#pwd').on('input', function () {
        $('#span').css('backgroundColor', '#ededed')
        if ($('#pwd').val().length <= 4 && $('#pwd').val().length > 0) {
            $('#span').css('backgroundColor', 'red')
            $('#span_span').css('backgroundColor', '#ededed')
        } else if ($('#pwd').val().length <= 8 && $('#pwd').val().length > 4) {
            $('#span_span').css('backgroundColor', 'orange')
            $('#span').css('backgroundColor', '#ededed')
            $('#span_pan').css('backgroundColor', '#ededed')
        } else if ($('#pwd').val().length < 16 && $('#pwd').val().length > 8) {
            $('#span_pan').css('backgroundColor', 'green')
            $('#span_span').css('backgroundColor', '#ededed')
        }
    })
}
pwdColor()
//判断注册用户名是否重复
function judgeName() {
    $.ajax({
        type: 'get',
        url: '/reg/regName',
        data: { text: $('#phone_id').val() },
        dataType: 'json',
        success: function (data) {
            // console.log(data)
            if (data) {
                $('#phone_i').html(' × 该手机号已被注册').css('color', 'red')
            } else {
                $('#phone_i').html(' √ 该手机号可以注册').css('color', 'green')

            }
        }
    })
}
//---------------------------阻止提交事件--------------------
$('#form_ok').on('submit', formSubmit)//提交事件
function formSubmit() {
    if (phone_phone == true && pwd_pwd == true && code_yzm == true && qrPwd == true) {
        return true;
    } else {
        return false;
    }
}