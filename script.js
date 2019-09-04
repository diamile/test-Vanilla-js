//creation de ma class Product
class Product{

    //creation du constructeur en lui passant les differentes propriétés
    constructor(name,img,price,description){
        this.name=name;
        this.img=img;
        this.price=price;
        this.description=description;
    }
}




//Création des differentes instances (product) à partir du constructeur
const product1 = new Product ("Vase en terre cuiste","images/vase.jpg",23.20,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt");
const product2 = new Product ("Lampe de chevet","images/lampe.jpg",34.10,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt");
const product3 = new Product ("Lot de bracelet","images/bracelet.jpg",13.20,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt");
const product4 = new Product ("Style bic","images/stylo.jpg",2.05,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt");
const product5 = new Product ("Mug à thé","images/tasse.jpg",7.10,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt");
const product6 = new Product ("Minitel","images/minitel.jpg",17.25,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt");
const product7 = new Product ("1 Chaussure","images/chaussure.jpg",94.33,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt");
const product8 = new Product ("Smartphone Huawei","images/smartphone.jpg",61.21,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt");
const product9 = new Product ("Souris sans fil","images/souris.jpg",1.10,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt");
const product10 = new Product ("Déodorant toilette","images/airwicks.jpg",11.33,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt");


//je regroupe tous mes instances dans un tableau afin de l'a boucler ce qui me permettra de les afficher facilement dans ma vue
const datas=[product1,product2,product3,product4,product5,product6,product7,product8];


//creation de ma fonction createDom qui me permer de boucler sur mon array et en creaant en méme temps mon dom



function createDom(){
   //boucle sur mon array
    datas.forEach(myFunction);
    
    function myFunction(item, index) {
    
    //creation de mes balises img
    var img = document.createElement("img");
    
    img.src = item.img;
     
    //creation d'elements div
    const divChild=document.createElement('div');
    divChild.setAttribute('class','col-md-3');

    //creation d'elements div
    const content=document.createElement('div');
    content.setAttribute('class','card mb-4 shadow-sm');

    //creation de span contenant les prix
    const priceContainer2=document.createElement('span');
    priceContainer2.setAttribute('class','net_value');
    
    //prix hors taxe
    const netValue=document.createTextNode(item.price+''+' €HT');

    //je stock le prix hors taxe dans mon span
    priceContainer2.appendChild(netValue);

    //creation d'un span pour le prix avec taxe
    const priceContainer1=document.createElement('span');
    priceContainer1.setAttribute('class','brute_value');

    //prix hors taxes
    const bruteValue=document.createTextNode(item.price+item.price*0.2+''+' €TTC');
    
    //stockage du prix hors taxe dans dans un span
    priceContainer1.appendChild(bruteValue);

   
    const container=document.createElement('div');
    container.setAttribute('class','price_Container');

    //creation d'un conteneur qui contiendra les deux prix
    container.appendChild(priceContainer1);
    container.appendChild(priceContainer2);

    //cette container sera stocker dans mon content
    content.appendChild(container);

    divChild.appendChild(content);

   //inclusion de ma balise img dans content
    content.appendChild(img);

    //conteneur qui contiendra les infos concernant le product
    const body=document.createElement('div');
    body.setAttribute('class','card-body');
     
    //creation de mon titre
    const h1=document.createElement('h2');
    h1.setAttribute('class','title_product');
    const title=document.createTextNode(item.name);
    h1.appendChild(title);
    body.appendChild(h1);

    //creation d'une balise p pour la description du produit
    const description=document.createElement('p');
    description.setAttribute('class','card-text content_product');
    const text=document.createTextNode(item.description);
    description.appendChild(text);

    body.appendChild(description);

     //creation de mon boutton ajout au panier
    const button = document.createElement("button");
    button.setAttribute('class','ajout_panier');
    button.innerHTML = "Ajouter au panier";

    body.appendChild(button);

    content.appendChild(body);


    //inclusion de les autres balise dans mon contneur row
    document.getElementById('row').appendChild(divChild);

    
    }
}

createDom();


const asc=document.getElementById('asc');
const desc=document.getElementById('desc');


//click pour afficher les production par prix croissant
asc.addEventListener('click',

()=>{

    //trie par ordre croissant des prix
    datas.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

  
    datas.forEach(myFunction);
    
    function myFunction(item, index) {
    //creation de mes balises img
    var img = document.createElement("img");
    
    img.src = item.img;
     
    //creation d'elements div
    const divChild=document.createElement('div');
    divChild.setAttribute('class','col-md-3');

    //creation d'elements div
    const content=document.createElement('div');
    content.setAttribute('class','card mb-4 shadow-sm');

    //creation de span contenant les prix
    const priceContainer2=document.createElement('span');
    priceContainer2.setAttribute('class','net_value');
    
    //prix hors taxe
    const netValue=document.createTextNode(item.price+''+' €HT');

    //je stock le prix hors taxe dans mon span
    priceContainer2.appendChild(netValue);

    //creation d'un span pour le prix avec taxe
    const priceContainer1=document.createElement('span');
    priceContainer1.setAttribute('class','brute_value');

    //prix hors taxes
    const bruteValue=document.createTextNode(item.price+item.price*0.2+''+' €TTC');
    
    //stockage du prix hors taxe dans dans un span
    priceContainer1.appendChild(bruteValue);

   
    const container=document.createElement('div');
    container.setAttribute('class','price_Container');

    //creation d'un conteneur qui contiendra les deux prix
    container.appendChild(priceContainer1);
    container.appendChild(priceContainer2);

    //cette container sera stocker dans mon content
    content.appendChild(container);

    divChild.appendChild(content);

   //inclusion de ma balise img dans content
    content.appendChild(img);

    //conteneur qui contiendra les infos concernant le product
    const body=document.createElement('div');
    body.setAttribute('class','card-body');
     
    //creation de mon titre
    const h1=document.createElement('h2');
    h1.setAttribute('class','title_product');
    const title=document.createTextNode(item.name);
    h1.appendChild(title);
    body.appendChild(h1);

    //creation d'une balise p pour la description du produit
    const description=document.createElement('p');
    description.setAttribute('class','card-text content_product');
    const text=document.createTextNode(item.description);
    description.appendChild(text);

    body.appendChild(description);

     //creation de mon boutton ajout au panier
    var button = document.createElement("button");
    button.setAttribute('class','ajout_panier');
    button.innerHTML = "Ajouter au panier";

    body.appendChild(button);

    content.appendChild(body);
    
    document.getElementById('row').innerHTML=document.getElementById('ascs').appendChild(divChild);
    
    

    }
   
}
);

//affichage par prix decroissant au click

desc.addEventListener('click',
   
    ()=>{
    //trie par ordre decroissant des prix
    datas.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  
    datas.forEach(myFunction);
    
    function myFunction(item, index) {
   
    //creation de mes balises img
    var img = document.createElement("img");
    
    img.src = item.img;
     
    //creation d'elements div
    const divChild=document.createElement('div');
    divChild.setAttribute('class','col-md-3');

    //creation d'elements div
    const content=document.createElement('div');
    content.setAttribute('class','card mb-4 shadow-sm');

    //creation de span contenant les prix
    const priceContainer2=document.createElement('span');
    priceContainer2.setAttribute('class','net_value');
    
    //prix hors taxe
    const netValue=document.createTextNode(item.price+''+' €HT');

    //je stock le prix hors taxe dans mon span
    priceContainer2.appendChild(netValue);

    //creation d'un span pour le prix avec taxe
    const priceContainer1=document.createElement('span');
    priceContainer1.setAttribute('class','brute_value');

    //prix hors taxes
    const bruteValue=document.createTextNode(item.price+item.price*0.2+''+' €TTC');
    
    //stockage du prix hors taxe dans dans un span
    priceContainer1.appendChild(bruteValue);

   
    const container=document.createElement('div');
    container.setAttribute('class','price_Container');

    //creation d'un conteneur qui contiendra les deux prix
    container.appendChild(priceContainer1);
    container.appendChild(priceContainer2);

    //cette container sera stocker dans mon content
    content.appendChild(container);

    divChild.appendChild(content);

   //inclusion de ma balise img dans content
    content.appendChild(img);

    //conteneur qui contiendra les infos concernant le product
    const body=document.createElement('div');
    body.setAttribute('class','card-body');
     
    //creation de mon titre
    const h1=document.createElement('h2');
    h1.setAttribute('class','title_product');
    const title=document.createTextNode(item.name);
    h1.appendChild(title);
    body.appendChild(h1);

    //creation d'une balise p pour la description du produit
    const description=document.createElement('p');
    description.setAttribute('class','card-text content_product');
    const text=document.createTextNode(item.description);
    description.appendChild(text);

    body.appendChild(description);

     //creation de mon boutton ajout au panier
    var button = document.createElement("button");
    button.setAttribute('class','ajout_panier');
    button.innerHTML = "Ajouter au panier";

    body.appendChild(button);

    content.appendChild(body);
    document.getElementById('row').innerHTML=document.getElementById('descs').appendChild(divChild);
    
    
    }
   
   
}
);

