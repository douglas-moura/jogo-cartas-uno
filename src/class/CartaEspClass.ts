import { CartaClass } from "./CartaClass"

export class CartaNumClass extends CartaClass {
    private efeito: any

    constructor(id:number, cor: string, valor: string) {
        super(id, cor, valor)
    }
}