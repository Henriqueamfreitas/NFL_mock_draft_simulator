export const RoundCard = ({ players, filteredPick, pick }) => {
    const player = () => {
        if(filteredPick.player_drafted){
            return filteredPick.player_drafted.name
        } else if(filteredPick === pick){
            return "On the clock"
        } else{
            return "Upcoming"
        }
    }
    return(
        <li>
            <h3>Pick: {filteredPick.overall}</h3>
            <h3>{filteredPick.team.market} {filteredPick.team.name}</h3>
            <p>{player()}</p>
        </li>
    )
}