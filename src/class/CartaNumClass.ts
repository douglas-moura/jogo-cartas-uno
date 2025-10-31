import { Carta } from "./CartaClass"

export class CartaNumClass extends Carta {
    constructor(id:number, cor: string, valor: string) {
        super(id, cor, valor)
    }
}