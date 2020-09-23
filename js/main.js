$(function () {
  const circle = $('.Spin-Circle');
  const modal = $('.Modal');
  const prize = $('.Modal-Prize');
  const spinner = $('.Spin-Spinner');
  const link = $('.Modal-Link');
  const confetti = $('.Modal-Confetti');
  const results = ['1250$ Bonus', '25 Spins', '100$ Bonus', '155 Spins'];
  const perfecthalf = ((1 / 37) * 360) / 2;
  let currentLength = perfecthalf;
  let result;

  $(document).on('click', function(event) {
    if ($(event.target).closest($('.Modal-Content')).length) return;
    $(document.body).css('overflow', '');
    modal.fadeOut();
    event.stopPropagation();
  });

  link.on('mouseover', () => { confetti.show(); });
  link.on('mouseout', () => { confetti.hide(); });

  spinner.on('click', function () {
    const spininterval = getRandomInt(0, 37) * (360 / 37) + getRandomInt(3, 4) * 360;
    currentLength += spininterval;
    spinner.addClass('Spin-Spinner--active');
    circle.css('transform', `rotate(${currentLength}deg)`);
  });

  circle.on('transitionend', () => {
    const angle = currentLength % 360;
    console.log(angle);
    if (angle >= 45 && angle <= 135) result = results[1];
    else if (angle > 135 && angle < 225) result = results[2];
    else if (angle >= 225 && angle < 314) result = results[3];
    else result = results[0];
    prize.text(result);
    spinner.removeClass('Spin-Spinner--active');

    setTimeout(() => {
      $(document.body).css('overflow', 'hidden');
      modal.fadeIn();
    }, 1000);
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});
