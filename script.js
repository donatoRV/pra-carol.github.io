const messages = [
    "vc tem certeza?",
    "nao serio, ce tem ctz mesmo",
    "nao to brincando, vc tem ctz?",
    "amor.. por favor..",
    "pensa direitinho pf.. ",
    "EU SEI SEU IP...",
    "tudo bem entao vc me quer triste ne",
    "eu vou fica muito triste triste vc sabe",
    "jae entao, nao vou mais enche seu saco",
    "É BRINCADEIRA AMOR PF ACEITA",
    "e serio vc ainda desceu a pagina pra clica aqui",
    "ACEITA LOGOOOOOOOOOO"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}