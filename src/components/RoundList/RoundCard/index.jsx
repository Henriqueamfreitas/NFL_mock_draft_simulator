export const RoundCard = ({ players, pick }) => {
    return(
        <li>
            <h3>Pick: {pick.overall}</h3>
            <h3>{pick.team.market} {pick.team.name}</h3>
            <p>{pick.player_drafted.length === 0 ? null : pick.player_drafted}</p>
        </li>
    )
}