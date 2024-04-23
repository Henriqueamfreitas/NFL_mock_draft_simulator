import { RoundList } from "../../components/RoundList"
import { PlayersList } from "../../components/PlayersList"
import { PlayersForm } from "../../components/PlayersList/PlayersForm"
import { StyledHomePage } from "./style"
import { TradeDiv } from "../../components/TradeDiv"

export const HomePage = ({ players, setPlayers, rounds, setRounds, draftedPlayer, setDraftedPlayer, pick, setPick, searchPlayer, setSearchPlayer, formData, setFormData, page, setPage, teamInfo, setTeamInfo, tradeData, setTradeData }) => {
    let teamPicksString = ""
    let teamPicksArr = []
    for(let i=0; i<rounds.length; i+=1){
        for(let j=0; j<rounds[i].picks.length; j+=1){
            if(rounds[i].picks[j].team.name === pick.team.name){
                teamPicksString+=`${(rounds[i].picks[j].overall)}, `
                teamPicksArr.push((rounds[i].picks[j].overall))
            }
        }
    }

    teamPicksString = teamPicksString.slice(0, -1);
    teamPicksString = teamPicksString.slice(0, -1);

    return (
        <StyledHomePage>
            <section>
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
                                teamInfo={teamInfo}
                            />
                        )
                    })
                }
            </section>

            <section>
                <div>
                    <h1>Overall: {pick.overall}</h1>
                    <h1>{pick.team.market} {pick.team.name}</h1>
                    <h1>{teamPicksString}</h1>
                </div>

                <div>
                    <button onClick={() => setPage("draft")}>Draft</button>
                    <button onClick={() => setPage("trade")}>Trade</button>
                </div>

                {
                    page === "draft" ?
                    <div>
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
                    <TradeDiv 
                        players={players}
                        setPlayers={setPlayers}
                        pick={pick}
                        setPick={setPick}
                        rounds={rounds}
                        searchPlayer={searchPlayer}
                        setRounds={setRounds}
                        formData={formData}
                        setFormData={setFormData}
                        teamInfo={teamInfo}
                        setTeamInfo={setTeamInfo}
                        tradeData={tradeData}
                        setTradeData={setTradeData}
                        teamPicksArr={teamPicksArr}
                    />
                }
            </section>
        </StyledHomePage>
    )
}