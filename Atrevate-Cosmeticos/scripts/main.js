/********************* VARIÁVEIS ALTERAÇÃO DE CORES ************************/

const bgColorRepresentationSelect = document.getElementById('bgColorRepresentation');
const fontColorRepresentationSelect = document.getElementById('fontColorRepresentation');

const bgRgbSliders = document.querySelectorAll('#bg-rgb-sliders input[type="range"]');
const bgHslSliders = document.querySelectorAll('#bg-hsl-sliders input[type="range"]');
const bgHexSliders = document.querySelectorAll('#bg-hex-sliders input[type="range"]');

const fontRgbSliders = document.querySelectorAll('#font-rgb-sliders input[type="range"]');
const fontHslSliders = document.querySelectorAll('#font-hsl-sliders input[type="range"]');
const fontHexSliders = document.querySelectorAll('#font-hex-sliders input[type="range"]');

const colorSlidersBgRGB = document.getElementById('bg-rgb-sliders');
const colorSlidersBgHSL = document.getElementById('bg-hsl-sliders');
const colorSlidersBgHex = document.getElementById('bg-hex-sliders');

const colorSlidersFontRGB = document.getElementById('font-rgb-sliders');
const colorSlidersFontHSL = document.getElementById('font-hsl-sliders');
const colorSlidersFontHex = document.getElementById('font-hex-sliders');

const bgColorPreview = document.getElementById('bg-color-preview');
const fontColorPreview = document.getElementById('font-color-preview');

const bgColorCodeText = document.getElementById('bgColorCodeText');
const fontColorCodeText = document.getElementById('fontColorCodeText');

const bgCopyButton = document.getElementById('bgCopyButton');
const fontCopyButton = document.getElementById('fontCopyButton');

/********************* VARIÁVEIS CARROSSEL ************************/

let currentIndex = 0;
const images = [
	{src: "../arquivos/img/img-carrousel-1.png", desc: "Imagem 1: Ensaio Angélica"}, 
	{src: "../arquivos/img/img-carrousel-2.png", desc: "Imagem 2: Capa revista fev/21"}, 
	{src: "../arquivos/img/img-carrousel-3.png", desc: "Imagem 3: Ensaio Rebeca"}, 
	{src: "../arquivos/img/img-carrousel-4.png", desc: "Imagem 4: Black Friday 2023"},
	{src: "../arquivos/img/img-carrousel-5.png", desc: "Imagem 5: Satisfação cliente"}, 
	{src: "../arquivos/img/img-carrousel-6.png", desc: "Imagem 6: Evento Anabelle 2024"}, 
	{src: "../arquivos/img/img-carrousel-7.png", desc: "Imagem 7: Ensaio dia das cabelereiras 2022"}, 
	{src: "../arquivos/img/img-carrousel-8.png", desc: "Imagem 8: Loiro finalizado"},
	{src: "../arquivos/img/img-carrousel-9.png", desc: "Imagem 9: Escovando com Peggasus"}, 
	{src: "../arquivos/img/img-carrousel-10.png", desc: "Imagem 10: Teste de mechas"}
];
const carousel = document.querySelector('.carousel');
const descriptionContainer = document.querySelector('.description-container');
const totalItems = images.length;



/********************* FUNÇÕES ALTERAÇÃO DE CORES ************************/

