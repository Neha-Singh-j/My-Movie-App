

let input = document.querySelector('input')
let btn = document.querySelector('button')
let list = document.querySelector('#list')


btn.addEventListener('click' , function(){
    let searchText = input.value;
    // call api
    let data = fetchData(searchText);
    input.value = ''
})




//api call krna 
function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(function(response){
            // console.log(response.data);
            manipulationDom(response.data);
        })
}

// Load default movies when the page loads
window.onload = function () {
    fetchData('spiderman');
};
// to show changes on ui
 function manipulationDom(datas){
    //delete older data before searching next
    while(list.firstChild){
        list.firstChild.remove();
    }

    //add
    // for(let data of datas){
    //     let figure=document.createElement('figure');

    //     if(data.show.image){
    //         figure.innerHTML=`
    //         <img src=${data.show.image.original}/>
    //         <h2>${data.show.name}</h2>
    //         `
    //         list.appendChild(figure);
    //     }
     for(let data of datas){
        let figure = document.createElement('figure');

        figure.innerHTML = `
            <img src=${data.show.image.medium} alt="img">
            <br>
            <h2>${data.show.name}</h2>
            <h2>Language:${data.show.language} </h2>
            <h2>Rating:${data.show.rating.average} </h2>
            

        `

        list.appendChild(figure);
    }
    

    }
 