let id = 1;
let infoUrl = 'people';
let imgUrl = 'characters';

function getInfo() {
    axios.get(`https://swapi.dev/api/${infoUrl}/${id}`)    
    .then(res => {      
      console.log('Fetch info:', res);    
      showData(res)
    })
    .catch(err => {
        console.log(err)
        console.log(err.message)
        errHandlingData(err)
    })
    axios.get(`https://starwars-visualguide.com/assets/img/${imgUrl}/${id}.jpg`)    
    .then(res => {
      showImage(res)
    })
    .catch(err => {
        console.log(err)
        errHandlingImg(err)
    })
};

function errHandlingData(){
    document.getElementById('data').innerHTML = `
    <h3>Information is not found</h3>`;
}

function errHandlingImg(){
    document.getElementById('images').innerHTML = `<p>Image is not found</p>`;
}

function getPeople() {
    id = 1;
    infoUrl = 'people';
    imgUrl = 'characters';
    getInfo();
};

function getPlanets() {
    id = 1;
    infoUrl = 'planets';
    imgUrl = 'planets';
    getInfo();
};

function getStarships() {
    id = 1;
    infoUrl = 'starships';
    imgUrl = 'starships';
    getInfo();
};

function next(){
        id++;
        getInfo();
};

//Output in browserconst showings = {};
function showImage(){
    document.getElementById('images').innerHTML = `
    <img src="https://starwars-visualguide.com/assets/img/${imgUrl}/${id}.jpg" alt="">
    `;
};

function showData(res){
    if(infoUrl === 'people') {
        infoOutput = `
            <li>Gender: <span>${res.data.gender}</span></li><hr>
            <li>Birth Year: <span>${res.data.birth_year}</span></li><hr>
            <li>Eye color: <span>${res.data.eye_color}</span></li>
        `
    } else if(infoUrl === 'planets') {
        infoOutput = `
            <li>Population: <span>${res.data.population}</span></li><hr>
            <li>Diameter: <span>${res.data.diameter}</span></li><hr>
            <li>Terrain: <span>${res.data.terrain}</span></li>
        `
    } else {
        infoOutput = `
            <li>Manufacturer: <span>${res.data.manufacturer}</span></li><hr>
            <li>Cost in credits: <span>${res.data.cost_in_credits}</span></li><hr>
            <li>Max atmosphering speed: <span>${res.data.max_atmosphering_speed}</span></li>
        `
    }
    
    document.getElementById('data').innerHTML = `
    <h3>${res.data.name}</h3>
        <ul>
            ${infoOutput}
        </ul>
    `;
};

//Event listeners
document.getElementById('btn').addEventListener('click', next);
document.getElementById('people').addEventListener('click', getPeople);
document.getElementById('planets').addEventListener('click', getPlanets);
document.getElementById('starships').addEventListener('click', getStarships);

