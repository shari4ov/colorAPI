const color = document.getElementById('pick-color')
const scheme = document.getElementById('scheme-select')
const form = document.getElementById('get-color-scheme')
const colorsContainer = document.querySelector('.colors-container')
const valueContainer = document.querySelector('.color-value-container')

let pickedColor = ''
let pickedScheme =''
let schemeData = ''

color.addEventListener('input',function(){
       pickedColor = this.value
       pickedColor=pickedColor.replace('#','').toUpperCase()
})


form.addEventListener('submit',function(event){
       event.preventDefault()
       fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}`)
       .then(resp => resp.json())
       .then(data => {
              data.colors.forEach(each => {
                     colorsContainer.innerHTML += `
                            <div><img class='color' src='${each.image.bare}'></div>
                     `
                     valueContainer.innerHTML+= `
                            <div class='value'>${each.hex.value}</div>
                     `
                     scheme.innerHTML += `
                            <option>${each.name.value}</option>
                     `
              })
       })
       colorsContainer.innerHTML=''
       valueContainer.innerHTML=''
       scheme.innerHTML=''
})