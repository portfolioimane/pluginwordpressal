const sliderView=document.querySelector('.ac-slider--view > ul'),
  sliderViewSlides=document.querySelectorAll('.ac-slider--view__slides'),
  arrowLeft=document.querySelector('.ac-slider--arrows__left'),
  arrowRight=document.querySelector('.ac-slider--arrows__right'),
  sliderLength=sliderViewSlides.length;
  
  const sliderMe=(sliderViewItems, isActiveItem, currentItem) => {
      isActiveItem.classList.remove('is-active');
      sliderViewItems.classList.add('is-active');
      sliderView.setAttribute('style', 'transform:translate(-'+ sliderViewItems.offsetLeft +
       'px)');
  }
const beforeSliding= i => {
    let isActiveItem=document.querySelector('.ac-slider--view__slides.is-active'),
        currentItem=Array.from(sliderViewSlides).indexOf(isActiveItem) + i,
        nextItem=currentItem + i,
        sliderViewItems=document.querySelector(`.ac-slider--view__slides:nth-child(${nextItem})`);
        if(nextItem > sliderLength){
            sliderViewItems=document.querySelector('.ac-slider--view__slides:nth-child(1)');
        }
        if(nextItem === 0){
            sliderViewItems=document.querySelector(`.ac-slider--view__slides:nth-child(
                ${sliderLength})`);
        }
        sliderMe(sliderViewItems, isActiveItem, currentItem);
}

arrowRight.addEventListener('click', () => beforeSliding(1));
arrowLeft.addEventListener('click', () => beforeSliding(0));
