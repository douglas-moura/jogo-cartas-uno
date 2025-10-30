import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { Carta } from '../class/CartaClass'
import { Baralho } from '../class/BaralhoClass'
import { Partida } from '../class/PartidaClass'

// Tipagem do contexto
interface AppData {
    nome: string | null
    setNome: (nome: string) => void

    partida: Partida
    setPartida: (partida: Partida) => void

    turno: number
    setTurno: (turno: number) => void

    cartas: Carta[]
    setCartas: (cartas: Carta[]) => void

    baralho: Baralho | null
    setBaralho: (baralho: Baralho | null) => void
}

export const GameContext = createContext<AppData | undefined>(undefined)

export function GameProvider({ children }: { children: ReactNode }) {
    const [nome, setNome] = useState<string | null>(null)
    const [partida, setPartida] = useState<Partida>(new Partida(null, new Baralho([])))
    const [turno, setTurno] = useState(0)
    const [cartas, setCartas] = useState<Carta[]>([
        new Carta(0, '#e7133f','1'),
        new Carta(1, '#e7133f','2'),
        new Carta(2, '#e7133f','3'),
        new Carta(3, '#e7133f','4'),
        new Carta(4, '#e7133f','5'),
        new Carta(5, '#3485e2','1'),
        new Carta(6, '#3485e2','2'),
        new Carta(7, '#3485e2','3'),
        new Carta(8, '#3485e2','4'),
        new Carta(9, '#3485e2','5'),
        new Carta(10, '#ffc548','1'),
        new Carta(11, '#ffc548','2'),
        new Carta(12, '#ffc548','3'),
        new Carta(13, '#ffc548','4'),
        new Carta(14, '#ffc548','5'),
        new Carta(15, '#50cd6d','1'),
        new Carta(16, '#50cd6d','2'),
        new Carta(17, '#50cd6d','3'),
        new Carta(18, '#50cd6d','4'),
        new Carta(19, '#50cd6d','5'),
    ])
    const [baralho, setBaralho] = useState<Baralho | null>(null)

    useEffect(() => {
        if (turno >= 4) setTurno(0)
        console.log('BARALHO CONTEXTO: ', baralho)
        
    }, [turno])

    return (
        <GameContext.Provider value={{
            nome, setNome,
            partida, setPartida,
            cartas, setCartas,
            baralho, setBaralho,
            turno, setTurno,
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