import { PlayerCard } from "./PlayerCard"

export const PlayersList = ({ players, pick, setPick, rounds, setRounds, setPlayers }) => {
    // console.log(players)

    return (
        <ul>
            {
                players.map(player => {
                    return (
                        <PlayerCard 
                            key={player.id} 
                            player={player}
                            players={players}
                            setPlayers={setPlayers}
                            pick={pick}         
                            setPick={setPick}
                            rounds={rounds}
                            setRounds={setRounds}
                        />
                    )
                })
            }
        </ul>
    )
}