const controls = document.querySelector('.photo-card-controls');
const cardContainer = document.querySelector('.photo-card-container');
cardContainer.style.scrollBehavior = "smooth"
controls.addEventListener('click', makeNextOrPrev);

function makeNextOrPrev(event) {
    const actionType = event.target.dataset.action;

    if (actionType == 'next') {
        cardContainer.scrollLeft += 638;
        console.log(cardContainer.scrollLeft);
    } else if (actionType == 'prev') {
        cardContainer.scrollLeft -= 500;
    }
}

function hideOrShowControls(scrollValue) {
  if (scrollValue > 0) {
    // prev'a nishon te
  } else if (scrollValue <= maxValue) {
    // next'a bajo k
  }
}
