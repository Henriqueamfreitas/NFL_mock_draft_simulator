import { StyledRoundCard } from "./style"

export const RoundCard = ({ players, filteredPick, pick }) => {
    const player = () => {
        if(filteredPick.player_drafted){
            return `Player Drafted: ${filteredPick.player_drafted.name}`
        } else if(filteredPick === pick){
            return "On the clock"
        } else{
            return "Upcoming"
        }
    }
    return(
        <StyledRoundCard>
            <div>
                <h3>Pick</h3>
                <h3>{filteredPick.overall}</h3>
            </div>
            <p>{filteredPick.team.market} {filteredPick.team.name}</p>
            <p>{player()}</p>
        </StyledRoundCard>
    )
}