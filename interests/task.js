let boxOfInterests = document.querySelectorAll(".interest__check");

let mainCheckOne = boxOfInterests[0];
let mainCheckTwo = boxOfInterests[3];

mainCheckOne.onclick = function () {
    let firstBlock = mainCheckOne
        .closest(".interest")
        .querySelector(".interests_active")
        .querySelectorAll(".interest");

    for (let i = 0; i < firstBlock.length; i++) {
        let elements = firstBlock[i].querySelectorAll(".interest__check");
        if (elements[0].checked == false) {
            elements[0].checked = true;
        } else {
            elements[0].checked = false;
        }
    }
};

mainCheckTwo.onclick = function () {
    let secondtBlock = mainCheckTwo
        .closest(".interest")
        .querySelector(".interests_active")
        .querySelectorAll(".interest");

    for (let i = 0; i < secondtBlock.length; i++) {
        let elements = secondtBlock[i].querySelectorAll(".interest__check");
        if (elements[0].checked == false) {
            elements[0].checked = true;
        } else {
            elements[0].checked = false;
            console.log(elements[0]);
        }
    }
};
