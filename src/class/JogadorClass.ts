import { Baralho } from "./BaralhoClass"
import { Carta } from "./CartaClass"

export class JogadorClass {
    private nome: string
    private mao: Carta[] = []

    constructor(nome: string) {
        this.nome = nome
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

    public comprarCarta(baralho: Baralho): void {
        this.mao.push(baralho.getCartas().pop()!)
        console.log('MÃO:', this.getNome(), this.mao)
        console.log('BARALHO:', baralho.getCartas())
    }

    public baixarCarta(idCarta: number): Carta | null {
        if (idCarta >= 0 && idCarta < this.getMao().length) {
            return this.mao.splice(idCarta, 1)[0]
        }
        return null
    }

    public passarVez(): void {
        // Lógica para passar a vez
    }

    public declararUNO(): void {
        // Lógica para declarar UNO
    }
}