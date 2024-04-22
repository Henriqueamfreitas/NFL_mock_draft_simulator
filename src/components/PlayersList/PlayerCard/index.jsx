export const PlayerCard = ({ player, pick, setPick, rounds, setRounds, players, setPlayers }) => {
    const draftPlayer = (player) => {
        let updatedRounds = [...rounds]
        updatedRounds.map(round => {
            round.picks.map(filteredPick => {
                if(filteredPick === pick){
                    filteredPick["player_drafted"] = player
                }
            })
        })
        setRounds(updatedRounds)
        
        const updatedPlayers = players.filter(updatedPlayer => updatedPlayer !== player)        
        setPlayers(updatedPlayers)
        
        for(let i=0; i<rounds.length; i+=1){
            for(let j=0; j<rounds[i].picks.length; j+=1){
                if(rounds[i].picks[j] === pick){
                    setPick((rounds[i].picks[j+1]))
                }
            }
        }
    }

    return(
        <li>
            <h3>{player.name}</h3>
            <h3>{player.position}</h3>
            <h3>{player.team_name}</h3>
            <button onClick={() => draftPlayer(player)}>Draft Player</button>
        </li>
    )
}