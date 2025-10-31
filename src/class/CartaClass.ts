export class Carta {
    private id: number
    private cor: string
    private valor: string

    constructor(id: number, cor: string, valor: string) {
        this.id = id
        this.cor = cor
        this.valor = valor
    }

    public getId(): number {
        return this.id
    }

    public setId(id: number): void {
        this.id = id
    }

    public getCor(): string {
        return this.cor
    }

    public setCor(cor: string): void {
        this.cor = cor
    }

    public getValor(): string {
        return this.valor
    }

    public setValor(valor: string): void {
        this.valor = valor
    }
}