import { Baralho } from "./BaralhoClass"
import { Carta } from "./CartaClass"

export class Jogador {
    private id: number
    private nome: string
    private mao: Carta[] = []

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

    public getMao(): Carta[] {
        return this.mao
    }

    public setMao(mao: Carta[]): void {
        this.mao = mao
    }

    public comprarCarta(baralho: Baralho | null): void {
        if (!baralho || baralho.getCartas().length === 0) return
        //console.log("CARTA COMPRADA: ", baralho.getCartas())
        this.mao.push(baralho.getCartas().pop()!)
    }

    public declararUNO(): void {
        // Lógica para declarar UNO
    }
}