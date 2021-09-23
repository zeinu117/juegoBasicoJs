class Jugador {
    vida = 100;
    chakra = 100;
    nombre = "";
    rasengan = 30;
    chidori = 25;
    ataqueBasico = 10;
    constructor(nombre){
        this.nombre = nombre;
    }

    curar(jugadorObjetivo){
        if (this.vida >= 100) {
            console.log('No se puede usar esta habilidad');
        } else {
            jugadorObjetivo.vida += 20;
            this.chakra -= 20;
        }
        this.status(jugadorObjetivo);
    }

    ataque(jugadorObjetivo){
        jugadorObjetivo.vida -= this.ataqueBasico;
        this.status(jugadorObjetivo);
    }

    habilidadn(jugadorObjetivo){
        if (this.chakra >= 30) {
            jugadorObjetivo.vida -= 45;
            this.chakra -= this.rasengan;
        }else{
            console.log('No hay chakra suficiente')
        }
        this.status(jugadorObjetivo);
    }

    habilidads(jugadorObjetivo){
        if (this.chakra >= 25) {
            jugadorObjetivo.vida -= 40;
            this.chakra -= this.chidori;
        } else {
            console.log('No hay chakra suficiente')
        }
        this.status(jugadorObjetivo);
    }

    revivir(jugadorObjetivo){
        if (this.vida <= 0) {
            jugadorObjetivo.vida += 30;
        }else{
            console.log('No se puede usar esta habilidad');
        }
        this.status(jugadorObjetivo);
    }
    recuperarChakra(jugadorObjetivo){
        if (this.chakra >= 100) {
            console.log('No se puede usar esta habilidad');
        } else {
            jugadorObjetivo.chakra += 20;
        }
        this.status(jugadorObjetivo);
    }
    status(jugadorObjetivo){
        console.log(jugadorObjetivo);
        console.log(this);
    }
}

let naruto = new Jugador('naruto');
let sasuke = new Jugador('sasuke'); 

console.log(naruto);
console.log(sasuke);