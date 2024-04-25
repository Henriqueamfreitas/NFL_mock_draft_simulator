import { RoundCard } from "./RoundCard"
import { StyledRoundList } from "./style.js"
import { StyledH2 } from "../../styles/typography.js"

export const RoundList = ({ players, round, draftedPlayer, setDraftedPlayer, pick, teamInfo }) => {
    const picks = round.picks

    return(
        <StyledRoundList className="roundList">    
            <StyledH2 fontcolor="white" fontSize="20" fontWeigth="600" >Round {round.number}</StyledH2>
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