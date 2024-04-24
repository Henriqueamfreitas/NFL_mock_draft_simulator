import { StyledRoundCard } from "./style"

export const RoundCard = ({ players, filteredPick, pick, teamInfo }) => {
    const player = () => {
        if(filteredPick.player_drafted){
            return (
                <div>
                    <span>{filteredPick.player_drafted.name}</span>
                    <span>{filteredPick.player_drafted.position}</span>
                    <span>{filteredPick.player_drafted.team_name}</span>
                </div>
            )
        } else if(filteredPick.overall === pick.overall){
            return <p>On the clock</p> 
        } else{
            return <p>Upcoming</p> 
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
            {/* <p>{player()}</p> */}
            {
                player()
            }
        </StyledRoundCard>
    )
}