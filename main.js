window.onload = function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 14,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // обратный отсчет
    // Установить нужную дату
    let countDownDate = new Date("Sep 5, 2020 15:37:25").getTime();

    // обновление каждую секунду
    let x = setInterval(function() {

        // текущее время
        let now = new Date().getTime();

        // посчитать разницу между сегодняшним и нужным временем
        let distance = countDownDate - now;


        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.querySelector(".countdown").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";
        console.log(seconds)

        // если закончился нужный период
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown").innerHTML = "EXPIRED";
        }
    }, 1000);


    //подсказки на полях формы

    let tip = document.createElement('div');
    document.querySelectorAll('[data-tip]').forEach(element => {
        element.onfocus = function() {
            coords = this.getBoundingClientRect();
            tip.style.cssText = `display: flex; width: ${coords.width}px; position: absolute; right: 0; top: 0; transform: translateY(-100%); height: 1.2em; background: gray; align-self: center; border-radius: 0.5em; align-self: center; color: white; font-size: 1em; transition: all 1s ease;`;
            tip.style.top = coords.y + window.scrollY + 'px';
            tip.style.left = coords.left + 'px'
            tip.innerHTML = event.target.dataset.tip;
            document.body.querySelector('form').after(tip);

        }
        element.onblur = function() {
            tip.remove()
        }
    })

}