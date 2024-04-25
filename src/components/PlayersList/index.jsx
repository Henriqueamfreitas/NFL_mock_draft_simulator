import { PlayerCard } from "./PlayerCard"
import { StyledPlayerList } from "./style.js"

export const PlayersList = ({ players, pick, setPick, rounds, setRounds, setPlayers, searchPlayer, formData, setFormData, viewPlayerInfo, setViewPlayerInfo, isPlayerInfoModalOpen, setIsPlayerInfoModalOpen }) => {
    const list = (formData.player === "" && formData.position === "") ? players : searchPlayer
    return (
        <StyledPlayerList>
            {
                list.map(player => {
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
                            setFormData={setFormData}
                            viewPlayerInfo={viewPlayerInfo}
                            setViewPlayerInfo={setViewPlayerInfo}
                            isPlayerInfoModalOpen={isPlayerInfoModalOpen}
                            setIsPlayerInfoModalOpen={setIsPlayerInfoModalOpen}                      
                        />
                    )
                })
            }
        </StyledPlayerList>
    )
}