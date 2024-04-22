import { PlayerCard } from "./PlayerCard"
import { StyledPlayerList } from "./style.js"

export const PlayersList = ({ players, pick, setPick, rounds, setRounds, setPlayers }) => {

    return (
        <StyledPlayerList>
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
        </StyledPlayerList>
    )
}