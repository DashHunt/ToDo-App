function AquiringData(string){
    console.log(string)
}

function SomeDeleteRowFunction() {

    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    let nome = tr.textContent

    console.log(nome);

    tr.parentNode.removeChild(tr);
}



