'use strict';
let flowers = [
  'Alstroemerias',
  'Gardenias',
  'Orchids',
  'Roses',
  'Sunflowers',
  'Tulips',
  'Peonies'];

Flower.allFlower= [];
Flower.a;

function Flower (name, category, season){
  this.name = name;
  this.category = category;
  this.season = season;
  Flower.allFlower.push(this);
  localStorage.setItem(JSON.stringify('flowers',this));
}

const formElement = document.getElementById('form');
formElement.addEventListener('submit', handleSubmit);

function handleSubmit(){
  event.preventDefault();
  let pressed = event.target.id;
  if(pressed === 'flowerSave'){
    let flowersName = event.target.flowersName.value;
    let selectedCategory = event.target.flowerCategory.value;
    let flowerSeason = event.target.flowerSeason.value;
    new Flower(flowersName,selectedCategory, flowerSeason);
  }
  else{
    localStorage.clear();
  }


}

const catList = document.getElementById('flowerCategory');

Flower.prototype.fillCategoryList = function(){
  console.log(1);
  for(let i = 0 ; flowers.length; i++){
    const option = document.createElement('option');
    option.setAttribute('value',flowers[i]);
    option.value=flowers[i];
    option.innerHTML= flowers[i];
    catList.appendChild(option);
  }
};

const tableElement = document.getElementById('table');

Flower.prototype.renderTable= function(){
  for(let i = 0;Flower.allFlower.length; i++ ){
    const tr = document.createElement('tr');
    tableElement.appendChild(tr);

    const td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.textContent = `${Flower.allFlower.flowers[i]}.jpeg`;

    const td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = Flower.allFlower.flowers[i].category;

    const td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.textContent = Flower.allFlower.flowers[i].season;
  }



};

Flower.prototype.getFromLS = function(){
  let restorData = JSON.parse(localStorage.getItem('flowers'));
  if (restorData.length>0){
    for(let i = 0; Flower.allFlower.length; i++){
      new Flower(restorData[i].name,restorData[i].category,restorData[i].season);
    }
  }

};

Flower.allFlower.fillCategoryList();
Flower.prototype.getFromLS();
Flower.prototype.renderTable();