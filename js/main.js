let setasED = document.querySelectorAll(".setas")
let allSections = document.querySelectorAll(".sectionTudo")
let indiceImagemAtual = 0;

setasED.forEach((setas, indice) => {
    setas.addEventListener('click', function (event) {
        desselecionarSection()

        function controlarIndiceAtual() {
            if (indice === 1) {
                indiceImagemAtual++
            } else if (indice === 0) {
                indiceImagemAtual--
            }

            if(indiceImagemAtual === -1) {
                indiceImagemAtual = 0
            }else if(indiceImagemAtual === 4) {
                indiceImagemAtual = 3
            }
        }

        controlarIndiceAtual()
        allSections[indiceImagemAtual].classList.add('selecionada');


        function opacidadeSeta() {
            if (indiceImagemAtual === 0) {
                setasED[0].classList.add('opacidadeSetas')
            } else if (indice === 1) {
                setasED[0].classList.remove('opacidadeSetas')
            }

            if (indiceImagemAtual === 3) {
                setasED[1].classList.add('opacidadeSetas')
            } else if (indice === 0) {
                setasED[1].classList.remove('opacidadeSetas')
            }
        }

        opacidadeSeta()

    })
})

function desselecionarSection() {
    const sectionSelecionada = document.querySelector(".sectionTudo.selecionada")
    sectionSelecionada.classList.remove('selecionada')
    
}

