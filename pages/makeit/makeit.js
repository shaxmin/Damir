"use strict"

const experienceDiv = document.querySelectorAll('.infoDiv');

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