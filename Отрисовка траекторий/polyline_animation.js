
let v=Number(prompt('Введите номер постамата'));
ymaps.ready(['AnimatedLine']).then(init);

function init(ymaps) {
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
        center: [56.130703, 35.822918],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    });

    //var v = 2
    var t_A = new ymaps.Placemark([56.130442, 35.823156], {
        balloonContent: '<strong>Склад в библиотеке</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
    });
    myMap.geoObjects.add(t_A);

    if (v === 1) {
    //Постамат 1
    var firstAnimatedLine = new ymaps.AnimatedLine([
        [56.130442, 35.823156],
        [56.12904032, 35.8316],
        [56.1284,  35.8316],
        [56.1284, 35.8329],
        [56.128824, 35.8329],
        [56.128625, 35.834102] 
    ], {}, {
        // Задаем цвет.
        strokeColor: "#ED4543",
        // Задаем ширину линии.
        strokeWidth: 5,
        // Задаем длительность анимации.
        animationTime: 4000
    });
    var firstPoint = new ymaps.Placemark([56.128625, 35.834102], {}, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    }); } else {
        if(v === 2) {             

    //Постамат 2
    var firstAnimatedLine = new ymaps.AnimatedLine([
        [56.130442, 35.823156],
        [56.1330647, 35.8271],
        [56.1330647,  35.8286568],
        [56.1341, 35.8286568],
        [56.135325, 35.830499]
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 4000
    });
    var firstPoint = new ymaps.Placemark([56.135325, 35.830499], {}, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });} else {
        
        if (v === 3) {

    //Постамат 3
    var firstAnimatedLine = new ymaps.AnimatedLine([
        [56.130442, 35.823156],
        [56.128423, 35.820646] 
    ], {}, {
        // Задаем цвет.
        strokeColor: "#ED4543",
        // Задаем ширину линии.
        strokeWidth: 5,
        // Задаем длительность анимации.
        animationTime: 4000
    });
    var firstPoint = new ymaps.Placemark([56.128423, 35.820646], {}, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });} else {

    //для постмата 4
    var firstAnimatedLine = new ymaps.AnimatedLine([
        [56.130442, 35.823156],
        [56.011474, 36.220441] 
    ], {}, {
        // Задаем цвет.
        strokeColor: "#ED4543",
        // Задаем ширину линии.
        strokeWidth: 5,
        // Задаем длительность анимации.
        animationTime: 4000
    });
    var firstPoint = new ymaps.Placemark([56.011474, 36.220441], {}, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });}}}


    //Добавляем линии на карту.
    //myMap.geoObjects.add(firstAnimatedLine);
    // Создаем метки.

    // var thirdPoint = new ymaps.Placemark([56.011474, 36.220441], {}, {
    //     preset: 'islands#blackZooIcon'
    // });
    // Функция анимации пути.

    myMap.geoObjects.add(firstAnimatedLine);
    function playAnimation() {
        // // Убираем вторую линию.
        // secondAnimatedLine.reset();
        // // Добавляем первую метку на карту.
        myMap.geoObjects.add(firstPoint);
        // Анимируем первую линию.
        firstAnimatedLine.animate()
            // После окончания анимации первой линии добавляем вторую метку на карту и анимируем вторую линию.
            .then(function() {
                //myMap.geoObjects.add(secondPoint);
                return secondAnimatedLine.animate();
            })
            .then(function() {
            //     // Добавляем паузу после анимации.
                return ymaps.vow.delay(null, 2000);
            })

            // После паузы перезапускаем анимацию.
            .then(function() {
                // Удаляем метки с карты.
                // myMap.geoObjects.remove(firstPoint);
                // myMap.geoObjects.remove(secondPoint);
                // myMap.geoObjects.remove(thirdPoint);
                // Убираем вторую линию.
                secondAnimatedLine.reset();
                // Перезапускаем анимацию.
                playAnimation();
            });
    }
    // Запускаем анимацию пути.
    playAnimation();
}