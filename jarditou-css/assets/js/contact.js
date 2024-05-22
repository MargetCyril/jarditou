function checkform() {
    let filtre1 = new RegExp(/^[a-z]+$/);
    let filtre2 = new RegExp(/^[0-9]{5}$/);
    let filtre3 = new RegExp(/^[a-z0-9.-]+@[a-z0-9.-]{2}.[a-z]{2,4}$/);
    let filtre4 = new RegExp(/^[0-9]+\/[0-9]+\/[0-9]+$/)
    let filtre5 = new RegExp(/^[a-zA-Z0-9]+$/)
    let nom = document.getElementById("nom").value;
    soc = filtre1.test(nom);
    let prenom = document.getElementById("prenom").value;
    prenom = filtre1.test(prenom);
    /*     let sexe = document.getElementById("****").value; 
    sexe = ***.test(sexe)*/
    let date = document.getElementById("date").value;
    date = filtre4.test(date)
    let postal = document.getElementById("code_postal").value;
    postal = filtre2.test(postal);
    let adresse = document.getElementById("adresse").value;
    adresse = filtre5.text(adresse)
    let ville = document.getElementById("ville").value;
    ville = filtre1.test(ville);
    let mail = document.getElementById("email").value;
    mail = filtre3.test(mail);
    console.log(mail)
    if (nom && prenom && date && postal && adresse && ville && mail) {
        console.log("ok")
        return true
    }
    if (nom == false) {
        document.getElementById("erreur_nom").innerHTML = "champ incorrect"
    }
    if (prenom == false) {
        document.getElementById("erreur_prenom").innerHTML = "champ incorrect"        
    }
    if (date == false) {
        document.getElementById("erreur_date").innerHTML = "champ incorrect"
    }
    if (postal == false) {
        document.getElementById("erreur_postal").innerHTML = "champ incorrect"
    }
    if (adresse == false) {
        document.getElementById("erreur_adresse").innerHTML = "champ incorrect"
    }
    if (ville == false) {
        document.getElementById("erreur_ville").innerHTML = "champs incorrect"
    }
    if (mail == false) {
        document.getElementById("erreur_mail").innerHTML = "champ incorrect"
    }
}