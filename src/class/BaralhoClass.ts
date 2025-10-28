import { Carta } from "./CartaClass"

export class Baralho {
    private cartas: Carta[]

    constructor(cartasIniciais: Carta[]) {
        this.cartas = cartasIniciais
    }
    
    public setCartas(cartas: Carta[]): void {
        this.cartas = cartas
    }

    public getCartas(): Carta[] {
        return this.cartas
    }
}