// FUNÇÃO QUE DESENVOLVE A TROCA DE CORES E ABRE O POPUP PARA SELEÇÃO PERSONALIZADA
document.getElementById('options').addEventListener('change', function () {
    var body = document.body;
    var customContent = document.getElementById('custom-content');


    // Verificar a opção selecionada
    switch (this.value) {
        case 'default':
            document.body.style.backgroundColor = "white";
            document.getElementById("link-mais-vendidos").style.color = "#35363A";
            document.getElementById("link-promocoes").style.color = "#35363A";
            document.getElementById("link-novidades").style.color = "#35363A";
            document.getElementById("home").style.color = "#35363A";
            document.getElementById("sobre").style.color = "#35363A";
            document.getElementById("produtos").style.color = "#35363A";
            document.getElementById("contato").style.color = "#35363A";
            document.getElementById("options").style.color = "#35363A";
            document.getElementById("footer-description").style.color = "#fff";
            document.body.style.color = "#35363A";
            break;
        case 'style1':
            document.body.style.backgroundColor = "#FFCDD2";
            document.getElementById("link-mais-vendidos").style.color = "white";
            document.getElementById("link-promocoes").style.color = "white";
            document.getElementById("link-novidades").style.color = "white";
            document.getElementById("home").style.color = "white";
            document.getElementById("sobre").style.color = "white";
            document.getElementById("produtos").style.color = "white";
            document.getElementById("contato").style.color = "white";
            document.getElementById("options").style.color = "white";
            document.getElementById("footer-description").style.color = "ccc";
            document.body.style.color = "white";
            break;
        case 'style2':
            document.body.style.backgroundColor = "#C8E6C9";
            document.getElementById("link-mais-vendidos").style.color = "#1B5E20";
            document.getElementById("link-promocoes").style.color = "#1B5E20";
            document.getElementById("link-novidades").style.color = "#1B5E20";
            document.getElementById("home").style.color = "#1B5E20";
            document.getElementById("sobre").style.color = "#1B5E20";
            document.getElementById("produtos").style.color = "#1B5E20";
            document.getElementById("contato").style.color = "#1B5E20";
            document.getElementById("options").style.color = "#1B5E20";
            document.getElementById("footer-description").style.color = "lightgreen";
            document.body.style.color = "#1B5E20";
            break;
        case 'style3':
            document.body.style.backgroundColor = "#BBDEFB";
            document.getElementById("link-mais-vendidos").style.color = "#0D47A1";
            document.getElementById("link-promocoes").style.color = "#0D47A1";
            document.getElementById("link-novidades").style.color = "#0D47A1";
            document.getElementById("home").style.color = "#0D47A1";
            document.getElementById("sobre").style.color = "#0D47A1";
            document.getElementById("produtos").style.color = "#0D47A1";
            document.getElementById("contato").style.color = "#0D47A1";
            document.getElementById("options").style.color = "#0D47A1";
            document.getElementById("footer-description").style.color = "lightblue";
            document.body.style.color = "#0D47A1";
            break;
        case 'style4':
            document.body.style.backgroundColor = "#D1C4E9";
            document.getElementById("link-mais-vendidos").style.color = "#4A148C";
            document.getElementById("link-promocoes").style.color = "#4A148C";
            document.getElementById("link-novidades").style.color = "#4A148C";
            document.getElementById("home").style.color = "#4A148C";
            document.getElementById("sobre").style.color = "#4A148C";
            document.getElementById("produtos").style.color = "#4A148C";
            document.getElementById("contato").style.color = "#4A148C";
            document.getElementById("options").style.color = "#4A148C";
            document.getElementById("footer-description").style.color = "lightpink";
            document.body.style.color = "#4A148C";
            break;
        case 'style5':
            document.body.style.backgroundColor = "#FFF9C4";
            document.getElementById("link-mais-vendidos").style.color = "#F57F17";
            document.getElementById("link-promocoes").style.color = "#F57F17";
            document.getElementById("link-novidades").style.color = "#F57F17";
            document.getElementById("home").style.color = "#F57F17";
            document.getElementById("sobre").style.color = "#F57F17";
            document.getElementById("produtos").style.color = "#F57F17";
            document.getElementById("contato").style.color = "#F57F17";
            document.getElementById("options").style.color = "#F57F17";
            document.getElementById("footer-description").style.color = "lightyellow";
            document.body.style.color = "#F57F17";
            break;
        case 'style6':
            document.body.style.backgroundColor = "#FFE0B2";
            document.getElementById("link-mais-vendidos").style.color = "#E65100";
            document.getElementById("link-promocoes").style.color = "#E65100";
            document.getElementById("link-novidades").style.color = "#E65100";
            document.getElementById("home").style.color = "#E65100";
            document.getElementById("sobre").style.color = "#E65100";
            document.getElementById("produtos").style.color = "#E65100";
            document.getElementById("contato").style.color = "#E65100";
            document.getElementById("options").style.color = "#E65100";
            document.getElementById("footer-description").style.color = "orange";
            document.body.style.color = "#E65100";
            break;
        case 'custom':
            customContent.style.display = 'block';
            break;
        default:
            customContent.style.display = 'none';
            break;
    }

    // Esconder o popup se não for "Personalizado"
    if (this.value !== 'custom') {
        customContent.style.display = 'none';
    }
});

