let data = []
const count = 5;
const apikey = 'FX6sp6QBbm2qLGXikbpv8kyEZMvyfL79D3UqCzNiPus';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

let dataInsertedHere = document.getElementById('dataInsertedHere')

async function getPhotos(){
    try{
        let response = await fetch(apiUrl);
        data = await response.json()
        displayPhotos()
    }
    catch(e){
        console.log(e);
    }
}

function displayPhotos(){
    data.forEach(item=>{
        let htmlTOBeInserted =
        `
        <img style="max-width: 40%;"
        title="${item.description||item.alt_description}" 
        src="${item.urls.full}">
    
        `
        dataInsertedHere.innerHTML += htmlTOBeInserted;
    })
}

getPhotos()

window.addEventListener('scroll',()=>{
    if (window.scrollY+window.innerHeight >= document.body.offsetHeight){
        getPhotos();
    }
})


