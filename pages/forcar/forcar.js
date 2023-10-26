"use strict"


const experienceDiv = document.querySelectorAll('.infoDiv');
const uiDiv = document.querySelectorAll('.uiDiv');
const tabs = document.querySelectorAll('.tabs li span');
const content = document.querySelectorAll('.content');

experienceDiv.forEach(item => {
    let key = item.dataset.key;
    item.innerHTML = `
            <div class="leftSide">
                <div class="leftTitle">${data[key].leftTitle}</div>
            </div>
            <div class="right">
                    <ul class="rightList">
                        ${data[key].rightList}
                    </ul>
                </div>
    `
});

uiDiv.forEach(item => {
    let key = item.dataset.key;
    item.innerHTML = `
    <div>${uiData[key].block1}</div>
    <div>${uiData[key].block2}</div>
    <div>${uiData[key].block3}</div>
    <div>${uiData[key].block4}</div>
    `
});


tabs.forEach(item => {
    item.addEventListener('click', () => {
        tabs.forEach(elem => elem.classList.remove('greenText'))
        item.classList.add('greenText')
        content.forEach(item => item.classList.remove('is-active'))
        document.querySelector(`[data-content="${item.dataset.openBlock}"]`).classList.add('is-active')

    })
});