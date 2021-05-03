$('td.gutter').remove();
$('pre').each(function(i){$($('pre')[i]).addClass('layui-code')})
layui.use('code', function(){ //加载code模块
  layui.code(); //引用code方法
});

function qiehuanzuocaidan(){
    if($('.left-menu')[0].style.display=='none'){
    $('.left-menu').addClass('layui-anim');
    $('.left-menu').addClass('layui-anim-down');
    $('.left-menu').show();}else{
        
    $('.left-menu').addClass('layui-anim');
    $('.left-menu').addClass('layui-anim-up');
    $('.left-menu').hide();
    }
}

function zhanneisousuo() {
    $.get('/html/zhannei.html',function(ssssss){
        layer.open({
            type: 1, 
			area: ['410px','110px'],
			closeBtn: 1,
            content: ssssss
        }); 
    });
}