import { RoundCard } from "./RoundCard"
import { StyledRoundList } from "./style.js"

export const RoundList = ({ players, round, draftedPlayer, setDraftedPlayer, pick, teamInfo }) => {
    const picks = round.picks

    return(
        <StyledRoundList>    
            <h2>Round {round.number}</h2>
            {
                picks.map(filteredPick => {
                    return(
                        <RoundCard 
                            key={filteredPick.id} 
                            players={players}
                            pick={pick}
                            filteredPick={filteredPick} 
                            draftedPlayer={draftedPlayer} 
                            setDraftedPlayer={setDraftedPlayer}
                            teamInfo={teamInfo} 
                        />
                    )
                 })
            }
        </StyledRoundList>
    )
}