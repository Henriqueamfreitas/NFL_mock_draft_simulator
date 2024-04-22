export const PlayerCard = ({ player, draftingTeam, setDraftingTeam }) => {
    return(
        <li>
            <h3>{player.name}</h3>
            <h3>{player.position}</h3>
            <h3>{player.team_name}</h3>
            <button>Draft Player</button>
        </li>
    )
}