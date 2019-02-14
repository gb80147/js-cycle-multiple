
//ciclo di numeri da 0 a 100
for ( var i=0; i<=100; i++ ){

  //se il numero generato, diviso per 5 dà come risultato uguale(==) a 0, allora stampi
  if(i%5==0){
    console.log(i);
    document.getElementById("mul5").innerHTML += i + " - " //stampa nell'ID scritto nelle parentesi

  }
  //se il numero generato, diviso per 7 dà come risultato uguale(==) a 0, allora stampi
  if(i%7==0){
    console.log(i);
    document.getElementById("mul7").innerHTML += i + " - " //stampa nell'ID scritto nelle parentesi

//se il numero generato, diviso per 5 e per 7 dà come risultato diverso da 0(!=) allora stampi
  }else if(i%5!=0 && i%7!=0) {
    console.log(i);
    document.getElementById("other").innerHTML += i + " - " //stampa nell'ID scritto nelle parentesi

  }
}
