// Яндекс карты

let map1 = document.getElementById('map_1'),
    map2 = document.getElementById('map_2'),
    map3 = document.getElementById('map_3'),
    map4 = document.getElementById('map_4'),
    map5 = document.getElementById('map_5'),
    map6 = document.getElementById('map_6'),
    map7 = document.getElementById('map_7'),
    map8 = document.getElementById('map_8'),
    map9 = document.getElementById('map_9'),
    map10 = document.getElementById('map_10'),
    map11 = document.getElementById('map_11'),
    map12 = document.getElementById('map_12');

function mapClear() {
    map1.style.color = ('#fff');
    map2.style.color = ('#fff');
    map3.style.color = ('#fff');
    map4.style.color = ('#fff');
    map5.style.color = ('#fff');
    map6.style.color = ('#fff');
    map7.style.color = ('#fff');
    map8.style.color = ('#fff');
    map9.style.color = ('#fff');
    map10.style.color = ('#fff');
    map11.style.color = ('#fff');
    map12.style.color = ('#fff');
}

let iframe = document.getElementById('iframe');

    function onMap1 () {
        mapClear();
        map1.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3Afd49dd43b2c4e60c84c385314dbe7261778c0a9c062aacf70716634e5630e66c&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }
    
    function onMap2 () {
        mapClear();
        map2.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3A909629b27aee57648c9bca6f270f744ad01b484fc089c171468fb67c3eeb3feb&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }
    function onMap3 () {
        mapClear();
        map3.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3Ac79d2e83dc7da669e4f89ec10dbe9b1a71eed960ffc6e60f3fd0988ae16c1206&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }
    function onMap4 () {
        mapClear();
        map4.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3A369c71b5c9722f10e016a37ec2e38360c51e62aa6e3eb5bc0b956de00613883e&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }
    function onMap5 () {
        mapClear();
        map5.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3Ac873cb552f0964e41ca0dcf1ada2814b6e409418ddc01a04df52d6ac742bbebb&amp;source=constructor" width="500" height="400" frameborder="0"'
    }
    function onMap6 () {
        mapClear();
        map6.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3A543b456b1025b6343075763471bd4162f3e18f917f66fe233d120c7488419223&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }
    function onMap7 () {
        mapClear();
        map7.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3A37b9875d329b8cd87504220e6a63c779b92f1c2d72161d7995dcc8517c557d47&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }
    function onMap8 () {
        mapClear();
        map8.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3A5d88ead643456a811ba3fad397413ab4d905700eeb387e5cd6e79da7734a3d99&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }
    function onMap9 () {
        mapClear();
        map9.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3Aef24b883ba42798890a79e16499b5c51cccf7f5f4bf67a85dfe7327dd4b49a5b&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }
    function onMap10 () {
        mapClear();
        map10.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3A6b0da8618b1eaf168e3d5e0e803bda60dd0d34a3d92509800d308f412e530be2&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }
    function onMap11 () {
        mapClear();
        map11.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3A13ac7646977f663c7eb1b82e76f3a7ae9c9cd43db59fd65578d7573d7f16ad34&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }
    function onMap12 () {
        mapClear();
        map12.style.color = ('#82DE00');
        iframe.src='https://yandex.ru/map-widget/v1/?um=constructor%3Ad87e7ca7d726066588cf1bdcb3401f895820fd01d0b3d90883c8edb92e58799e&amp;source=constructor" width="100%" height="300" frameborder="0"'
    }

    // Popup

    let popup = document.getElementById('popup');

    function onDeletePopup(){
        popup.style.display = ('none');
    };

    function onAppear() {
        popup.style.display = ('flex');
    }

    $(document).ready(function(){
        $('.burger-mob').click(function(){
            $('.main-menu').slideToggle();
            $(this).toggleClass('active');
        });
        $('.menu__item').click(function(){
            $('.main-menu').fadeOut();
            $('.burger-mob').removeClass('active');
        });
        //плавная прокрутка якорных ссылок
        $(document).on('click', '.down', function (event) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({scrollTop: target.offset().top - 20}, 1000);
                    event.preventDefault();
                }
            }
        });

        //отправка заявки
        $(document).on("submit", '.form', function () {
            var form = $(this);
            $.post('/mail.php', form.serializeArray(), function (data) {
                if (data) {
                    console.log(data);
                        $('.form-result').fadeIn();
                        form.hide();
                        form.prev('.popup__title').hide();
                    form.trigger('reset');

                }
            });
            return false;
        });

    });
    
    
    
    