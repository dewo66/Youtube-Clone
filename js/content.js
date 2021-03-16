function kartEkle(image, baslik, bilgi, i) {
	var card = `
    <div class="card Flex1">
			<div class="cardImage"><img
					src="${image}"></img>
			</div>
			<div class="cardIcerik">
				<div class="cardIcon"><i class="fas fa-photo-video"></i></div>
				<div class="cardText">
					<div class="kartBasligi">${i}.${baslik}</div>
					<div class="kartBilgileri">${i}.${bilgi}</div>
				</div>
			</div>
		</div>
    `
	$(".content").append(card);
};

// kart içeriklerinin oluşturulduğu yer
document.addEventListener("DOMContentLoaded", function () {

	var image = "https://picsum.photos/200/300?random=";
	var baslik = "Kart Basliği Bölümü";
	var bilgi = "Kart Bilgileri Bölümü";

	for (var i = 0; i < 34; i++) {
		image += i
		kartEkle(image, baslik, bilgi, i)
		image = "https://picsum.photos/200/300?random=";
	}
});








