/////////////////////////////////////////////////////////////////////////////////////
// pour mettre de manière aléatoir les cartes sans qu'il y ai plus de deux répétition
function shuffle(arr) {
    let ctr = arr.length // correspond a la longueur du tableau "table"
    let temp
    let index

    while (ctr > 0) { // tanque le tableau renferme des éléments
        index = Math.floor(Math.random() * ctr) // retourn un entier aléatoire contenu dans le tableau 
        ctr--  
        temp = arr[ctr]
        arr[ctr] = arr[index]
        arr[index] = temp
    }
    return arr
}

let table = ["0", "1", "2", "3", "4", "5"]
let result1 = shuffle(table)
console.log(result1)

for (let i = 0; i < result1.length; i++){
    document.getElementById("nbr0").src = "images/image" + result1[0] + ".gif"
    document.getElementById("nbr1").src = "images/image" + result1[1] + ".gif"
    document.getElementById("nbr2").src = "images/image" + result1[2] + ".gif"
    document.getElementById("nbr3").src = "images/image" + result1[3] + ".gif"
    document.getElementById("nbr4").src = "images/image" + result1[4] + ".gif"
    document.getElementById("nbr5").src = "images/image" + result1[5] + ".gif"
}

let result2 = shuffle(table)
console.log(result2)

for (let i = 0; i < result2.length; i++){
    document.getElementById("nbr00").src = "images/image" + result2[0] + ".gif"
    document.getElementById("nbr11").src = "images/image" + result2[1] + ".gif"
    document.getElementById("nbr22").src = "images/image" + result2[2] + ".gif"
    document.getElementById("nbr33").src = "images/image" + result2[3] + ".gif"
    document.getElementById("nbr44").src = "images/image" + result2[4] + ".gif"
    document.getElementById("nbr55").src = "images/image" + result2[5] + ".gif"
}


let tableau = []
//////////////////////////////
// découvrement des cartes
function decouvreUser(value)
{
    if (value == 0){
        unie0.style.display = "none"
        tableau.push(document.getElementById("nbr0").src)
        tableau.push(unie0)
    } else if (value == 1){
        unie1.style.display = "none"
        tableau.push(document.getElementById("nbr1").src)
        tableau.push(unie1)
    } else if (value == 2){
        unie2.style.display = "none"
        tableau.push(document.getElementById("nbr2").src)
        tableau.push(unie2)
    } else if (value == 3){
        unie3.style.display = "none"
        tableau.push(document.getElementById("nbr3").src)
        tableau.push(unie3)
    } else if (value == 4){
        unie4.style.display = "none"
        tableau.push(document.getElementById("nbr4").src)
        tableau.push(unie4)
    } else if (value == 5){
        unie5.style.display = "none"
        tableau.push(document.getElementById("nbr5").src)
        tableau.push(unie5)
    } else if (value == 6){
        unie6.style.display = "none"
        tableau.push(document.getElementById("nbr00").src)
        tableau.push(unie6)
    } else if (value == 7){
        unie7.style.display = "none"
        tableau.push(document.getElementById("nbr11").src)
        tableau.push(unie7)
    } else if (value == 8){
        unie8.style.display = "none"
        tableau.push(document.getElementById("nbr22").src)
        tableau.push(unie8)
    } else if (value == 9){
        unie9.style.display = "none"
        tableau.push(document.getElementById("nbr33").src)
        tableau.push(unie9)
    } else if (value == 10){
        unie10.style.display = "none"
        tableau.push(document.getElementById("nbr44").src)
        tableau.push(unie10)
    } else if (value == 11){
        unie11.style.display = "none"
        tableau.push(document.getElementById("nbr55").src)
        tableau.push(unie11)
    }

console.log(tableau)

timetime()
}


function timetime()
{
    setTimeout(verif, 2000)
}




//////////////////////////////////////////////
// comparaison avec les deux cartes retournées
function verif()
{


    if (tableau[0] != tableau[2]){
        tableau[1].style.display = "block"
        tableau[3].style.display = "block"
        tableau.splice(0, 5)
    } else {
        tableau[1].style.display = "none"
        tableau[3].style.display = "none"
        tableau.splice(0, 5)

    }


    // let nbr1 = document.getElementById('nbr0').src
    // let nbr2 = document.getElementById('nbr1').src
    // let nbr3 = document.getElementById('nbr2').src
    // let nbr4 = document.getElementById('nbr3').src
    // let nbr5 = document.getElementById('nbr4').src
    // let nbr6 = document.getElementById('nbr5').src
    // let nbr11 = document.getElementById('nbr00').src
    // let nbr22 = document.getElementById('nbr11').src
    // let nbr33 = document.getElementById('nbr22').src
    // let nbr44 = document.getElementById('nbr33').src
    // let nbr55 = document.getElementById('nbr44').src



    
    // if (nbr0 == nbr00){
    //     unie0.style.display = "none"
    //     unie6.style.display = "none"
    // } else {
    //     unie0.style.display = "block"
    //     unie6.style.display = "block"
    // }

    // if (nbr1 == nbr11){
    //     unie1.style.display = "none"
    //     unie7.style.display = "none"
    // } else {
    //     unie1.style.display = "block"
    //     unie7.style.display = "block"
    // }

    // if (nbr2 == nbr22){
    //     unie2.style.display = "none"
    //     unie8.style.display = "none"
    // } else {
    //     unie2.style.display = "block"
    //     unie8.style.display = "block"
    // }

    // if (nbr3 == nbr33){
    //     unie3.style.display = "none"
    //     unie9.style.display = "none"
    // } else {
    //     unie3.style.display = "block"
    //     unie9.style.display = "block"
    // }

    // if (nbr4 == nbr44){
    //     unie4.style.display = "none"
    //     unie10.style.display = "none"
    // } else {
    //     unie4.style.display = "block"
    //     unie10.style.display = "block"
    // }

    // if (nbr5 == nbr55){
    //     unie5.style.display = "none"
    //     unie11.style.display = "none"
    // } else {
    //     unie5.style.display = "block"
    //     unie11.style.display = "block"
    // }






    // if ((recup == 0) && (recup == )){
    //     unie0.style.display = "block"
    // }
    // si nom de l'image != du nom de l'image
    // .style.display = "block"
}