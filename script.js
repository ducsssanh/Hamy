"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
var imageList = ["cat-2.jpg", "cat-3.jpg", "cat-4.jpg","cat-8.jpg","cat-9.jpg","cat-13.jpg","cat-12.jpg","cat-20.jpg","cat-18.jpg"];
var imageList2 = ["cat-6.jpg", "cat-7.jpg", "cat-10.jpg","cat-11.jpg","cat-14.jpg", "cat-16.jpg","cat-17.jpg","cat-19.jpg"];
var currentIndex = 0;
var currentIndex1 = 0;
const MAX_IMAGES = 5;
var intervalId; 
let play = true;
let noCount = 0;


yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
  
if (imageIndex == 1 || imageIndex == 0) {
    changeImage(imageIndex);
}
if (imageIndex == 2) {
    changeImage2();
    intervalId = setInterval(changeImage2, 1000); 
}
if (imageIndex == 3) {
    if (intervalId) { 
        clearInterval(intervalId); 
    }
    changeImage3();
    intervalId = setInterval(changeImage3, 1000); 
}
if (imageIndex == 4) {
  if (intervalId) { 
      clearInterval(intervalId); 
  }
  changeImage(21);
}
  if (imageIndex == 5) {
    changeImage(5);
  }
    resizeYesButton();
    updateText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Chào emmmm, lời đầu tiên thì cho anh xin lũi =)). Thực sự thì xa nhau thế này làm anh bị giới hạn ý tưởng wa -.-, thế xong anh chợt nghĩ hay học làm web nhể, và cái web đầu tiên thì chắc chắn dành cho em gòi ><, nhưng anh không làm chủ được html, jvsc, css và cả đống thứ khác trong thời gian ngắn vậy được nên em xem tạm cái web cùi cùi này nhé :< rồi không xa sẽ có một cái web ngon hơn nhiều (thua em) dành cho emm.<br><br>Tất nhiên là, cái web này lập ra để gửi lời chúc đến em. Anh muốn những lời mùi mẫn sẽ từ thư tay, nên anh sẽ cố không nói quá nhiều ở chỗ này :(( Anh chỉ muốn gửi tới em lời cảm ơn, cảm ơn vì đã đồng ý, đã quyết định tin tưởng anh hiện tại và sau này. Với anh, đây vẫn là một phép màu nhiệm (khó tin nữa), là một trong những may mắn ít ỏi của cuộc đời anh. Anh yêu và trân trọng em rất nhiều, Hà My.<br><br>Hôm nay, ngoài năm mới, cũng đã đánh dấu em bước sang một chương mới trong cuộc đời mình, cùng đó là rất nhiều áp lực và những trăn trở, tuy nhiên, anh muốn em biết là anh sẽ luôn bên cạnh em, sẵn sàng cùng em với tất cả khó khăn đó. Cả hai chúng ta đều nhiều thiếu sót, nhưng anh và em đều đang nỗ lực để yêu người kia, kể cả với những khiếm khuyết. Anh tin sẽ có ngày bọn mình hoàn thiện, đó là những gì mà anh trân quý.<br><br>Chúc em và gia đình một năm mới thật hạnh phúc, nhiều sức khỏe, may mắn, em xinh ngo(l)an yêu sẵn rùi nên anh không nói nữa, ngoài ra, nhất định em sẽ thực hiện được những ấp ủ của mình, mong cuộc đời sẽ nhẹ nhàng hơn với em (còn anh lúc nào cũng dịu rùi hyhy), mong cho năm tới, anh vẫn có thể cặm cụi để làm một cái web xịn hơn cho embe của anh. Anh sẽ ở cạnh em cả trong những lúc tưởng như tuyệt vọng nhất.<br><br>-------------------anh của em-------------------";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Hông",
    "Thật hãaaaa?, iu anh ik nếu không Ngộ vàng sẽ buồn lắm :(",
    "Anh chiều em màa, có rất nhiều thứ ta có thể làm với nhau =))))",
    "Và làm động lực của nhau kể cả khi hai đứa nhiều vấn đề ._.",
    "Đừng mà...",
    "Thôi đến đây thôi, ngắm đóa hoa đầu tiên của bọn mình nèee :3, bấm dạ đi (vì không bấm hông được đâu :D)",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `cat-${image}.jpg`;
}
function changeImage2() {
    catImg.src = imageList[currentIndex];
    catImg.classList.remove('hidden');
    currentIndex++;
    if (currentIndex > imageList.length-1) {
        currentIndex = 0;
    }
}
function changeImage3() {
  catImg.src = imageList2[currentIndex1];
  currentIndex1++;
  if (currentIndex1 > imageList2.length-1) {
      currentIndex1 = 0;
  }
}

function updateText() {
  titleElement.innerHTML = generateMessage(noCount);
}
