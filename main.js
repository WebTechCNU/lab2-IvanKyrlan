// Масив об'єктів із зображеннями та описом
const images = [
	{
		src: './Photos/Photo-1.jpeg',
		alt: 'Товар 1',
		description: 'Тепла кофта чоловіча, базова'
	},

	{
		src: './Photos/Photo-2.jpeg',
		alt: 'Товар 2',
		description: 'Опис зображення 2'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 3',
		description: 'Опис зображення 3'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 3',
		description: 'Опис зображення 3'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 3',
		description: 'Опис зображення 3'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 3',
		description: 'Опис зображення 3'
	},

	{
		src: './Photos/Photo-3.jpeg',
		alt: 'Товар 3',
		description: 'Опис зображення 3'
	}
];

const imagesContainer = document.getElementById('images-container');
const showImagesBtn = document.getElementById('show-images-btn');

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

	imageCol.appendChild(img);
	imageCol.appendChild(description);
	imagesContainer.appendChild(imageCol);

	// Додамо обробник події на клік для опису
	description.addEventListener('click', function () {
		description.classList.toggle('d-none');
	});

	// Додамо обробник події на клік для зображення
	img.addEventListener('click', function () {
		description.classList.toggle('d-none');
	});
}

// Додамо обробник події на клік для кнопки
showImagesBtn.addEventListener('click', function () {
	// Приховуємо кнопку
	showImagesBtn.classList.add('d-none');

	// Додаємо кожне зображення до контейнеру
	images.forEach(function (image) {
		addImageToContainer(image);
	});
});
