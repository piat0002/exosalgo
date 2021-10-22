var lol = 'lkol'
// C'est en js car je connais mieux les methode de string dans ce language et j'ai pas internet
// je ne suis pas fort en regxep surtout sans internet donc j'utilise des split et join
function calculateFromString0(str){
    
    //commencons par les multplication en sperant tous  sauf les multiplication
    var Mresultat  = str.split(/[.\+-/_]/);
    //recup le tableau
    var thetableau = new Array
    Mresultat.forEach(element => {
        thetableau.push(element.split('*'))

    });

    //console.log(thetableau);


}

//faire une fabrication de tableau
function calculateFromString(str){
    var opetableau = str.split(/[0-9]/).join('').split('')
    var chiffretableau  = str.split(/[.\*+-/_]/);

    //console.log(opetableau)
    //console.log(chiffretableau)
    var tableauexpression = []
    for (let i = 0; i < chiffretableau.length; i++) {
        tableauexpression.push(chiffretableau[i])
        if(i < opetableau.length){
            tableauexpression.push(opetableau[i])
        }
    }
    console.log(tableauexpression)

    //commence par multiplication
    var Mtableau = []
    for (let i = 0; i < tableauexpression.length; i++) {
        if(tableauexpression[i] == '*'){
            Mtableau.pop()
            Mtableau.push(tableauexpression[i-1] * tableauexpression[i+1])
            //evite un bug car la boucle va repasser
            i++
        }else{
            Mtableau.push(tableauexpression[i])
        }
        
    }
    tableauexpression = Mtableau
    //console.log(Mtableau)
    
    Mtableau = []
    for (let i = 0; i < tableauexpression.length; i++) {
        if(tableauexpression[i] == '/'){
            Mtableau.pop()
            Mtableau.push(tableauexpression[i-1] * tableauexpression[i+1])
            //evite un bug car la boucle va repasser
            i++
        }else{
            Mtableau.push(tableauexpression[i])
        }
        
    }
    tableauexpression = Mtableau

    Mtableau = []
    for (let i = 0; i < tableauexpression.length; i++) {
        if(tableauexpression[i] == '+'){
            Mtableau.pop()
            Mtableau.push(tableauexpression[i-1] * tableauexpression[i+1])
            //evite un bug car la boucle va repasser
            i++
        }else{
            Mtableau.push(tableauexpression[i])
        }
        
    }

    tableauexpression = Mtableau
    Mtableau = []
    for (let i = 0; i < tableauexpression.length; i++) {
        if(tableauexpression[i] == '-'){
            Mtableau.pop()
            Mtableau.push(tableauexpression[i-1] * tableauexpression[i+1])
            //evite un bug car la boucle va repasser
            i++
        }else{
            Mtableau.push(tableauexpression[i])
        }
        
    }
    tableauexpression = Mtableau
    return tableauexpression[0]
}

str = "21+5*2*81-15/2*4";
calculateFromString0(str)
console.log(calculateFromString(str))