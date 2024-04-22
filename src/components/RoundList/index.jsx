import { RoundCard } from "./RoundCard"

export const RoundList = ({ players, round, draftedPlayer, setDraftedPlayer }) => {
    const picks = round.picks

    return(
        <ul>    
            <h2>Round {round.number}</h2>
            {
                picks.map(pick => {
                    return(
                        <RoundCard 
                            key={pick.id} 
                            players={players} 
                            pick={pick} 
                            draftedPlayer={draftedPlayer} 
                            setDraftedPlayer={setDraftedPlayer} 
                        />
                    )
                 })
            }
        </ul>
    )
}