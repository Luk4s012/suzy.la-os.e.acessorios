$ (document).ready(function() {
    $ ('#mobilebtn').click (function(){
        $ ('#mobilemenu').toggleClass ('active');
        $ ('#mobilebtn').find('i').toggleClass ('fa-x');
    });

    const sections = $('section');
    const navitens = $('.naviten');

    $(window).on('scroll', function () {
        const header = $('header');

        let activeSectionIndex = 0;

        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0){
            header.css('box-shadow', 'none')
        } else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }   

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })
        navitens.removeClass('active')
        $(navitens[activeSectionIndex]).addClass('active'); 
    });
    ScrollReveal().reveal('#cta',{
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.produto',{
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });
});