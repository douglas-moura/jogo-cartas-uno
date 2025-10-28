import { createContext, useContext, useState, ReactNode } from 'react'
import { Carta } from '../class/CartaClass'

// Tipagem do contexto
interface AppData {
    nome: string | null
    setNome: (nome: string) => void

    partida: boolean
    setPartida: (partida: boolean) => void

    cartas: Carta[]
    setCartas: (cartas: Carta[]) => void
}

export const GameContext = createContext<AppData | undefined>(undefined)

export function GameProvider({ children }: { children: ReactNode }) {
    const [nome, setNome] = useState<string | null>(null)
    const [partida, setPartida] = useState(false)
    const [cartas, setCartas] = useState<Carta[]>([
        new Carta(0, 'vermelho','1'),
        new Carta(1, 'vermelho','2'),
        new Carta(2, 'vermelho','3'),
        new Carta(3, 'vermelho','4'),
        new Carta(4, 'vermelho','5'),
        new Carta(5, 'azul','1'),
        new Carta(6, 'azul','2'),
        new Carta(7, 'azul','3'),
        new Carta(8, 'azul','4'),
        new Carta(9, 'azul','5'),
        new Carta(10, 'amarelo','1'),
        new Carta(11, 'amarelo','2'),
        new Carta(12, 'amarelo','3'),
        new Carta(13, 'amarelo','4'),
        new Carta(14, 'amarelo','5'),
        new Carta(15, 'verde','1'),
        new Carta(16, 'verde','2'),
        new Carta(17, 'verde','3'),
        new Carta(18, 'verde','4'),
        new Carta(19, 'verde','5'),
    ])

    return (
        <GameContext.Provider value={{
            nome, setNome,
            partida, setPartida,
            cartas, setCartas
        }}>
            {children}
        </GameContext.Provider>
    )
}

export function contexto() {
	const context = useContext(GameContext)
    if (!context) {
        throw new Error("contexto deve ser usado dentro de um JogoProvider")
    }
    return context
}