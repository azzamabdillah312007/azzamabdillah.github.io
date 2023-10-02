// bagian API
const wheatherApi = 'https://api.weatherapi.com/v1/forecast.json?key=7f09507be4f54bfcacd74927230110&&days=3';

// bagian script HTML
const body = document.querySelector('body');
body.innerHTML = `

<header>
    <div class="content">
        <button class = "menuSubmit"><i class="ri-menu-line"></i></button>
        <input type="text" placeholder="Enter the city names" required id="input">
        <button class = "btnSubmit"><i class="ri-search-line"></i></button>
        <button class = "resetSubmit"><i class="ri-loop-left-line"></i></button>
    </div>
</header>
<div id="sidebar">
    <ul>
        <a href="#about"><li>About</li></a>
        <a href="#skill"><li>Skill</li></a>
        <a href="#skill"><li>Skill</li></a>
    </ul>
</div>

<div class = 'isi'></div>
 
`;  




// bagian search
const isi = document.querySelector('.isi')
const btnSearch = document.querySelector('.btnSubmit');
btnSearch.onclick = () => {
    fetch(`${wheatherApi}&q=${input.value}`)
    .then(res => res.json())
    .then(data => {
        let hari;
        if(data.current.is_day === 1){
            hari = 'Afternoon'
        }else{
            hari = 'Evening'
        }
        console.log(data);
        isi.innerHTML = `
        <div class = 'date'>
            <div class = 'city'>
               <p>${data.forecast.forecastday[0].date}</p>
               <h1>${data.location.name}</h1>
               <h3>${data.current.condition.text}</h3>
               <p>${data.current.feelslike_c}c°</p>
            </div>
        </div>
        <div class = 'benner'>
            <div class ="text">
               <i class="ri-time-line"></i>
               <p>phases of the moon and sun</p>
            </div>
            <div class ="fill">
              <div class ="box moonrise">
                 <span>moonrise</span>
                 <i class="ri-moon-cloudy-fill"></i>
                <p>${data.forecast.forecastday[0].astro.moonrise}</p>
              </div>

              <div class ="box moonset">
                <span>moonset</span>
                <i class="ri-moon-cloudy-fill"></i>
                <p>${data.forecast.forecastday[0].astro.moonset}</p>
              </div>

              <div class ="box sunrise">
                <span>sunrise</span>
                <i class="ri-sun-cloudy-fill"></i>
                <p>${data.forecast.forecastday[0].astro.sunrise}</p>
              </div>

              <div class ="box sunset">
                <span>sunset</span>
                <i class="ri-sun-cloudy-fill"></i>
                <p>${data.forecast.forecastday[0].astro.sunset}</p>
              </div>

            </div>
         </div>
        `
    }) 

}

// bagian sidebar
const btnSidebar =  document.querySelector('.menuSubmit');
const sideBar = document.querySelector('#sidebar')
btnSidebar.addEventListener('click' , ()=>{
   sideBar.classList.toggle('geser');
   sideBar.style.left = "0" 
});



   

 


