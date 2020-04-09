//   let test = document.getElementsByClassName('nbr')
//   for (let i = 0; i < test.length; i++){
//       test[i].src = "images/image" + Math.floor(Math.random() * 5) + ".gif"
//     }


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