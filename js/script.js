$('.header__nav_burger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('burger-active')
    $('.side-bar').fadeToggle(300).css('display', 'flex');
    $('body').toggleClass('overflow-hide')
})


var copyArr = new Array

$('.show_more').on('click', function () {
    let card = $('.products_card'),
        cardArr = Array.from(card)
    
    if (!$(this).hasClass('show_more-active')) {
        $('.products_grid').css({
            animation: 'paddingBottom 0.2s'
        })
        setTimeout(() => {
            cardArr.forEach(el => {
                let copyEl = el.cloneNode(true)
                cardArr[cardArr.length - 1].after(copyEl)
                copyArr.push(copyEl)
            });
            console.log(copyArr);
            $('.show_more')[0].textContent = "Hide"
            $('.show_more').addClass('show_more-active')
            setTimeout(() => {
                $('.products_grid')[0].scrollIntoView(false)
                    
                }, 200);
        }, 200);

    } else {
        $('.products_grid').css({
            animation: 'none'
        })
        setTimeout(() => {
            console.log(copyArr);
            $('.products_card').remove()
            for (let i = 0; i < 8; i++) {
                $('.products_grid')[0].appendChild(cardArr[i])
                console.log(cardArr[i]);
                
            }
            
    
            $('.show_more')[0].textContent = "Show More"
            $('.show_more').removeClass('show_more-active')
            setTimeout(() => {
            $('.rooms__section')[0].scrollIntoView(false)
                
            }, 200);
        }, 200);

    }



})