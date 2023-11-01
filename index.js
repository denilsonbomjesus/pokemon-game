const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

// importação e renderização do mapa
const image = new Image()
image.src = './assets/Pellet Town.png'

// criação do player
const playerImage = new Image()
playerImage.src = './assets/playerDown.png'

class Sprite {
    constructor(position) {
        this.position = position
    }
    //1:54
}

// funcao que anima imagem do personagem
function animate() {
    window.requestAnimationFrame(animate)
    // c.drawImage(image, -785, -650)
    c.drawImage(image, 0, 0)
    c.drawImage(
        playerImage, 
        0, // posicao do corte
        0, // posicao do corte
        playerImage.width / 4, // largura do corte
        playerImage.height, // altura do corte
        canvas.width / 2 - (playerImage.width / 4) / 2, // posicao real
        canvas.height / 2 - playerImage.height / 2, // posicao real
        playerImage.width / 4, // largura real
        playerImage.height // altura real
    )

}
animate()

// evento de clique com teclado
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            console.log('pressionou w')
            break
        
        case 'a':
            console.log('pressionou a')
            break

        case 's':
            console.log('pressionou s')
            break

        case 'd':
            console.log('pressionou d')
            break
    }
})

