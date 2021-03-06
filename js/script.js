var popupLink = document.querySelector(".btn-map");
var popupSend = document.querySelector(".popup-send");
var popupClose= document.querySelector(".popup-close");
var letterPopup = popupSend.querySelector("form");
var userName = letterPopup.querySelector("[name=user-name]");
var userEmail = letterPopup.querySelector("[name=user-email]");
var frameMap = document.querySelector("iframe");
var labelMap = document.querySelector(".map-label")

frameMap.addEventListener("mouseover", function(evt) {
	evt.preventDefault();
	labelMap.classList.add("map-label-hidden"); 
});

popupLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupSend.classList.add("popup-show");

	popupSend.classList.add("popup-open");

	if (!userName.value) {
		userName.focus();
	} else {
		userEmail.focus();
	}
});

popupClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupSend.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popupSend.classList.contains("popup-show")) {
			evt.preventDefault();
			popupSend.classList.remove("popup-show");
		}
	}
});