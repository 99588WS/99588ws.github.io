// alert('hhhhh');
// document.querySelector("html").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
// });

document.querySelector("#backtotop").addEventListener("click", function () {
    alert("即将跳转回顶部");
});

// let myImage = document.querySelector('img');

// myImage.onclick = function () {
//     let mySrc = myImage.getAttribute('src');
//     for (let i = 0; i < 8; i++) {
//         if (mySrc === images / jaychou(i).jpg) {
//             myImage.setAttribute('src', images / jaychou(i + 1).jpg);
//         } else {
//             myImage.setAttribute('src', images / jaychou(i).jpg);
//         }
//     }
// }

let myButton = document.querySelector('#change');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Wellcome back to JayChou,' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Wellcome to JayChou,' + storedName;
}
myButton.onclick = function () {
    setUserName();
}