// FUNÇÃO QUE PEGA OS TONS ESCOLHIDOS PELO USUÁRIO E APLICA AO DOCUMENTO HTML
function applyCustomStyle() {

    const representationBg = bgColorRepresentationSelect.value;
    const representationFont = fontColorRepresentationSelect.value;
    let colorBg;
    let colorFont;
    
    if (representationBg === 'rgb') {
        const redValue = document.getElementById('bg-red').value;
        const greenValue = document.getElementById('bg-green').value;
        const blueValue = document.getElementById('bg-blue').value;
        colorBg = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    } else if (representationBg === 'hsl') {
        const hueValue = document.getElementById('bg-hue').value;
        const saturationValue = document.getElementById('bg-saturation').value;
        const lightnessValue = document.getElementById('bg-lightness').value;
        colorBg = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;
    } else if (representationBg === 'hex') {
        const redValue = document.getElementById('bg-hex-red').value;
        const greenValue = document.getElementById('bg-hex-green').value;
        const blueValue = document.getElementById('bg-hex-blue').value;
        colorBg = `#${componentToHex(redValue)}${componentToHex(greenValue)}${componentToHex(blueValue)}`;
    }

    if (representationFont === 'rgb') {
        const redValue = document.getElementById('font-red').value;
        const greenValue = document.getElementById('font-green').value;
        const blueValue = document.getElementById('font-blue').value;
        colorFont = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    } else if (representationFont === 'hsl') {
        const hueValue = document.getElementById('font-hue').value;
        const saturationValue = document.getElementById('font-saturation').value;
        const lightnessValue = document.getElementById('font-lightness').value;
        colorFont = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;
    } else if (representationFont === 'hex') {
        const redValue = document.getElementById('font-hex-red').value;
        const greenValue = document.getElementById('font-hex-green').value;
        const blueValue = document.getElementById('font-hex-blue').value;
        colorFont = `#${componentToHex(redValue)}${componentToHex(greenValue)}${componentToHex(blueValue)}`;
    }

    document.body.style.backgroundColor = colorBg;
    document.body.style.color = colorFont;
    document.getElementById("link-mais-vendidos").style.color = colorFont;
    document.getElementById("link-promocoes").style.color = colorFont;
    document.getElementById("link-novidades").style.color = colorFont;
    document.getElementById("home").style.color = colorFont;
    document.getElementById("sobre").style.color = colorFont;
    document.getElementById("produtos").style.color = colorFont;
    document.getElementById("contato").style.color = colorFont;
    document.getElementById("options").style.color = colorFont;
    document.getElementById("footer-description").style.color = colorFont;
    closePopup();
}

// FUNÇÃO QUE FECHA O POPUP DE ESCOLHA DE CORES PERSONALIZADO
function closePopup() {
    document.getElementById('custom-content').style.display = 'none';
}


// FUNÇÃO QUE FICA ATUALIZANDO EM TEMPO REAL, O BACKGROUND
function updateBgColor() {
    const representation = bgColorRepresentationSelect.value;
    let color;
    
    if (representation === 'rgb') {
        const redValue = document.getElementById('bg-red').value;
        const greenValue = document.getElementById('bg-green').value;
        const blueValue = document.getElementById('bg-blue').value;
        color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        bgColorCodeText.textContent = color;
    } else if (representation === 'hsl') {
        const hueValue = document.getElementById('bg-hue').value;
        const saturationValue = document.getElementById('bg-saturation').value;
        const lightnessValue = document.getElementById('bg-lightness').value;
        color = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;
        bgColorCodeText.textContent = color;
    } else if (representation === 'hex') {
        const redValue = document.getElementById('bg-hex-red').value;
        const greenValue = document.getElementById('bg-hex-green').value;
        const blueValue = document.getElementById('bg-hex-blue').value;
        color = `#${componentToHex(redValue)}${componentToHex(greenValue)}${componentToHex(blueValue)}`;
        bgColorCodeText.textContent = color;
    }

    bgColorPreview.style.backgroundColor = color;
}

// FUNÇÃO QUE FICA ATUALIZANDO EM TEMPO REAL, A FONTE
function updateFontColor() {
    const representation = fontColorRepresentationSelect.value;
    let color;
    
    if (representation === 'rgb') {
        const redValue = document.getElementById('font-red').value;
        const greenValue = document.getElementById('font-green').value;
        const blueValue = document.getElementById('font-blue').value;
        color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        fontColorCodeText.textContent = color;
    } else if (representation === 'hsl') {
        const hueValue = document.getElementById('font-hue').value;
        const saturationValue = document.getElementById('font-saturation').value;
        const lightnessValue = document.getElementById('font-lightness').value;
        color = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;
        fontColorCodeText.textContent = color;
    } else if (representation === 'hex') {
        const redValue = document.getElementById('font-hex-red').value;
        const greenValue = document.getElementById('font-hex-green').value;
        const blueValue = document.getElementById('font-hex-blue').value;
        color = `#${componentToHex(redValue)}${componentToHex(greenValue)}${componentToHex(blueValue)}`;
        fontColorCodeText.textContent = color;
    }

    document.getElementById('font-color-title').style.color = color;
}

