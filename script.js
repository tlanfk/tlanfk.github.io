// 페이지 설정 데이터
const pages = {
    'index': {
        image: 'image/1.png',
        elements: [
            { type: 'link', x: 125, y: 200, width: 90, height: 35, link: 'index' }, // 기본
            { type: 'link', x: 280, y: 200, width: 90, height: 35, link: 'page2' }, // 고급
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' }, // 그래픽
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' }, // 오디오
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' }, // 컨트롤
			
            { type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' } // 키 설정
        ]
    },
    'page2': {
        image: 'image/2.png',
        elements: [
			{ type: 'text', x: 790, y: 200, text: "렌더링 크기: 100.000000", width: 240, height: 40 },
            { type: 'link', x: 125, y: 200, width: 90, height: 35, link: 'index' },
            { type: 'text', x: 830, y: 335, text: "중간", width: 120, height: 40 },
            { type: 'text', x: 830, y: 490, text: "낮음", width: 120, height: 40 },
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
			{ type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' } // 키 설정
        ]
    },
    'page3': {
        image: 'image/3.png',
        elements: [
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
			{ type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' } // 키 설정
        ]
    },
    'page4': {
        image: 'image/4.png',
        elements: [
            { type: 'text', x: 1055, y: 310, text: "32", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 365, text: "1.2", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 415, text: "22", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 470, text: "35", width: 40, height: 40 },
			
        //    { type: 'text', x: 1055, y: 530, text: "50", width: 60, height: 40 },
			
            { type: 'text', x: 1055, y: 620, text: "27", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 670, text: "27", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 730, text: "27", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 780, text: "27", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 830, text: "27", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 880, text: "27", width: 40, height: 40 },
			
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
			{ type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' }, // 키 설정
			
			{ type: 'link', x: 120, y: 200, width: 90, height: 35, link: 'page4' }, // 컨트롤-마우스 감도
            { type: 'link', x: 270, y: 200, width: 90, height: 35, link: 'page5' } // 컨트롤-키 입력방식
        ]
    },
	
    'page5': {
        image: 'image/5.png',
        elements: [
			{ type: 'text', x: 830, y: 290, text: "유지", width: 120, height: 40 },
			{ type: 'text', x: 830, y: 343, text: "유지", width: 120, height: 40 },
			
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
			{ type: 'link', x: 120, y: 200, width: 90, height: 35, link: 'page4' }, // 컨트롤-마우스 감도
			{ type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' } // 키 설정
        ]
    },
	
    'page6': {
        images: ['image/key1.png', 'image/key2.png', 'image/key3.png', 'image/key4.png'],
        elements: [
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
			{ type: 'link', x: 120, y: 200, width: 90, height: 35, link: 'page6' }, // 일반
			{ type: 'link', x: 270, y: 200, width: 90, height: 35, link: 'page7' }, // 전투
			{ type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' } // 키 설정
        ]
    },
	
    'page7': {
        images: ['image/key5.png', 'image/key6.png', 'image/key7.png', 'image/key8.png'],
        elements: [
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
			{ type: 'link', x: 120, y: 200, width: 90, height: 35, link: 'page6' }, // 일반
			{ type: 'link', x: 280, y: 200, width: 90, height: 35, link: 'page7' }, // 전투
			{ type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' } // 키 설정
        ]
    }
};

let currentPage = 'index';
let currentScrollIndex = 0;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // 이미지 캐시를 위한 객체
    const imageCache = {};

    // 이미지 프리로딩 및 프로그레스 표시를 위한 함수
    async function preloadImages(callback) {
        const imagePaths = new Set();
        Object.values(pages).forEach(page => {
            if (page.image) {
                imagePaths.add(page.image);
            }
            if (page.images) {
                page.images.forEach(image => imagePaths.add(image));
            }
        });

        const totalImages = imagePaths.size;
        let loadedImages = 0;

        const loadImage = (src) => new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                imageCache[src] = img;
                loadedImages++;
                callback(loadedImages / totalImages);
                resolve(img);
            };
            img.onerror = reject;
            img.src = src;
        });

        await Promise.all(Array.from(imagePaths).map(src => {
            if (!imageCache[src]) {
                return loadImage(src);
            }
        }));
    }

    function showLoadingProgress(progress) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Loading... ${Math.round(progress * 100)}%`, canvas.width / 2, canvas.height / 2);
    }

    async function renderPage(pageName) {
        const page = pages[pageName];
        let img;

        if ((pageName === 'page6' || pageName === 'page7') && page.images) {
            img = imageCache[page.images[currentScrollIndex]];
        } else {
            img = imageCache[page.image];
        }

        if (!img) {
            console.error('Image not found in cache:', page.image);
            return;
        }

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        page.elements.forEach(element => {
            if (element.type === 'link') {
                ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
                ctx.fillRect(element.x, element.y, element.width, element.height);
            } else if (element.type === 'text') {
                ctx.fillStyle = 'rgba(68, 68, 68, 1.0)';
                ctx.fillRect(element.x, element.y, element.width, element.height);

                ctx.fillStyle = 'white';
                ctx.font = '20px Arial';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                const textX = element.x + element.width / 2;
                const textY = element.y + element.height / 2;
                ctx.fillText(element.text, textX, textY);
            }
        });
    }

	canvas.addEventListener('click', (event) => {
		const rect = canvas.getBoundingClientRect();
		const scaleX = canvas.width / rect.width;
		const scaleY = canvas.height / rect.height;
		
		const x = (event.clientX - rect.left) * scaleX;
		const y = (event.clientY - rect.top) * scaleY;

		const page = pages[currentPage];
		page.elements.forEach(element => {
			if (element.type === 'link' &&
				x >= element.x && x <= element.x + element.width &&
				y >= element.y && y <= element.y + element.height) {
				currentPage = element.link;
				currentScrollIndex = 0; // Reset scroll index when changing pages
				renderPage(currentPage);
			}
		});
	});

	// 스크롤 이벤트 처리
	canvas.addEventListener('wheel', (event) => {
		if (currentPage === 'page6' || currentPage === 'page7') {
			event.preventDefault();
			if (event.deltaY > 0 && currentScrollIndex < pages[currentPage].images.length - 1) {
				currentScrollIndex++;
			} else if (event.deltaY < 0 && currentScrollIndex > 0) {
				currentScrollIndex--;
			}
			renderPage(currentPage);
		}
	});


	// 윈도우 리사이즈 이벤트 처리
	window.addEventListener('resize', () => {
		renderPage(currentPage);
	});

    // 이미지를 미리 로드하고 초기 페이지를 렌더링
    preloadImages(showLoadingProgress).then(() => {
        renderPage(currentPage);
    });
});
