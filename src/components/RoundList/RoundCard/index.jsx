import { StyledRoundCard } from "./style"

export const RoundCard = ({ players, filteredPick, pick, teamInfo }) => {
    const player = () => {
        if(filteredPick.player_drafted){
            return `Player Drafted: ${filteredPick.player_drafted.name}`
        } else if(filteredPick === pick){
            return "On the clock"
        } else{
            return "Upcoming"
        }
    }

    let imgSrc
    for(let i=0; i<teamInfo.length; i+=1){
        if(teamInfo[i].name === filteredPick.team.name){
            imgSrc=teamInfo[i].img
        }
    }
    return(
        <StyledRoundCard>
            <div>
                <h3>Pick</h3>
                <h3>{filteredPick.overall}</h3>
            </div>
            <img src={imgSrc} alt="" />
            {/* <p>{filteredPick.team.market} {filteredPick.team.name}</p> */}
            <p>{player()}</p>
        </StyledRoundCard>
    )
}