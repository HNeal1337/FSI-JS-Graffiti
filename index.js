let header = document.querySelector('#page-header')
header.style.textAlign = "left"
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}
dogImages.style.transform.rotate('180deg')
let dogName = document.querySelectorAll('#dog-name')
dogName.style.textAlign = 'left'
let footerText = document.querySelector('#footer')
footerText.style.color = 'blue'

// Select some elements...