// Autore: Nicola Schianchi
const numImmaginiFetchate = 8
const nRighe = 2;

function caricaAltreImg(){
    let msgErrore = document.getElementById("msgErrore");
    msgErrore.style.display = "none";
    let url = "https://dog.ceo/api/breeds/image/random/" + (numImmaginiFetchate > 50 ? "50" : numImmaginiFetchate);
    
    fetch(url)
    .then(
        promise => {
            if (promise.ok){
                return promise.json();
            }
        }
    )
    .then(
        result => {
            let arrMsg = result.message;
            creaCards(arrMsg);
        }
    )
    .catch(
        () => msgErrore.style.display = "block"
    )
}

function creaCards(arrURL){
    let container = document.getElementById("containerImg");
    for (let i = 0; i < nRighe; i++){
        var row = document.createElement("div");
        row.className = "row row-cols-1 row-cols-md-4 g-4 cards-top-space";
        for (let j = i * 4; j < (i * 4) + 4; j++){
            var col = document.createElement("div");
            col.className = "col";
            var card = document.createElement("div");
            card.className = "card";
            var img = document.createElement("img");
            img.className = "card-img-top rounded";
            img.alt = "Cane";
            img.src = arrURL[j];
            card.appendChild(img);
            col.appendChild(card);
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}
