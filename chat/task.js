let chatWidget = document.querySelector(".chat-widget");
chatWidget.onclick = () => chatWidget.className = "chat-widget chat-widget_active";

let chatTextForm = document.querySelector(".chat-widget__messages");

let date = new Date();

chatTextForm.innerHTML += `
            <div class="message">
              <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
              <div class="message__text">Добрый день!</div>
            </div>
`;

let textInMessage = document.querySelector(".message__text");

let inputText = document.querySelector('#chat-widget__input');

let arrayOfAnsewrs = [
    "Добрый день!",
    "Я спать.",
    "Отвечу завтра.",
    "Никого нет.",
    "Это не ко мне.",
    "Сколько лет!"
];

inputText.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {

        if (this.value) {
            chatTextForm.innerHTML += `
            <div class="message message_client">
              <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
              <div class="message__text">${this.value}</div>
            </div>
            <div class="message">
              <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
              <div class="message__text">${arrayOfAnsewrs[parseInt(Math.random() * (arrayOfAnsewrs.length - 0) +0)]}</div>
            </div>
            `;


            console.log("Вы нажали Enter", `и ввели ${this.value}`);

            inputText.value = "";
        }

    }

    return false;
};