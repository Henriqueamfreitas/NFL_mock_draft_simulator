import { RoundList } from "../../components/RoundList"
import { PlayersList } from "../../components/PlayersList"
import { StyledHomePage } from "./style"

export const HomePage = ({ players, setPlayers, rounds, setRounds, draftedPlayer, setDraftedPlayer, pick, setPick }) => {
    return (
        <StyledHomePage>
            <section>
                <h1>Rounds</h1>
                {
                    rounds.map(round => {
                        return (
                            <RoundList
                                key={round.id}
                                players={players}
                                round={round}
                                pick={pick}
                                draftedPlayer={draftedPlayer}
                                setDraftedPlayer={setDraftedPlayer}
                            />
                        )
                    })
                }
            </section>

            <section>
                <h1>Players</h1>
                <PlayersList
                    players={players}
                    setPlayers={setPlayers}
                    pick={pick}
                    setPick={setPick}
                    rounds={rounds}
                    setRounds={setRounds}
                />
            </section>
        </StyledHomePage>
    )
}