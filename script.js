
const countriesContainer = document.querySelector('.rightone');
const countriesContainer2 = document.querySelector('.righttwo');
const countriesContainer3 = document.querySelector('.rightthree');

const renderCountry = function(data){
        const html =`
        <article class="country">
        <img class="country_img" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}"/>
        <div class="country_data">
            <h3 class="country_name">${data.original_title}</h3>
            
            
        </div>
        </article>` ;
        countriesContainer.insertAdjacentHTML('beforeend',
        html);
        countriesContainer.style.opacity = 1;
};
const renderCountrytwo = function(data){
    
    const html =`
    <article class="country">
    <img class="country_img" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}"/>
    <div class="country_data">
        <h3 class="country_name">${data.original_title}</h3>
        
        
    </div>
    </article>` ;
    countriesContainer2.insertAdjacentHTML('beforeend',
    html);
    countriesContainer2.style.opacity = 1;

    

};

const renderCountrythree = function(data){
    
  const html =`
  <article class="country">
  <img class="country_img" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}"/>
  <div class="country_data">
      <h3 class="country_name">${data.original_title}</h3>
      
      
  </div>
  </article>` ;
  countriesContainer3.insertAdjacentHTML('beforeend',
  html);
  countriesContainer3.style.opacity = 1;
};

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWI2YWRiNTVkNjUzZTIyOTY2YjU2YmI0MDIxYTYzMSIsInN1YiI6IjY0N2JmZjYzOTM4MjhlMDBiZjllYTY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tyV7tI7Lc0sUUUXxsd6rz9U-gpZOjD9-fj6w9bpsSRY'
    }
};

for(let i=0;i<4;i++){
  
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => renderCountry(response.results[i]))
    .catch(err => console.error(err));
}


for(let i=4;i<8;i++){  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => renderCountrytwo(response.results[i]))
  .catch(err => console.error(err));    
}

for(let i=8;i<12;i++){
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => renderCountrythree(response.results[i]))
  .catch(err => console.error(err));
}
