// —— Platser ——
const places = [
  {id:"gamlastan", name:"Gamla stan", desc:"Kullerstensgator och historiska byggnader.", votes:32},
  {id:"skansen", name:"Skansen", desc:"Friluftsmuseum med nordiska djur.", votes:21},
  {id:"fotografiska", name:"Fotografiska", desc:"Fotomuseum med utsikt över staden.", votes:17},
  {id:"montelius", name:"Monteliusvägen", desc:"Vacker promenad med utsikt över Riddarfjärden.", votes:29},
  {id:"saluhall", name:"Östermalms saluhall", desc:"Anrik mathall med delikatesser.", votes:24},
  {id:"vasamuseet", name:"Vasamuseet", desc:"Skeppet Vasa – världens enda bevarade 1600-talsskepp.", votes:26},
  {id:"kungstradgarden", name:"Kungsträdgården", desc:"Park med körsbärsblom på våren.", votes:19},
  {id:"drottningholm", name:"Drottningholms slott", desc:"Kungligt slott på UNESCO:s världsarvslista.", votes:27}
];

// —— Render helpers ——
function render(){
  const grid = document.getElementById('cards');
  grid.innerHTML = '';
  for (const p of places){
    grid.appendChild(makeCard(p));
  }
}

function renderTop3(){
  const top = [...places].sort((a,b)=>b.votes-a.votes).slice(0,3);
  const grid = document.getElementById('top3List');
  grid.innerHTML = '';
  for (const p of top){
    grid.appendChild(makeCard(p));
  }
}

function makeCard(place){
  const tmpl = document.getElementById('cardTemplate');
  const node = tmpl.content.cloneNode(true);

  node.querySelector('.title').textContent = place.name;
  node.querySelector('.desc').textContent = place.desc;
  node.querySelector('.meta').textContent = `Röster: ${place.votes}`;
  node.querySelector('.count').textContent = place.votes;

  const btn = node.querySelector('.upvote');
  btn.addEventListener('click', ()=>{
    place.votes++;
    render();
    renderTop3();
  });

  return node;
}

// —— Init ——
window.addEventListener('DOMContentLoaded', ()=>{
  render();
  renderTop3();
});
