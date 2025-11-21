// 페이지 설정 데이터
const pages = {
    'index': {
        image: 'image/1.png',
        elements: [
            { type: 'link', x: 125, y: 200, width: 90, height: 35, link: 'index' },   // 기본
            { type: 'link', x: 280, y: 200, width: 90, height: 35, link: 'page2' },   // 고급
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },   // 그래픽
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },   // 오디오
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },   // 컨트롤
            { type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' },  // 키 설정
            { type: 'mapButton', x: 1700, y: 20, width: 200, height: 40, text: "맵 정보 프로그램 v1" }
        ]
    },
    'page2': {
        image: 'image/2.png',
        elements: [
            // 요청사항 반영: 100 -> 120으로 수정
            { type: 'text', x: 790, y: 200, text: "렌더링 크기 : 120.000000", width: 240, height: 40 },
            { type: 'link', x: 125, y: 200, width: 90, height: 35, link: 'index' },
            { type: 'text', x: 830, y: 335, text: "중간", width: 120, height: 40 },
            { type: 'text', x: 830, y: 490, text: "낮음", width: 120, height: 40 },
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
            { type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' }
        ]
    },
    'page3': {
        image: 'image/3.png',
        elements: [
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
            { type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' }
        ]
    },
    'page4': {
        image: 'image/4.png',
        elements: [
            { type: 'text', x: 1055, y: 310, text: "32", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 365, text: "1.2", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 415, text: "22", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 470, text: "35", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 620, text: "27", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 670, text: "27", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 730, text: "27", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 780, text: "27", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 830, text: "27", width: 40, height: 40 },
            { type: 'text', x: 1055, y: 880, text: "27", width: 40, height: 40 },
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
            { type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' },
            { type: 'link', x: 120, y: 200, width: 90, height: 35, link: 'page4' },
            { type: 'link', x: 270, y: 200, width: 90, height: 35, link: 'page5' }
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
            { type: 'link', x: 120, y: 200, width: 90, height: 35, link: 'page4' },
            { type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' }
        ]
    },
    'page6': {
        images: ['image/key1.png', 'image/key2.png', 'image/key3.png', 'image/key4.png'],
        elements: [
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
            { type: 'link', x: 120, y: 200, width: 90, height: 35, link: 'page6' },
            { type: 'link', x: 270, y: 200, width: 90, height: 35, link: 'page7' },
            { type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' }
        ]
    },
    'page7': {
        images: ['image/key5.png', 'image/key6.png', 'image/key7.png', 'image/key8.png'],
        elements: [
            { type: 'link', x: 678, y: 123, width: 90, height: 35, link: 'index' },
            { type: 'link', x: 783, y: 123, width: 90, height: 35, link: 'page3' },
            { type: 'link', x: 890, y: 123, width: 90, height: 35, link: 'page4' },
            { type: 'link', x: 120, y: 200, width: 90, height: 35, link: 'page6' },
            { type: 'link', x: 280, y: 200, width: 90, height: 35, link: 'page7' },
            { type: 'link', x: 1000, y: 123, width: 90, height: 35, link: 'page6' }
        ]
    }
};

let currentPage = 'index';
let currentScrollIndex = 0;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const imageCache = {};

// 오버레이 DOM
const mapOverlay = document.getElementById('mapOverlay');
const backBtn = document.getElementById('overlayBackBtn');

// 오버레이 닫기 이벤트
backBtn.addEventListener('click', () => {
    mapOverlay.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    function showLoadingProgress(progress) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Loading... ${Math.round(progress * 100)}%`, canvas.width / 2, canvas.height / 2);
    }

    async function preloadImages(callback) {
        const imagePaths = new Set();
        Object.values(pages).forEach(page => {
            if (page.image) imagePaths.add(page.image);
            if (page.images) page.images.forEach(img => imagePaths.add(img));
        });

        const totalImages = imagePaths.size;
        let loadedImages = 0;

        async function loadImage(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    imageCache[src] = img;
                    loadedImages++;
                    callback(loadedImages / totalImages);
                    resolve();
                };
                img.onerror = reject;
                img.src = src;
            });
        }

        await Promise.all(Array.from(imagePaths).map(src => {
            if (!imageCache[src]) return loadImage(src);
        }));
    }

    function renderPage(pageName) {
        const page = pages[pageName];
        let img = null;

        if ((pageName === 'page6' || pageName === 'page7') && page.images) {
            img = imageCache[page.images[currentScrollIndex]];
        } else {
            img = imageCache[page.image];
        }

        if (!img) return;

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        // 페이지 요소 렌더링
        page.elements.forEach(element => {
            if (element.type === 'link') {
                // 요청사항 반영: 빨간 네모박스(디버깅용) 렌더링 코드 삭제됨
                // 기능은 유지되지만 화면에는 보이지 않습니다.
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
            } else if (element.type === 'mapButton') {
                // 맵 정보 버튼 스타일
                ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                ctx.fillRect(element.x, element.y, element.width, element.height);

                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                ctx.strokeRect(element.x, element.y, element.width, element.height);

                ctx.fillStyle = 'white';
                ctx.font = '18px Arial';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                const textX = element.x + element.width / 2;
                const textY = element.y + element.height / 2;
                ctx.fillText(element.text, textX, textY);
            }
        });
    }

    function handleClick(event) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        const x = (event.clientX - rect.left) * scaleX;
        const y = (event.clientY - rect.top) * scaleY;

        const page = pages[currentPage];
        page.elements.forEach(element => {
            // 링크 클릭 처리
            if (element.type === 'link' &&
                x >= element.x && x <= element.x + element.width &&
                y >= element.y && y <= element.y + element.height) {
                currentPage = element.link;
                currentScrollIndex = 0;
                renderPage(currentPage);
            }

            // 맵 버튼 클릭 처리
            if (element.type === 'mapButton' &&
                x >= element.x && x <= element.x + element.width &&
                y >= element.y && y <= element.y + element.height) {
                mapOverlay.style.display = 'flex';
            }
        });
    }

    function handleWheel(event) {
        if (currentPage === 'page6' || currentPage === 'page7') {
            event.preventDefault();
            if (event.deltaY > 0 && currentScrollIndex < pages[currentPage].images.length - 1) {
                currentScrollIndex++;
            } else if (event.deltaY < 0 && currentScrollIndex > 0) {
                currentScrollIndex--;
            }
            renderPage(currentPage);
        }
    }

    let startY = 0;
    function handleTouchStart(e) {
        if (e.touches.length > 0) {
            startY = e.touches[0].clientY;
        }
    }

    function handleTouchMove(e) {
        // preventDefault는 스크롤이 필요한 페이지에서만 적용하거나
        // passive: false 옵션과 함께 사용하여 경고를 없애는 것이 좋습니다.
        if (e.cancelable) e.preventDefault();
    }

    function handleTouchEnd(e) {
        if (e.changedTouches.length > 0) {
            const endY = e.changedTouches[0].clientY;
            const deltaY = endY - startY;
            if (currentPage === 'page6' || currentPage === 'page7') {
                if (deltaY < 0 && currentScrollIndex < pages[currentPage].images.length - 1) {
                    currentScrollIndex++;
                } else if (deltaY > 0 && currentScrollIndex > 0) {
                    currentScrollIndex--;
                }
                renderPage(currentPage);
            }
        }
    }

    // 이벤트 등록
    canvas.addEventListener('click', handleClick);
    canvas.addEventListener('wheel', handleWheel, { passive: false });
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

    window.addEventListener('resize', () => {
        renderPage(currentPage);
    });

    preloadImages(showLoadingProgress).then(() => {
        renderPage(currentPage);
    });
});