import { StyledPlayerCard } from "./style.js"
import { useNavigate  } from "react-router-dom"

export const PlayerCard = ({ player, pick, setPick, rounds, setRounds, players, setPlayers, setFormData, viewPlayerInfo, setViewPlayerInfo, isPlayerInfoModalOpen, setIsPlayerInfoModalOpen }) => {
    const navigate = useNavigate();

    const draftPlayer = (player) => {
        let updatedRounds = [...rounds]
        updatedRounds.map(round => {
            round.picks.map(filteredPick => {
                if (filteredPick.overall === pick.overall) {
                    filteredPick["player_drafted"] = player
                }
            })
        })
        setRounds(updatedRounds)

        const updatedPlayers = players.filter(updatedPlayer => updatedPlayer !== player)
        setPlayers(updatedPlayers)

        for (let i = 0; i < rounds.length; i += 1) {
            for (let j = 0; j < rounds[i].picks.length; j += 1) {
                if (rounds[i].picks[j] === pick) {
                    if ((rounds[i].picks[j + 1])) {
                        setPick((rounds[i].picks[j + 1]))
                    }
                    else if ((rounds[i + 1]?.picks[0])) {
                        setPick((rounds[i + 1].picks[0]))
                    }
                    else {
                        alert("The draft is over")
                        navigate("/summary")
                        // return <Redirect to="/summary" />
                        // <Link to="/"></Link>
                    }
                }
            }
        }
setFormData({
    player: "",
    position: "",
})
    }

const showPlayerInfoModal = () => {
    setViewPlayerInfo(player)
    setIsPlayerInfoModalOpen(true)
}

return (
    <StyledPlayerCard>
        <div onClick={showPlayerInfoModal}>
            <h3>{player.name}</h3>
            <h3>{player.position}</h3>
        </div>
        <p>{player.team_name}</p>
        <button onClick={() => draftPlayer(player)}>Draft Player</button>
    </StyledPlayerCard>
)
}