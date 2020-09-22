$(function () {
  const circle = $('.Spin-Circle');
  const modal = $('.Modal');
  const prize = $('.Modal-Prize');
  const results = ['1250$ Bonus', '25 Spins', '100$ Bonus', '155 Spins'];
  let timer, result;

  circle.addClass('anime').css('animationPlayState', 'paused');

  $(document).on('click', function(event) {
    if ($(event.target).closest($('.Modal-Content')).length) return;
    circle.css('transform', 'initial');
    $(document.body).css('overflow', '');
    modal.fadeOut();
    event.stopPropagation();
  });

  $('.Spin-Spinner').on('click', function () {
    const rTime = Math.floor(Math.random() * 5001) + 1000;
    console.log(rTime);
    if (circle.css('animationPlayState') === 'paused') {
      circle.css('animationPlayState', 'running');
      timer = setTimeout(function () {
        circle.css('animationPlayState', 'paused');
        const angle = getRotationDegree(circle);

        if (angle >= 45 && angle <= 135) result = results[1];
        else if (angle > 135 && angle < 225) result = results[2];
        else if (angle >= 225 && angle < 314) result = results[3];
        else result = results[0];

        prize.text(result);
        setTimeout(() => {
          $(document.body).css('overflow', 'hidden');
          modal.fadeIn();
        }, 1000);
      }, rTime);
    }
  });

  function getRotationDegree(elem) {
    const matrix = elem.css('transform');
    let angle;

    if (matrix !== 'none') {
      const values = matrix.split('(')[1].split(')')[0].split(',');
      const a = values[0];
      const b = values[1];
      angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else angle = 0;

    if (angle < 0) angle += 360;

    return angle;
  }
});
