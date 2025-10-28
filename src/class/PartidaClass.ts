import { Baralho } from "./BaralhoClass"
import { JogadorClass } from "./JogadorClass"
import { contexto } from "../context/GameContext"

export class Partida {
    private jogadores: JogadorClass[] = []
    private baralho: Baralho
    private turno: number = 1
    private primeiroJogador: number = 0

    constructor(player: string | null, baralho: Baralho) {
        this.baralho = baralho
        this.embaralharBaralho(this.baralho)
        this.setJogadores(player)

        for (let i = 0; i < this.getJogadores().length; i++) {
            for (let j = 0; j < 3; j++) {
                this.getJogadores()[i].comprarCarta(this.baralho)
            }
        }
    }

    public setJogadores(player: string | null): void {
        this.jogadores[0] = new JogadorClass(player ?? "Jogador 1")
        this.jogadores[1] = new JogadorClass("Jogador 2")
        this.jogadores[2] = new JogadorClass("Jogador 3")
        this.jogadores[3] = new JogadorClass("Jogador 4")
    }

    public getJogadores(): JogadorClass[] {
        return this.jogadores
    }

    public setBaralho(baralho: Baralho): void {
        this.baralho = baralho
    }

    public getBaralho(): Baralho {
        return this.baralho
    }

    public embaralharBaralho(baralho: Baralho): void {
        let array = baralho.getCartas()

        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }

        baralho.setCartas(array)
    }

    public setTurno(turno: number): void {
        this.turno = turno
    }

    public getTurno(): number {
        return this.turno
    }
}