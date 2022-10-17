
let valueMinhaCarta;
let minhaJogada ;
let cartasMaioresBoot = []
let cartasTotalBoot = []

document.querySelector(".container").addEventListener("click", (e) => {
    cartasMaioresBoot = [];
    cartasTotalBoot = [];
    const ev = e.target;

    const bootPensando = document.querySelector("#bootPensante");
    ev.classList.contains('minhasCartas') ? bootPensando.classList.remove("bootPensador") : bootPensando.classList.add("bootPensador");

    setTimeout(() => {
        bootPensando.classList.add("bootPensador")

        if(ev.classList.contains('minhasCartas')) {
            valueMinhaCarta = ev.getAttribute('value');
            minhaJogada = ev;
        }
    
        const cartasBoot = document.querySelectorAll(".cartasBoot");
        cartasBoot.forEach(ev => {
            const valuesCartasBoot = ev.getAttribute('value');
            cartasTotalBoot.push(ev);
            if(parseInt(valuesCartasBoot) >= parseInt(valueMinhaCarta)) {
                cartasMaioresBoot.push(ev);
            }
        })
    
        const arrayTeste = []
    
        cartasMaioresBoot.length == 0 ? arrayTeste.push(...cartasTotalBoot) : arrayTeste.push(...cartasMaioresBoot)
        let cartaAleatoria = parseInt(Math.random() * ((arrayTeste.length - 0) + 0));
        let cartaJogadaBoot = arrayTeste[cartaAleatoria ?? 0];
    
        const pontosBoot = document.querySelector("#pontosBoot");
        const meusPontos = document.querySelector("#meusPontos");
        const minhaCartaFinal = parseInt(minhaJogada.getAttribute("value"));
        const cartaBootFinal = parseInt(cartaJogadaBoot.getAttribute("value"));
        minhaJogada.remove();
        cartaJogadaBoot.remove();
    
        let eita = parseInt(pontosBoot.textContent);
        let eita2 = parseInt(meusPontos.textContent);
    
        document.querySelector("#ultimaJogadaBoot").innerHTML = cartaBootFinal;
        document.querySelector("#ultimaJogadaMinha").innerHTML = minhaCartaFinal;
    
        if(cartaBootFinal > minhaCartaFinal) {
            pontosBoot.innerHTML = eita + 1;
        }
    
        if(cartaBootFinal < minhaCartaFinal) {
            meusPontos.innerHTML = eita2 + 1;
        }   
    }, (parseInt(Math.random() * ((12 - 1) + 1))) * 1000);
})



