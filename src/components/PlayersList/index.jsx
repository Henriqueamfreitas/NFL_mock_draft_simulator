import { PlayerCard } from "./PlayerCard"

export const PlayersList = ({ players, draftingTeam, setDraftingTeam }) => {
    // console.log(players)
    return (
        <ul>
            {
                players.map(player => {
                    return (
                        <PlayerCard 
                            key={player.id} 
                            player={player}
                            draftingTeam={draftingTeam}         
                            setDraftingTeam={setDraftingTeam}
                        />
                    )
                })
            }
        </ul>
    )
}