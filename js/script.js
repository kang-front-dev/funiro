$('.header__nav_burger').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('burger-active')
    $('.side-bar').fadeToggle(300).css('display', 'flex');
})