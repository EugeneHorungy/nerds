ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.93863506417266,30.323117499999945],
      zoom: 17
  }, {
      searchControlProvider: 'yandex#search'
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Дизайн-студия Нёрдс',
      balloonContent: 'Это красивая метка'
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/logo-img/marker.png',
      // Размеры метки.
      iconImageSize: [231, 190],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-50, -200]
  });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});
