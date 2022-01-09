function validateform(){
    let name=document.imiona.name.value;
    let nazwisko=document.imiona.nazwisko.value;
    if (name =='' || nazwisko.length<6){
        alert("Haslo musi miec przynajmniej 6 znaków");
    }
}