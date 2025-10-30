import { Baralho } from "./BaralhoClass"
import { Jogador } from "./JogadorClass"

export class Partida {
    private ativo: boolean = true
    private jogadores: Jogador[] = []
    private primeiroJogador: number = 0

    constructor(player: string | null, baralho: Baralho) {
        this.setJogadores(player)

        for (let i = 0; i < this.getJogadores().length; i++) {
            for (let j = 0; j < 3; j++) {
                this.getJogadores()[i].comprarCarta(baralho)
            }
        }
    }

    public setJogadores(player: string | null): void {
        this.jogadores[0] = new Jogador(0, player ?? "Jogador 1")
        this.jogadores[1] = new Jogador(1, "Jogador 2")
        this.jogadores[2] = new Jogador(2, "Jogador 3")
        this.jogadores[3] = new Jogador(3, "Jogador 4")
    }

    public getJogadores(): Jogador[] {
        return this.jogadores
    }

    public getAtivo(): boolean {
        return this.ativo
    }

    public setAtivo(ativo: boolean): void {
        this.ativo = ativo
    }
}