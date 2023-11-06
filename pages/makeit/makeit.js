"use strict"

const experienceDiv = document.querySelectorAll('.infoDiv');
const links = document.querySelectorAll('.toTop');

experienceDiv.forEach(item => {
    let key = item.dataset.key;
    item.innerHTML = `
            <div class="leftSide">
                <div class="leftTitle">${data[key].leftTitle}</div>
            </div>
            <div class="right">
                        ${data[key].rightList}
                </div>
    `
});

links.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.getAttribute('href')
        const elem = document.querySelector(link)
        let top = elem.getBoundingClientRect().top
        window.scrollTo({
        top: top + window.scrollY - 55,
        behavior: 'smooth'
    })
})
});