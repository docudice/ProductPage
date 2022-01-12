var img =  document.getElementById('ShowsPicture');
var imgLightBox =  document.getElementById('ShowsPicture2');
var btn1 = document.getElementsByClassName('ShowsPicture1');
let NumberToAdd = 0;
var NumberAffichage = document.getElementById('NumberSection');
let Panier = document.getElementById('PanierAreaPlace');
let ModalFenetre = document.getElementById('modalPage');
let EmptyItemInPanier = false;
let EmptyText;

function ADD(i){
    NumberToAdd += i;
    Actualise();
}

function LESS(i){
    NumberToAdd -= i;
    if(NumberToAdd <= 0){
        NumberToAdd = 0;
    }
    Actualise();
}


function Actualise(){
  NumberAffichage.value = NumberToAdd;
}
function ChangePicture1(imagename){
    img.src = imagename;
}


function ChangePicture2(imagename){
    imgLightBox.src = imagename;
}



function AddInPanier (){
    delToPanier();
   if(NumberToAdd > 0){
    let total = NumberToAdd*125;
    Panier.innerHTML += "<div class='itemPanier'><img src='images/image-product-1-thumbnail.jpg' alt='image'><div class='TextToArticle'>Fall Limited Edition<br> Sneakers<br> $125.00 x "+ NumberToAdd +"<br> <h2>$"+ total+".00&ensp;&ensp;<input type='button' OnClick='delToPanier()'></h2></div></div>";
    NumberToAdd = 0;
    CommanderButton();
    Actualise();
}
}

function delToPanier(){

    while (Panier.firstChild) {
        Panier.removeChild(Panier.firstChild);
      }
}


function CheckPanier(){
 
        EmptyText= Panier.innerHTML = "<h4 class='BasePanierText'>Your card is Empty<h4>";

}

CheckPanier();

function CommanderButton (){
    Panier.innerHTML += "<br><br>&ensp;&ensp;&ensp;&ensp;<input type='button' class='CommandeButton' value='Checkout'>"
}

function ZoomLabelForPicture(){
    ModalFenetre.style.display = "block";
}

function CloseModalFenetre(){
    ModalFenetre.style.display = "none";
}

