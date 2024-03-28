const zoneHero = document.querySelector(".hero")
const zoneNosEscape = document.querySelector(".nos-escape")
const zoneAPropos = document.querySelector(".a-propos")
const zoneAvis = document.querySelector(".conteneur-avis")

fetch("./escape-game.json")
.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data)
    templateHero(data.entreprise)
    templateCartesEscapes(data.entreprise.activites)
    templateAPropos(data.entreprise.avantagesClients)
    templateAvis(data.entreprise.temoignages)
})

/**
 * Cette fonction permet de remplir la section "Hero" avec les données entrées en paramêtres
 * @param {Array} racine 
 */
function templateHero(racine){
    zoneHero.innerHTML=`
    <div>
        <img src="images/Eye.png" alt="image d'un oeil">
        <h1>${racine.nomCommercial}</h1>
        <p>${racine.phraseAccroche}</p>
        <a href="" title="Réservez votre aventure" class="bouton">${racine.texteAppelAction}</a>
    </div>
    `
}

/**
 * Cette fonction permet de récupérer les différentes activités et de remplir la section "Nos escape game"
 * @param {Array} racine 
 */
function templateCartesEscapes(racine){
    racine.forEach(e => {
        zoneNosEscape.innerHTML+=`
        <div class="carte-escape">
            <div>
                <img src="images/${e.image}" alt="Image de l'escape game" class="img-responsive">
            </div>
            <div class="carte-escape-desc flex">
                <div>
                    <h3>${e.nom}</h3>
                    <p>${e.description}</p>
                </div>
                <a href="" title="Réservez cette salle" class="bouton">Réservez cette salle</a>
            </div>
        </div>
        `
    });
}

/**
 * Cette fonction permet de remplir la zone "A propos" avec les différents avantages
 * @param {Array} racine 
 */
function templateAPropos(racine){
    racine.forEach(e =>{
        zoneAPropos.innerHTML+=`
        <div class="flex justify-center">
            <img src="images/${e.picto}" alt="Icon carte">
            <p>${e.texte}</p>
        </div>
        `
    })
}

/**
 * Cette fonction permet de récupérer les différents avis clients et de remplir la section "Avis"
 * @param {Array} racine 
 */
function templateAvis(racine){
    racine.forEach(e =>{
        nbEtoiles = nombreEtoiles(e.note)
        zoneAvis.innerHTML+=`
        <!-- Carte avis -->
        <div class="carte-avis">
            <!-- Le client -->
            <div class="flex justify-between client">
                <div class="photo-client">
                    <img src="./images/${e.photo}" alt="Photo client(e)" class="img-responsive">
                </div>
                <div class="descr-client">
                    <p class="bold">${e.prenom}</p>
                    <p>${e.typeExperience}</p>
                    <!-- Div étoiles -->
                    <div>
                        <p class="etoiles">${nbEtoiles}</p>
                    </div>
                </div>
            </div><!-- Fin Le client -->
            <p>${e.commentaire}</p><!-- L'avis -->
        </div><!-- Fin carte avis -->
        `
    })
}

/**
 * Cette fonction renvoie une chaine d'étoiles en fonction du nombre d'étoiles en paramêtre
 * @param {Number} racine 
 * @returns String
 */
function nombreEtoiles(racine){
    let nbEtoiles = ""
    if (racine===1){
        nbEtoiles = "★☆☆☆☆"
    }else if (racine===2) {
        nbEtoiles = "★★☆☆☆"
    }else if (racine===3) {
        nbEtoiles = "★★★☆☆"
    }else if (racine===4) {
        nbEtoiles = "★★★★☆"
    }else{
        nbEtoiles = "★★★★★"
    }
    return nbEtoiles
}
console.log(nombreEtoiles(3))