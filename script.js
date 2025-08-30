let isTitleChanged = false;
let isLayoutChanged = false;
let isColorsChanged = false;
let isFooterImageShown = false;

function changeTitle() {
    const titleElement = document.getElementById("pageTitle");
    const titleBtn = document.getElementById("titleBtn");

    if (isTitleChanged) {
        titleElement.textContent = "University Demo";
        titleBtn.textContent = "Cambiar Título";
        isTitleChanged = false;
    } else {
        titleElement.textContent = "HTML & CSS: Curso práctico avanzado";
        titleBtn.textContent = "Título Original";
        isTitleChanged = true;
    }
}

function changeLayout() {
    const content = document.querySelector('.content');
    const layoutBtn = document.getElementById('layoutBtn');
    const titles = document.querySelectorAll('.column h2');
    const texts = document.querySelectorAll('.column p');

  if (isLayoutChanged) {
    content.style.flexDirection = 'row';
    content.style.alignItems = 'stretch'; 
    content.style.textAlign = 'left';     
    layoutBtn.textContent = 'Cambiar Layout (Columnas)';

    titles.forEach(t => t.style.fontSize = '42px');
    texts.forEach(p => p.style.fontSize = '24px');

    isLayoutChanged = false;
  } else {
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';  
    content.style.textAlign = 'center';   
    layoutBtn.textContent = 'Layout Original';

    titles.forEach(t => t.style.fontSize = '28px');
    texts.forEach(p => p.style.fontSize = '18px');

    isLayoutChanged = true;
  }
}

function changeColors() {
    let titles = document.querySelectorAll(".column h2");
    let texts = document.querySelectorAll(".column p");

    if (!isColorsChanged) {
        titles.forEach(t => t.style.color = "red");
        texts.forEach(p => p.style.color = "blue");
        isColorsChanged = true;
    } else {
        titles.forEach(t => t.style.color = "");
        texts.forEach(p => p.style.color = "");
        isColorsChanged = false;
    }
}

function FooterImage() {
    const footer = document.querySelector('.footer');
    const footerBtn = document.getElementById('imageBtn');

    if (isFooterImageShown) {
        const img = footer.querySelector('img');
        if (img) img.remove();
        footerBtn.textContent = 'Agregar Imagen';
        isFooterImageShown = false;
    } else {
        const img = document.createElement('img');
        img.src = 'https://as2.ftcdn.net/v2/jpg/05/09/53/43/1000_F_509534374_LPVwU5WGm7ddhogm97OEMURaXj9xm5JI.jpg';
        img.alt = 'Imagen decorativa';
        img.classList.add('footer-img');

        footer.appendChild(img);
        footerBtn.textContent = 'Quitar Imagen';
        isFooterImageShown = true;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("layoutBtn").addEventListener("click", changeLayout);
    document.getElementById("titleBtn").addEventListener("click", changeTitle);
    document.getElementById("colorBtn").addEventListener("click", changeColors);
    document.getElementById("imageBtn").addEventListener("click", FooterImage);
});