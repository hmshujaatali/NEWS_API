var searchData=document.getElementById('taxt')
var news = document.getElementById('main')
function getData(){
  fetch(`https://newsapi.org/v2/everything?q=${searchData.value}&from=2021-07-29&sortBy=publishedAt&apiKey=16bce94d64464f04808b8eeb474d8e34`)
  .then(response => response.json())
  .then(json => setData(json))
}


  function setData(data){
    news.innerHTML = ""
    console.log(data)

    for(var i=0; i<data.articles.length; i++){
    
     let card = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
          <p class="card-text">${data.articles[i].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Published at: ${data.articles[i].publishedAt}</li>
          <li class="list-group-item">Author: ${data.articles[i].author}</li>
          <li class="list-group-item">Source: ${data.articles[i].source.name}</li>
        </ul>
        
      </div>`
        news.innerHTML += card
    }
  }