let conDiv1 = document.querySelector('.con-div-1'),
conDiv2 = document.querySelector('.con-div-2'),
imgMain = document.querySelector('.img-main');

setInterval(() => {
	if (window.innerWidth < '576') {
		conDiv1.className = 'con-div-1 col-sm-6 order-2';
		conDiv2.className = 'con-div-2 col-sm-6 order-1';
		imgMain.setAttribute('src', './assets/image-hero-mobile.png');
	} else if (window.innerWidth > '576') {
		conDiv1.className = 'con-div-1 col-sm-6 order-1';
		conDiv2.className = 'con-div-2 col-sm-6 order-2';
		imgMain.setAttribute('src', './assets/image-hero-desktop.png');
	}
}, 1)