$(document).ready(function () {
    var $menu = $('menu')
    var $btn = $('.close-btn')
    var $link = $('.menu-link')
    var $links = $('menu ul li a')

    $links.click(function (e) {
        e.preventDefault();

        $links.removeClass("active");

        $(this).addClass("active");

        var $attr = $(this).attr("href");

        var $top = $($attr).offset().top;

        $("html, body").animate(
            {
                scrollTop: $top,
            },
            700
        );
    });


    $link.click(function () {
        $menu.css(
            {
                transform: 'translateX(0%)',
                transition: '0.8s'
            }
        )
    })

    $btn.click(function () {
        $menu.css(
            {
                transform: 'translateX(-100%)',
                transition: '0.8s'
            }
        )
    })
    var $attr = $(this).attr("href");
    var $top = $($attr).offset()

    $("html, body").animate(
        {
            scrollTop: $top,
        },
        700
    );
    $links.click(function () {

        $(window).scroll(function (e) {
            var $top = $(this).scrollTop();

            $links.each(function () {
                var $attr = $(this).attr("href");
                var $h2Top = $($attr).offset().top - 110;

                if ($h2Top <= $top) {
                    $links.removeClass("active");
                    $(this).addClass("active");
                }
                $menu.css(
                    {
                        transform: 'translateX(-100%)',
                        transition: '0.8s'
                    }
                )
            });
        });
    })


})
