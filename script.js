
const btn = document.getElementById('likeButton');
let CountButtonLikesClicks=0;

function likes(el) {
    CountButtonLikesClicks += 1;
    console.log(CountButtonLikesClicks);
      btn.textContent = 'likes ' + CountButtonLikesClicks;


}

