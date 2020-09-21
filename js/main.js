$(function () {
  const circle = $('.Spin-Circle');
  let timer;

  circle.addClass('anime').css('animationPlayState', 'paused');

  $('.Spin-Spinner').on('click', function () {
    const rTime = Math.floor(Math.random() * 5001) + 1000;
    if (circle.css('animationPlayState') === 'paused') {
      circle.css('animationPlayState', 'running');
      // timer = setTimeout(function () {
      //   circle.css('animationPlayState', 'paused');
      //
      //   var findDivOne = document.getElementById( 'one' ),
      //     findDivTwo = document.getElementById( 'two' ),
      //     findDivThree = document.getElementById( 'three' ),
      //     findDivFour = document.getElementById( 'four' );
      //
      //   function getOffsetRect(elem) {
      //     // (1)
      //     var box = elem.getBoundingClientRect()
      //
      //     // (2)
      //     var body = document.body;
      //     var docElem = document.documentElement;
      //
      //     // (3)
      //     var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
      //     var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
      //
      //     // (4)
      //     var clientTop = docElem.clientTop || body.clientTop || 0;
      //     var clientLeft = docElem.clientLeft || body.clientLeft || 0;
      //
      //     // (5)
      //     var top  = box.top +  scrollTop - clientTop;
      //     var left = box.left + scrollLeft - clientLeft;
      //
      //     return { top: Math.round(top), left: Math.round(left) }
      //   };
      //
      //   var resultDivOne = getOffsetRect(findDivOne).top,
      //     resultDivTwo = getOffsetRect(findDivTwo).top,
      //     resultDivThree = getOffsetRect(findDivThree).top,
      //     resultDivFour = getOffsetRect(findDivFour).top;
      //
      //   document.getElementById( 'result' ).innerHTML = '1: '+resultDivOne+'|| 2: '+resultDivTwo+'|| 3: '+resultDivThree+'|| 4: '+resultDivFour;
      //   if (resultDivOne <= 99 & resultDivOne >= 40) {
      //     document.getElementById( 'result' ).innerHTML = 'Зелёный';
      //   }
      //   if (resultDivTwo <= 99 & resultDivTwo >= 40) {
      //     document.getElementById( 'result' ).innerHTML = 'Синий';
      //   }
      //   if (resultDivThree <= 99 & resultDivThree >= 40) {
      //     document.getElementById( 'result' ).innerHTML = 'Красный';
      //   }
      //   if (resultDivFour <= 99 & resultDivFour >= 40) {
      //     document.getElementById( 'result' ).innerHTML = 'Желтый';
      //   }
      //
      //   if ((resultDivOne === 100 & resultDivTwo === 100) || (resultDivTwo === 100 & resultDivFour) || (resultDivThree === 100 & resultDivOne) || (resultDivFour === 100 & resultDivThree) || (resultDivFour === 100 & resultDivTwo === 100)) {
      //     document.getElementById( 'result' ).innerHTML = 'Ничья :D';
      //   }
      // }, rTime);
    } else circle.css('animationPlayState', 'paused');
  });
});
