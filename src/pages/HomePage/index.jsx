import { RoundList } from "../../components/RoundList"
import { PlayersList } from "../../components/PlayersList"
import { PlayersForm } from "../../components/PlayersList/PlayersForm"
import { StyledHomePage } from "./style"

export const HomePage = ({ players, setPlayers, rounds, setRounds, draftedPlayer, setDraftedPlayer, pick, setPick, searchPlayer, setSearchPlayer, formData, setFormData }) => {
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
            </section>
        </StyledHomePage>
    )
}