let quantasCartas; // deixar a const vazia quando for usar a respectiva função  
let qndCartasLevarei;

qntdCartas();


url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,AD,AC,AH,2S,2D,2C,2H,3S,3D,3C,3H,4S,4D,4C,4H,5S,5D,5C,5H,6S,6D,6C,6H,7S,7D,7C,7H,0S,0D,0C,0H,JS,JD,JC,JH,QS,QD,QC,QH,KS,KD,KC,KH,";
fetch(url).then((response) => response.json()).then((data) => {
    fetch(`https://www.deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=${quantasCartas}`).then((response) => response.json()).then((response1) => {
        const container = document.querySelector('.container'); 
        response1.cards.forEach(ev => {
            const imgs = document.createElement("img");
            imgs.setAttribute('src', `${ev.image}`);
            imgs.setAttribute('id', `${ev.code}`)
            imgs.setAttribute('value', `${valueCards(ev.value)}`)
            imgs.classList.add("imgs", "minhasCartas", "animate__animated", "animate__fadeInLeftBig");
            container.appendChild(imgs);
        });   
    });

    fetch(`https://www.deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=${quantasCartas}`).then((response) => response.json()).then((response2) => {
        const containerBoot = document.querySelector('.containerBoot');
        response2.cards.forEach(ev => {
            const imgs = document.createElement("img");
            imgs.setAttribute('src', `${ev.image}`);
            imgs.setAttribute('id', `${ev.code}`)
            imgs.setAttribute('value', `${valueCards(ev.value)}`)
            imgs.classList.add("imgs", "cartasBoot", "animate__animated", "animate__fadeInRightBig");
            containerBoot.appendChild(imgs);
        });   
        setTimeout(() => {
            quantasVcLeva();
        }, 700)
    });
});



function qntdCartas () {
    let value = prompt('quantas cartas sera essa rodada?');
    quantasCartas =  (value != "" ? value : value = '5');
}

function quantasVcLeva () {
    let value = prompt('Quantas cartas você levara nessa rodada?');
    qndCartasLevarei = value;
}

function valueCards (value) {
    switch (value) {
        case 'JACK':
            value = '11';
            break;
        case 'QUEEN':
            value = '12';
            break;
        case 'KING':
            value = '13';
            break;
        case 'ACE':
            value = '14';
            break;
        case '2':
            value = '15';
            break;
        case '3':
            value = '16';
            break;
        default:
            break;
    }
    return value;
}
