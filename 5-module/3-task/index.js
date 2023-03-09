function initCarousel() {
  let position = 0;
  const container = document.querySelector('.container');
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselSlide = document.querySelectorAll('.carousel__slide');
  const carouselSlideWidth = carouselInner.offsetWidth;
  const containerWidth = container.offsetWidth;
  const carouselInnerWidth = carouselSlide.length * carouselSlideWidth - containerWidth;

  const btnPrev = document.querySelector('.carousel__arrow_left');
  const btnNext = document.querySelector('.carousel__arrow_right');
  
btnPrev.onclick = function() {
    position += carouselSlideWidth;

    if (position > 0) {
      position = 0;
    }
    carouselInner.style.transform = `translateX(${position}px)`;
    btns();
  };

  btnNext.onclick = function() {
    position -= carouselSlideWidth;

    if (position < -carouselInnerWidth) {
      position = -carouselInnerWidth;
    }
    carouselInner.style.transform = `translateX(${position}px)`;
    btns();
  };
  const btns = () => {
    if (position == 0) {
      btnPrev.style.display = 'none';
    } else {
      btnPrev.style.display = '';
    }
    if (position == -carouselInnerWidth) {
      btnNext.style.display = 'none';
    } else {
      btnNext.style.display = '';
    }
  };
  btns();
}
