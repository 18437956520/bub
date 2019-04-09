var n = 0
$('div').on('click', function(x){
    setTimeout(function(){
        $(x.currentTarget).addClass('active')
    }, n*500)
    n += 1
})