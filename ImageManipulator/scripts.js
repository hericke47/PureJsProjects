// elemento de click para executar a função de arquivo do input
const photoFile = document.getElementById('photo-file')
let image = document.getElementById('photo-preview')
//select and preview image

document.getElementById('select-image')
.onclick = function () {
  photoFile.click()
}

window.addEventListener('DOMContentLoaded', () => {
  photoFile.addEventListener('change', () => {
    // imagem que está na posição 0
    let file = photoFile.files.item(0);

    // ler um arquivo
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (event) {
      // colocando o estado do reader no src da imagem
      
      image.src = event.target.result
    }
  })
})

// Selection tool
const selection = document.getElementById('selection-tool')

let startX, startY, relativeStartX, relativeStartY,
endX, endY, relativeEndX, relativeEndY;

let startSelection = false; 

const events = {
  mouseover(){
    this.style.cursor = 'crosshair'
  },
  mousedown(){
    const {clientX, clientY, offsetX, offsetY} = event
    // console.table({
    //     'client': [clientX, clientY],
    //     'offset': [offsetX, offsetY]
    // })

    startX = clientX
    startY = clientY
    relativeStartX = offsetX
    relativeStartY = offsetY

    startSelection = true

},
mousemove(){
    endX = event.clientX
    endY = event.clientY

    if(startSelection) {
        selection.style.display = 'initial';
        selection.style.top = startY + 'px';
        selection.style.left = startX + 'px';

        selection.style.width = (endX - startX) + 'px';
        selection.style.height = (endY - startY) + 'px';
    }

},
  mouseup(){
    startSelection = false
  }
}

//construtor que pega as chaves dos objeto 'events'
Object.keys(events)
.forEach(eventName => {
  image.addEventListener(eventName, events[eventName])
})