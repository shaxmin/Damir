"use strict"


const experienceDiv = document.querySelectorAll('.experienceDiv');
const links = document.querySelectorAll('.toContacts')

experienceDiv.forEach(item => {
    let key = item.dataset.key;
    item.innerHTML = `
            <div class="leftSide">
                <div class="leftTitle">${data[key].leftTitle}</div>
                <div class="leftDate">${data[key].leftDate}</div>
            </div>
            <div class="right">
                <div class="rightTitle">${data[key].rightTitle}</div>
                <div class="rightCity">${data[key].rightCity}</div>
                <div class="rightSpecalization">${data[key].rightSpecalization}</div>
                <div class="rightDescription">
                    <ul class="rightList">
                        ${data[key].rightList}
                    </ul>
                </div>
    `
});

// Плавный скролл
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