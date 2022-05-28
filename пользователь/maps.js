// ymaps.ready(init);
// var my_Map, myRectangle, myRectangle_2;

// function init () {
//     my_Map = new ymaps.Map('map', {
//         center: [56.0768,35.9924],
//         zoom: 11
//     }, {
//         searchControlProvider: 'yandex#search'
//     });

//     var t_A = new ymaps.Placemark([56.130442, 35.823156], {
//         balloonContent: '<strong>Склад в библиотеке</strong>'
//     }, {
//         preset: 'islands#icon',
//         iconColor: '#0095b6'
//     });

//     var t_B = new ymaps.Placemark([56.128625, 35.834102], {
//         balloonContent: '<strong>Постамат 1, Магнит </strong>'
//     }, {
//         preset: 'islands#icon',
//         iconColor: '#FF1493'
//     });

//     var t_C = new ymaps.Placemark([56.135325, 35.830499], {
//         balloonContent: '<strong>Постамат 2 школа</strong>'
//     }, {
//         preset: 'islands#icon',
//         iconColor: '#FF1493'
//     });

//     var  t_D = new ymaps.Placemark([56.128423, 35.820646], {
//         balloonContent: '<strong>Постамат 3 магазин</strong>'
//     }, {
//         preset: 'islands#icon',
//         iconColor: '#FF1493'
//     });

//     //соседнее село, большой радиус 
//     var  t_E = new ymaps.Placemark([56.011474, 36.220441], {
//         balloonContent: '<strong>Постамат 4 школа соседнее село</strong>'
//     }, {
//         preset: 'islands#icon',
//         iconColor: '#FF1493'
//     });
    
//     my_Map.geoObjects
//         .add(t_A)
//         .add(t_B)
//         .add(t_C)
//         .add(t_D)
//         .add(t_E);
// }