// FUNÇÃO QUE TRANSFORMA EM HEXA
function componentToHex(c) {
    const hex = parseInt(c, 10).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

// FUNÇÃO QUE TROCA E DEIXA INVISÍVEL OPÇÕES NÃO ESCOLHIDAS E VISÍVEIS AS ESCOLHIDAS, BACKGROUND
bgColorRepresentationSelect.addEventListener('change', () => {
    const selectedValue = bgColorRepresentationSelect.value;
    colorSlidersBgRGB.classList.remove('visible');
    colorSlidersBgHSL.classList.remove('visible');
    colorSlidersBgHex.classList.remove('visible');
    if (selectedValue === 'rgb') {
        colorSlidersBgRGB.classList.add('visible');
    } else if (selectedValue === 'hsl') {
        colorSlidersBgHSL.classList.add('visible');
    } else if (selectedValue === 'hex') {
        colorSlidersBgHex.classList.add('visible');
    }
    updateBgColor();
});

// FUNÇÃO QUE TROCA E DEIXA INVISÍVEL OPÇÕES NÃO ESCOLHIDAS E VISÍVEIS AS ESCOLHIDAS, FONTE
fontColorRepresentationSelect.addEventListener('change', () => {
    const selectedValue = fontColorRepresentationSelect.value;
    colorSlidersFontRGB.classList.remove('visible');
    colorSlidersFontHSL.classList.remove('visible');
    colorSlidersFontHex.classList.remove('visible');
    if (selectedValue === 'rgb') {
        colorSlidersFontRGB.classList.add('visible');
    } else if (selectedValue === 'hsl') {
        colorSlidersFontHSL.classList.add('visible');
    } else if (selectedValue === 'hex') {
        colorSlidersFontHex.classList.add('visible');
    }
    updateFontColor();
});

bgRgbSliders.forEach(slider => slider.addEventListener('input', updateBgColor));
bgHslSliders.forEach(slider => slider.addEventListener('input', updateBgColor));
bgHexSliders.forEach(slider => slider.addEventListener('input', updateBgColor));

fontRgbSliders.forEach(slider => slider.addEventListener('input', updateFontColor));
fontHslSliders.forEach(slider => slider.addEventListener('input', updateFontColor));
fontHexSliders.forEach(slider => slider.addEventListener('input', updateFontColor));


// EVENTOS DE BOTÕES PARA CÓPIA DE VALORES
bgCopyButton.addEventListener('click', () => {
    const colorCode = bgColorCodeText.textContent;
    navigator.clipboard.writeText(colorCode).then(() => {
        alert('Background color code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
fontCopyButton.addEventListener('click', () => {
    const colorCode = fontColorCodeText.textContent;
    navigator.clipboard.writeText(colorCode).then(() => {
        alert('Font color code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});



/********************* FUNÇÕES CARROSSEL ************************/
function renderCarousel() {
    carousel.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        const itemIndex = (currentIndex + i) % totalItems;
        const item = document.createElement('div');
        item.className = 'carousel-item';
        const img = document.createElement('img');
        img.src = images[itemIndex].src;
        img.alt = `Image ${itemIndex + 1}`;
        item.appendChild(img);
        
        // Adiciona evento de clique
        item.addEventListener('click', () => imageClicked(i));

        if (i === 1 || i === 2) {
            item.classList.add('large');
        } else {
            item.classList.add('small');
        }

        carousel.appendChild(item);
    }
    // Atualiza a descrição da imagem central (segunda ou terceira imagem)
    updateDescriptions();
    // Aplicar transições após renderizar os itens para suavidade
    setTimeout(() => {
        carousel.querySelectorAll('.carousel-item').forEach((item, index) => {
            item.style.transform = index === 1 || index === 2 ? 'scale(1.25)' : 'scale(0.6)';
        });
    }, 10); // Pequeno atraso para permitir a aplicação das classes antes da transição
}

function updateDescriptions() {
    descriptionContainer.innerHTML = '';
    for (let i = 0; i < 4; i++) {
        const itemIndex = (currentIndex + i) % totalItems;
        const desc = document.createElement('p');
		const br = document.createElement('br');
        desc.innerText = images[itemIndex].desc;
        descriptionContainer.appendChild(desc);
		descriptionContainer.appendChild(br);
    }
}

function prevSlide() {
    carousel.style.transition = 'transform 40s ease-in-out';
    carousel.style.transform = 'translateX(-900%)';
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
        renderCarousel();
    }, 100); // Ajustar de acordo com a duração da transição
}

function nextSlide() {
    carousel.style.transition = 'transform 40s ease-in-out';
    carousel.style.transform = 'translateX(900%)';
    setTimeout(() => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
        renderCarousel();
    }, 100); // Ajustar de acordo com a duração da transição
}

function imageClicked(index) {
    if (index === 0 || index === 1) {
        prevSlide();
    } else if (index === 2 || index === 3) {
        nextSlide();
    }
}


updateBgColor(); // CHAMADA INICIALMENTE PARA DEFINIR BACKGROUND INICIAL
bgColorRepresentationSelect.dispatchEvent(new Event('change')); // INICIAR OS SLIDES DE ESCOLHA

updateFontColor(); // CHAMADA INICIALMENTE PARA DEFINIR COR DE FONTE INICIAL
fontColorRepresentationSelect.dispatchEvent(new Event('change')); // INICIAR OS SLIDES DE ESCOLHA

// RENDERIZA O CARROSSEL INICIALMENTE
renderCarousel();