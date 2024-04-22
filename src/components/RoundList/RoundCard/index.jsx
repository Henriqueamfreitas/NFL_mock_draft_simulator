export const RoundCard = ({ players, pick }) => {
    const player = pick.player_drafted ? pick.player_drafted.name : null
    
    return(
        <li>
            <h3>Pick: {pick.overall}</h3>
            <h3>{pick.team.market} {pick.team.name}</h3>
            <p>Player: {player}</p>
        </li>
    )
}