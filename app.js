


const result = document.querySelector('.resultat');

function ajoutNum(num){
      result.innerHTML = result.innerHTML + num;
    //   console.log(result);
      
}
function equal(){
    var exp =  result.innerHTML;
    if(exp){
        result.innerHTML = eval(exp)
    }
}

function clean(){
    result.innerHTML = "";
    // console.log(result);    
}

function back(){
    var exp =  result.innerHTML;
    result.innerHTML = exp.substring(0, exp.length-1);
}

