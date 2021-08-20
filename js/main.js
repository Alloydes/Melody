$(document).ready(function () {
  var currentFloor;
  var floorPath = $(".home-image path"); // этаж в SVG
  var counterUp = $(".counter-up"); // кнопка вверх
  var counterDown = $(".counter-down"); // кнопка вниз
  var modal = $('.modal');
  var modalCloseButton = $('.modal-close-button');
  var viewFlatsButton = $('.view-flats');

  // управление мышью
  $(".home-image path").on('mouseover', function () {
    floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor');
    $(".counter").text(currentFloor);
  });

  floorPath.on('click', toggleModal); 
  /* вкл/выкл окна квартиры */
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  // стрелка вверх
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++; 
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем нужный этаж
    }
  })
  
  // стрелка вниз
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--; 
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })

  function toggleModal() {   // функция открыть/закрыть
    modal.toggleClass("is-open");
  }

});