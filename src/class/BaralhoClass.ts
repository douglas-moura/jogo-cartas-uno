import { Carta } from "./CartaClass"

export class Baralho {
    private cartas: Carta[]

    constructor(cartasIniciais: Carta[]) {
        this.cartas = [...cartasIniciais]
    }
    
    public setCartas(cartas: Carta[]): void {
        this.cartas = cartas
    }

    public getCartas(): Carta[] {
        return this.cartas
    }

    public embaralhar(): void {
        let array = this.cartas

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
    }
}