function toggleMode() {
  const body = document.body

  //  if (body.classList.contains("light")) {
  //    body.classList.remove("light")
  //  } else {
  //    body.classList.add("light")
  //  }
  body.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem de perfil 
  if(body.classList.contains('light')){
    img.setAttribute("src", "./assets/avatar-light.png")
  }else{
    img.setAttribute("src", "./assets/avatar.png")
  }
}
