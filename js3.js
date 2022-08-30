


function change(f){
    f=(5*(f-32))/9;
    
    return f;

}
// document.write(change(98.6));

document.getElementById('de').innerHTML="to the tempreture is " + Math.round(change(89))  + "C";