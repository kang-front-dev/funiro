$(document).ready(function () {
    $('.header__slider').slick({
        appendArrows: $('.header__slider_arrows'),
        appendDots: $('.header__slider_dots'),
        dots: true,
        centerMode: false,
        variableWidth: true,
        prevArrow: $('.header__slider_arrow-left'),
        nextArrow: $('.header__slider_arrow-right'),
        initialSlide: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        touchMove: false,
        draggable: false,
    })
})
$(document).ready(function () {
    $('.rooms__slider').slick({
        appendArrows: $('.rooms__slider_arrows'),
        appendDots: $('.rooms__slider_dots'),
        dots: true,
        centerMode: false,
        variableWidth: true,
        prevArrow: $('.rooms__slider_arrow-left'),
        nextArrow: $('.rooms__slider_arrow-right'),
        initialSlide: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        touchMove: false,
        draggable: false,
    })
})

$(document).ready(function () {
    $('.tips__slider').slick({
        appendArrows: $('.tips__slider_arrows'),
        appendDots: $('.tips__slider_dots'),
        dots: true,
        centerMode: true,
        variableWidth: true,
        prevArrow: $('.tips__slider_arrow-left'),
        nextArrow: $('.tips__slider_arrow-right'),
        initialSlide: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4500,
        touchMove: false,
        draggable: false,

    })
})


$(document).ready(function () {
    let active = $('.rooms__slider > .slick-list > .slick-track > .slick-active')
    active.addClass('item-transform')
})
$(document).ready(function () {
    let active = $('.tips__slider > .slick-list > .slick-track > .slick-active')
    active.addClass('tips__slider_card-active')
})





let priceTitle = $('.header__content_price-title')[0].innerHTML,
    priceDescr = $('.header__content_price-descr')[0].innerHTML,
    price = $('.header__content_price > h3')[0].innerHTML

console.log(priceTitle + ' ' + priceDescr + ' ' + price);



$('.header__slider').on('beforeChange', function () {
    console.log('changed');
    setTimeout(() => {
        if ($('.slick-slide').hasClass('slick-active')) {
            mySlide = $('.slick-active').children().children()
            if (mySlide.hasClass('header_slider-2')) {
                priceTitle = 'Bohauss';
                priceDescr = 'Luxury big sofa 2-seat';
                price = 'Rp 17.000.000'
                console.log(1);
            } else if (mySlide.hasClass('header_slider-3')) {
                priceTitle = 'Bohess';
                priceDescr = 'Luxury big bed';
                price = 'Rp 10.000.000'
                console.log(2);
            } else if (mySlide.hasClass('header_slider-1')) {
                priceTitle = 'Bohenuss';
                priceDescr = 'Luxury wide sofa';
                price = 'Rp 13.000.000'
                console.log(3);
                console.log(price);
            }
        }
        $('.header__content_price-title')[0].innerHTML = priceTitle
        $('.header__content_price-descr')[0].innerHTML = priceDescr
        $('.header__content_price > h3')[0].innerHTML = price
    }, 100);



})

$('#products').on('click', function(){
    $('#products-list').fadeToggle(300)
})
$('#rooms').on('click', function(){
    $('#rooms-list').fadeToggle(300)
})









$('.rooms__slider').on('beforeChange', function(){
    setTimeout(() => {
        let active = $('.rooms__slider > .slick-list > .slick-track > .slick-active')
        setTimeout(() => {
            active.addClass('item-transform')
            $('.rooms__slider > .slick-list > .slick-track > .slick-slide').not(active).removeClass('item-transform')
        }, 100);

        if ($('.rooms__slider > .slick-list > .slick-track > .slick-slide').hasClass('slick-active')) {
            let roomsIndicator = $('.rooms__slider > .slick-list > .slick-track > .slick-active').children().children()
            if (roomsIndicator.hasClass('rooms-bedroom')) {
                $('#rooms__number')[0].innerHTML = '01'
                $('#rooms__name')[0].innerHTML = 'Bed Room'
            }else if (roomsIndicator.hasClass('rooms-kitchen')) {
                $('#rooms__number')[0].innerHTML = '02'
                $('#rooms__name')[0].innerHTML = 'Kitchen'
            }else if (roomsIndicator.hasClass('rooms-table')) {
                $('#rooms__number')[0].innerHTML = '03'
                $('#rooms__name')[0].innerHTML = 'Table'
            }
        }

    }, 50);

})



$('.tips__slider').on('beforeChange', function(){
    setTimeout(() => {
        let active = $('.tips__slider > .slick-list > .slick-track > .slick-active')
        setTimeout(() => {
            active.addClass('tips__slider_card-active')
            $('.tips__slider > .slick-list > .slick-track > .slick-slide').not(active).removeClass('tips__slider_card-active')
        }, 100);


    }, 50);

})






