
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

        minhaJogada.classList.add('animate__flip');
        minhaJogada.addEventListener('animationend', () => {
            minhaJogada.remove();
        });

        cartaJogadaBoot.classList.add('animate__flip');
        cartaJogadaBoot.addEventListener('animationend', () => {
            cartaJogadaBoot.remove();
        });
    
        let boot = parseInt(pontosBoot.textContent);
        let eu = parseInt(meusPontos.textContent);
    
        document.querySelector("#ultimaJogadaBoot").innerHTML = cartaBootFinal;
        document.querySelector("#ultimaJogadaMinha").innerHTML = minhaCartaFinal;
    
        if(cartaBootFinal > minhaCartaFinal) {
            pontosBoot.innerHTML = boot + 1;
        }
    
        if(cartaBootFinal < minhaCartaFinal) {
            meusPontos.innerHTML = eu + 1;
        }   

        if(document.querySelector(".container").childElementCount == 1) {
            if(meusPontos.textContent == qndCartasLevarei) {
                alert("Parabéns, voçê não perdeu nenhuma carta!");
            } 

            if(qndCartasLevarei > meusPontos.textContent) {
                alert(`você perdeu ${qndCartasLevarei - meusPontos.textContent}!`);
            }

            if(qndCartasLevarei < meusPontos.textContent) {
                alert(`você perdeu ${meusPontos.textContent - qndCartasLevarei}!`);
            }
            document.location.reload(true);
        }        

    }, (parseInt(Math.random() * ((12 - 1) + 1))) * 1000);
})



