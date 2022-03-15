const nav = document.querySelector('.navigation');
fetch('./navigation.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data;
    });

const topBar = document.querySelector('.topbar');
fetch('./topbar.html')
    .then(res => res.text())
    .then(data => {
        topBar.innerHTML = data;
    })

const footer = document.querySelector('.footer');
fetch('./footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data;
    })

function toggleMenu() {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation')
    let brandName = document.querySelector('.brand_h2')
    let main = document.querySelector('.main')

    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    brandName.classList.toggle('active');
    main.classList.toggle('active');
}











// let downArrow = document.getElementById('down-arrow')
// let popUp = document.getElementById('pop')

// let popWindowCall = function () {
//     popUp.classList.toggle('scale')
// }
//  downArrow.addEventListener('click', popWindowCall)

