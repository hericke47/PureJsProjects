const container = document.querySelector("#text")

// criando a barra
let bar = document.createElement("div")
// estilo da barra
bar.style.height = "4px"
bar.style.width = "0"
bar.style.background = "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"
bar.style.transition = "0.2s"

// adiciona no corpo da pagina
document.body.append(bar);

// atualizar a barra

// verificar o movimento do scroll
document.addEventListener("scroll", () => {
  // o tamanho da caixa que contem o texto
  const textHeight = container.offsetHeight

  // verificar em que posição da pagina eu estou
  const pagePositionY = window.pageYOffset

  // regra de 3
  const updateBar = pagePositionY * 120 / textHeight

  bar.style.width = updateBar + "%" 
})