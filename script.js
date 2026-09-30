// Calculadora de Partidas Rankadas
let jogador1 = {
    vitorias: 20,
    derrotas: 2 
}

let jogador2 = {
    vitorias: 50,
    derrotas: 3 
}

let jogador3 = {
    vitorias: 36,
    derrotas: 2
}

let listaDeJogadores = [jogador1,jogador2]

for(let i = 0;  i < listaDeJogadores.length ; i++){
   console.log(retornaRank(listaDeJogadores[i].vitorias,
    listaDeJogadores[i].derrotas
        )
    )
}




function retornaRank (vitorias,derrotas){   // recebe vitórias
  

   let saldoDeVitorias = vitorias - derrotas  // calcula 
   let nivel = ""
    
   

        if (saldoDeVitorias < 10 ){     
            nivel = "Ferro";
        } else if (saldoDeVitorias <= 20 ) {
            nivel = "Bronze";
            
        } else if ( saldoDeVitorias <= 50 ) {
            nivel = "Prata";
            
        } else if ( saldoDeVitorias <= 80 ) {
            nivel = "Ouro";
            
        } else if ( saldoDeVitorias <= 90 ) {
            nivel = "Diamante";
            
        } else if ( saldoDeVitorias <= 100 ) {
            nivel = "Lendário";
            
        } else { 
            nivel = "Imortal";
            
        } 
     

    return  "O Herói tem de saldo de " +  saldoDeVitorias + " está no nível de " + nivel;
}

