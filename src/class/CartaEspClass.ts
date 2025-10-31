import { Carta } from "./CartaClass"

export class CartaNumClass extends Carta {
    private efeito: any

    constructor(id:number, cor: string, valor: string) {
        super(id, cor, valor)
    }
}