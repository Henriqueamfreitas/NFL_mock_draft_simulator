import { StyledRoundCard } from "./style"
import { StyledSpan, StyledP, StyledH3 } from "../../../styles/typography"

export const RoundCard = ({ players, filteredPick, pick, teamInfo }) => {
    const player = () => {
        if (filteredPick.player_drafted) {
            return (
                <div>
                    <StyledSpan fontcolor="black" fontSize="14" fontWeigth="500" >
                        {filteredPick.player_drafted.name}
                    </StyledSpan>
                    <StyledSpan fontcolor="black" fontSize="14" fontWeigth="500" >
                        {filteredPick.player_drafted.position}
                    </StyledSpan>
                    <StyledSpan fontcolor="black" fontSize="14" fontWeigth="500" >
                        {filteredPick.player_drafted.team_name}
                    </StyledSpan>
                </div>
            )
        } else if (filteredPick.overall === pick.overall) {
            return <StyledP fontcolor="black" fontSize="14" fontWeigth="600" >On the clock</StyledP>
        } else {
            return <StyledP fontcolor="black" fontSize="14" fontWeigth="400" >Upcoming</StyledP>
        }
    }

    let imgSrc
    for (let i = 0; i < teamInfo.length; i += 1) {
        if (teamInfo[i].name === filteredPick.team.name) {
            imgSrc = teamInfo[i].img
        }
    }
    return (
        <StyledRoundCard>
            <div className="leftContainer">
                <div className="leftContainer__pickInfo">
                    <StyledH3 fontcolor="black" fontSize="14" fontWeigth="500" >
                        Pick
                    </StyledH3>
                    <StyledH3 fontcolor="black" fontSize="14" fontWeigth="500" >
                        {filteredPick.overall}
                    </StyledH3>
                </div>
                <img src={imgSrc} alt="" />
            </div>
            {
                player()
            }
        </StyledRoundCard>
    )
}