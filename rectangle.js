ymaps.ready(init);
var myMap, myRectangle, myRectangle_2;

function init () {
    myMap = new ymaps.Map('map', {
        center: [56.130703, 35.822918],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    });

    var myPolygon_1 = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [56.1343,35.8254],
            [56.1345,35.8279],
            [56.1332,35.8284],
            [56.1326,35.8261]
        ],
        // Координаты вершин внутреннего контура.
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Многоугольник"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#01FFB6C1',
        // Ширина обводки.
        strokeWidth: 2
    });
    console.log(myPolygon_1.geometry.get(2));
    

    var myPolygon_2 = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        // Координаты вершин внешнего контура.
        [
            [56.1300,35.8317], 
            [56.1285,35.8317], 
            [56.1285,35.8328],
            [56.1300,35.8328]
        ],
        // Координаты вершин внутреннего контура.
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "Многоугольник"
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF0088',
        // Ширина обводки.
        strokeWidth: 1
    });
    console.log(myPolygon_2.geometry.getCoordinates());

    // Добавляем многоугольник на карту.


    var t_A = new ymaps.Placemark([56.130442, 35.823156], {
        balloonContent: '<strong>Склад в библиотеке</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
    });

    var t_B = new ymaps.Placemark([56.128625, 35.834102], {
        balloonContent: '<strong>Постамат 1, Магнит </strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });

    var t_C = new ymaps.Placemark([56.135325, 35.830499], {
        balloonContent: '<strong>Постамат 2 школа</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });

    var  t_D = new ymaps.Placemark([56.128423, 35.820646], {
        balloonContent: '<strong>Постамат 3 магазин</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });

//соседнее село, большой радиус 
    var  t_E = new ymaps.Placemark([56.011474, 36.220441], {
        balloonContent: '<strong>Постамат 3 школа соседнее село</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#FF1493'
    });



//до постамата 1
    var lineStringGeometry_1 = new ymaps.geometry.LineString([
        // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.128625, 35.834102]
    ])
    var geoObject_1 = new ymaps.GeoObject({ geometry: lineStringGeometry_1 });
    myMap.geoObjects.add(geoObject_1);
    // Длина всей линии.
    console.log(geoObject_1.geometry.getDistance());

//до постамата 2
    var lineStringGeometry_2 = new ymaps.geometry.LineString([
            // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.135325, 35.830499]
    ])
    var geoObject_2 = new ymaps.GeoObject({ geometry: lineStringGeometry_2 });
    myMap.geoObjects.add(geoObject_2);
    // Длина всей линии.
    console.log(geoObject_2.geometry.getDistance());
    console.log(geoObject_2.geometry.getLength());

//до постамата 3
    var lineStringGeometry_3 = new ymaps.geometry.LineString([
        // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.128423, 35.820646]
    ])
    var geoObject_3 = new ymaps.GeoObject({ geometry: lineStringGeometry_3 });
    myMap.geoObjects.add(geoObject_3);
    // Длина всей линии.
    console.log(geoObject_3.geometry.getDistance());

// до постамата 4
    var lineStringGeometry_4 = new ymaps.geometry.LineString([
        // Указываем координаты вершин ломаной.
        [56.130442, 35.823156],
        [56.011474, 36.220441]
    ])
    var geoObject_4 = new ymaps.GeoObject({ geometry: lineStringGeometry_4 });
    myMap.geoObjects.add(geoObject_4);
    // Длина всей линии.
    console.log(geoObject_4.geometry.getDistance());


    //точки и отображение точек и зон
    myMap.geoObjects
        //.add(myRectangle)
        //.add(myRectangle_2)
        //.add(myPolyline_1)
        //.add(myPolyline_2)
        //.add(myPolyline_3)
        .add(myPolygon_1)
        .add(myPolygon_2)
        .add(t_A)
        .add(t_B)
        .add(t_C)
        .add(t_D)
        .add(t_E);

    
    var mas = geoObject_4.geometry.getCoordinates()
    //k = (mas[-1][0]-mas[-1][-1]) / (mas[0][0] - mas[0][-1]) 
    console.log(mas[1][0]);
}


