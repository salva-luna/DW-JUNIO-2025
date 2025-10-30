const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('h2')

h2.forEach( (cadaH2, i)=>{
    h2[i].addEventListener('click', ()=>{

        bloque.forEach( (cadaBloque, i) => {
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')
    })
})

//EJERCICIO 2//

'use strict'

const imgList = document.querySelectorAll('.img');
const lightbox = document.querySelector('.lightbox');
const grande = document.querySelector('.grande');
const closeBtn = document.querySelector('.close');

const closeBtnHandler = () => lightbox.classList.remove('isActive');

const imgListHandler = (index) => {
    lightbox.classList.add('isActive')
    grande.src = imgList[index].src
}

imgList.forEach(( eachImg , index ) => {
    imgList[index].addEventListener('pointerdown', () => {
        imgListHandler(index)   
    })
})

closeBtn.addEventListener('pointerdown', closeBtnHandler)

//EJERCICIO 3//

const li = document.querySelectorAll('.li');
const block = document.querySelectorAll('.block');

li.forEach( (cadaLi, i) => {
    li[i].addEventListener('click', () => {

        li.forEach( (cadaLi, i) => {
            li[i].classList.remove('activo')
            block[i].classList.remove('activo')
        })

        li[i].classList.add('activo')
        block[i].classList.add('activo')
    })
})