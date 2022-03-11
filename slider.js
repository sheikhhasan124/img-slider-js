const img =[
    'img/pic-1.jpg',
    'img/pic-2.jpg',
    'img/pic-3.jpg',
    'img/pic-4.jpg',
    'img/pic-5.jpg',
    'img/pic-6.jpg'
    
]

let imgIndex = 0;
let imgElement = document.getElementById('slider-img')
setInterval(()=>{
    imgIndex++;
    if(imgIndex>=img.length){
        imgIndex=0;
    }
    let imgUrl = img[imgIndex]
    imgElement.setAttribute('src', imgUrl)
},1000)