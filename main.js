const images = [
	{
		src: './Photos/Photo-1.jpeg',
		alt: 'Товар 1',
		description: 'Кофта чоловіча, базова',
		price: '390 UAH',
		classname: 'male'
	},

	{
		src: './Photos/Photo-2.jpeg',
		alt: 'Товар 2',
		description: 'Опис зображення 2',
		price: '490 UAH',
		classname: 'female'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 3',
		description: 'Опис зображення 3',
		price: '790 UAH',
		classname: 'male'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 4',
		description: 'Опис зображення 3',
		price: '690 UAH',
		classname: 'male'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 5',
		description: 'Опис зображення 3',
		price: '350 UAH',
		classname: 'female'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 6',
		description: 'Опис зображення 3',
		price: '990 UAH',
		classname: 'male'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 7',
		description: 'Опис зображення 3',
		price: '550 UAH',
		classname: 'male'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 7',
		description: 'Опис зображення 3',
		price: '1990 UAH',
		classname: 'female'
	}
];

const imagesContainer = document.getElementById('images-container');
const showImagesBtn = document.getElementById('show-images-btn');
const bannerImg = document.getElementById('banner-image');

// Функція для додавання зображення та опису до контейнеру
function addImageToContainer(image) {
	const imageCol = document.createElement('div');
	imageCol.classList.add('col-md-4', 'my-5');

	const img = document.createElement('img');
	img.src = image.src;
	img.alt = image.alt;
	img.classList.add('w-100');

	const description = document.createElement('p');
	description.textContent = image.description;
	description.classList.add('d-none');

	const price = document.createElement('p');
	price.textContent = image.price;

	const button = document.createElement('button');
	button.innerHTML = 'Купити';
	button.classList.add('btn');
	button.classList.add('btn-success');

	imageCol.appendChild(img);
	imageCol.appendChild(description);
	imageCol.appendChild(price);
	imageCol.appendChild(button);
	imagesContainer.appendChild(imageCol);

	// Обробник події на клік для опису
	description.addEventListener('click', function () {
		description.classList.toggle('d-none');
	});

	// Обробник події на клік для зображення
	img.addEventListener('click', function () {
		description.classList.toggle('d-none');
	});

	button.addEventListener('click', function () {
		alert('Товар успішно додано в кошик!');
	});


}

const filterButtons = document.getElementById('filter-btn');
const footer = document.getElementById('footer');

showImagesBtn.addEventListener('click', function () {
	showImagesBtn.classList.add('d-none');
	bannerImg.classList.add('d-none');
	footer.classList.remove('position-fixed');
	filterButtons.classList.remove('d-none');
	images.forEach(function (image) {
		addImageToContainer(image);
	});
});

// Вікно з підпискою
setTimeout(function () {
	// Перевірка, чи користувач вже підписаний на повідомлення
	if (localStorage.getItem('subscribed') !== 'true') {
		let subscribeModal = new bootstrap.Modal(document.getElementById('subscribeModal'));
		subscribeModal.show();
		document.getElementById('subscribeButton').addEventListener('click', function () {
			// Зберігаємо інформацію про підписку у локальному сховищі
			localStorage.setItem('subscribed', 'true');
			subscribeModal.hide();
			alert('Дякуємо за підписку!');
		});
	}
}, 10000);

let advertismentModal = new bootstrap.Modal(document.getElementById('advertismentModal'));
let closeButton = document.getElementById('closeButton');
let timerMessage = document.getElementById('timer-message')
let timerElement = document.getElementById('timer');
let seconds = 15;

// Вікно з рекламою
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
	let hasSeenAd = localStorage.getItem("hasSeenAd");

	if ((!hasSeenAd || hasSeenAd !== "true") && document.documentElement.scrollTop > 1300) {
		advertismentModal.show();
		localStorage.setItem("hasSeenAd", "true");

		let timer = setInterval(function () {
			seconds--;
			timerElement.innerText = seconds;
			if (seconds === 0) {
				clearInterval(timer);
				closeButton.removeAttribute("disabled");
				timerElement.classList.add("d-none");
				timerMessage.classList.add("d-none");
			}
		}, 1000);
	}
}

// Фільтри
document.querySelector('div.filter-btn').addEventListener('click', (event) => {
	if (event.target.tagName !== 'LI') return false;

	let filterClass = event.target.dataset['f'];

	let filterProducts = document.querySelectorAll('.box');

	Array.from(filterProducts).forEach(elem => {
		elem.classList.remove('hide');
		if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
			elem.classList.add('hide');
		}
	});
});
