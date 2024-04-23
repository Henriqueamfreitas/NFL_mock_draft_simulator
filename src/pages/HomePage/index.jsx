import { RoundList } from "../../components/RoundList"
import { PlayersList } from "../../components/PlayersList"
import { PlayersForm } from "../../components/PlayersList/PlayersForm"
import { StyledHomePage } from "./style"

export const HomePage = ({ players, setPlayers, rounds, setRounds, draftedPlayer, setDraftedPlayer, pick, setPick, searchPlayer, setSearchPlayer, formData, setFormData, page, setPage }) => {
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
                <div>
                    <button onClick={() => setPage("draft")}>Draft</button>
                    <button onClick={() => setPage("trade")}>Trade</button>
                </div>

                {
                    page === "draft" ?
                    <div>
                        <h1>Players</h1>
                        <PlayersForm
                            searchPlayer={searchPlayer}
                            setSearchPlayer={setSearchPlayer}
                            players={players}
                            setPlayers={setPlayers}
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <PlayersList
                            players={players}
                            setPlayers={setPlayers}
                            pick={pick}
                            setPick={setPick}
                            rounds={rounds}
                            searchPlayer={searchPlayer}
                            setRounds={setRounds}
                            formData={formData}
                            setFormData={setFormData}
                        />
                    </div> :
                    <div>
                        <h1>Trade</h1>
                    </div>
                }
            </section>
        </StyledHomePage>
    )
}