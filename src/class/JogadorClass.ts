import { Baralho } from "./BaralhoClass"

export class Jogador {
    private id: number
    private nome: string
    private mao: Baralho = new Baralho([])

    constructor(id: number, nome: string) {
        this.id = id
        this.nome = nome
    }

    public setId(id: number): void {
        this.id = id
    }

    public getId(): number {
        return this.id
    }

    public getNome(): string {
        return this.nome
    }

    public setNome(nome: string): void {
        this.nome = nome
    }

    public getMao(): Baralho {
        return this.mao
    }

    public setMao(mao: Baralho): void {
        this.mao = mao
    }

    public comprarCarta(baralho: Baralho | null): void {
        if (!baralho || baralho.getCartas().length === 0) return
        this.mao.getCartas().push(baralho.getCartas().pop()!)
    }

    public declararUNO(): void {
        // Lógica para declarar UNO
    }
}