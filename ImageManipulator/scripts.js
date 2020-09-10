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

const events = {
  mouseover(){},
  mousedown(){},
  mousemove(){},
  mouseup(){}
}

//construtor que pega as chaves dos objeto 'events'
Object.keys(events)
.forEach(eventName => {
  image.addEventListener(eventName, events[eventName])
})