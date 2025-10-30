import { Baralho } from "./BaralhoClass"
import { Carta } from "./CartaClass"
import { Jogador } from "./JogadorClass"

export class Partida {
    private ativo: boolean = true
    private jogadores: Jogador[] = []
    private monte: Baralho
    private primeiroJogador: number = 0

    constructor(player: string | null, baralho: Baralho) {
        this.setJogadores(player)
        this.monte = new Baralho([])

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

    public setMonte(monte: Baralho): void {
        this.monte = monte
    }

    public AddCartaMonte(carta: Carta): void {
        const monte = this.getMonte()

        if (!monte) {
            console.error('Monte não foi inicializado antes de adicionar carta!')
            return
        }

        console.log('Carta recebida no monte:', carta)
        monte.getCartas().push(carta)
    }

    public getMonte(): Baralho {
        return this.monte
    }

    public setAtivo(ativo: boolean): void {
        this.ativo = ativo
    }

    public getAtivo(): boolean {
        return this.ativo
    }
}