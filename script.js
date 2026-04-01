var ButtonOpen720px = document.querySelector('#brands__toggle-720px--hidden');
var ButtonClose720px = document.querySelector('#brands__toggle-720px--visible');
var ButtonOpen1120px = document.querySelector('#brands__toggle-1120px--hidden');
var ButtonClose1120px = document.querySelector('#brands__toggle-1120px--visible');
var itemBrandHiddenTablet = document.querySelectorAll('.brands__item-tablet');
var itemBrandHiddenDesktop = document.querySelectorAll('.brands__item-desktop');

ButtonClose720px.addEventListener('click', function () {
    for (var i = 0; i < itemBrandHiddenTablet.length; i++) {
        itemBrandHiddenTablet[i].classList.remove('brands__item-tablet--hidden');
    }
    ButtonClose720px.style.display = 'none';
    ButtonOpen720px.style.display = 'flex';
});

ButtonOpen720px.addEventListener('click', function () {
    for (var i = 0; i < itemBrandHiddenTablet.length; i++) {
        itemBrandHiddenTablet[i].classList.add('brands__item-tablet--hidden');
    }
    ButtonOpen720px.style.display = 'none';
    ButtonClose720px.style.display = 'flex';
});

ButtonClose1120px.addEventListener('click', function () {
    for (var i = 0; i < itemBrandHiddenDesktop.length; i++) {
        itemBrandHiddenDesktop[i].classList.remove('brands__item-desktop--hidden');
    }
    ButtonClose1120px.style.display = 'none';
    ButtonOpen1120px.style.display = 'flex';
});


ButtonOpen1120px.addEventListener('click', function () {
    for (var i = 0; i < itemBrandHiddenDesktop.length; i++) {
        itemBrandHiddenDesktop[i].classList.add('brands__item-desktop--hidden');
    }
    ButtonOpen1120px.style.display = 'none';
    ButtonClose1120px.style.display = 'flex';
});