import { RoundList } from "../../components/RoundList"
import { PlayersList } from "../../components/PlayersList"
import { PlayersForm } from "../../components/PlayersList/PlayersForm"
import { StyledHomePage } from "./style"
import { TradeDiv } from "../../components/TradeDiv"
import { useEffect } from "react"

export const HomePage = ({ players, setPlayers, rounds, setRounds, draftedPlayer, setDraftedPlayer, pick, setPick, searchPlayer, setSearchPlayer, formData, setFormData, page, setPage, teamInfo, setTeamInfo, tradeData, setTradeData, originalTeamTradedPlayer, setOriginalTeamTradedPlayer, tradingTeamTradedPlayer, setTradingTeamTradedPlayer, numberOfRounds, setNumberOfRounds }) => {
    let teamPicksString = ""
    let teamPicksArr = []

    for(let i=0; i<rounds.length; i+=1){
        for(let j=0; j<rounds[i].picks.length; j+=1){
            if(rounds[i].picks[j].team.name === pick?.team.name){
                teamPicksString+=`${(rounds[i].picks[j].overall)}, `
                if(rounds[i].picks[j].overall>=pick.overall){
                    teamPicksArr.push((rounds[i].picks[j].overall))
                }
            }
        }
    }

    teamPicksString = teamPicksString.slice(0, -1);
    teamPicksString = teamPicksString.slice(0, -1);

    const restartDraft = () => {
        localStorage.removeItem("@rounds")
        localStorage.removeItem("@players")
        localStorage.removeItem("@pick")
        window.location.reload()
    }

    // const numberOfRounds = (e) => {
    //     setNumberOfRounds(Number(e.target.value))
        
    //     let updatedRounds = []
    //     for(let i=0; i<rounds.length; i+=1){
    //         if(i<=numberOfRounds-1){
    //             updatedRounds.push(rounds[i])
    //         }
    //     }
    
    //     setRounds(updatedRounds)
    // }
    useEffect(() => {
        let updatedRounds = []
        for(let i=0; i<rounds.length; i+=1){
            if(i<=numberOfRounds-1){
                updatedRounds.push(rounds[i])
            }
        }
    
        setRounds(updatedRounds)
    }, [numberOfRounds])


    return (
        <StyledHomePage>
            <section>
            <label htmlFor="numberOfRounds">How many rounds do you want to mock?</label>
            <select name="numberOfRounds" onChange={(e) => setNumberOfRounds(Number(e.target.value))}>
                <option value="">Select the number of rounds</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <span>If you want to change the number of rounds, please click on the Restart Draft button</span>
            <button onClick={restartDraft}>
                Restart Draft
            </button>
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
                    <h1>Overall: {pick?.overall}</h1>
                    <h1>{pick?.team.market} {pick?.team.name}</h1>
                    <h1>{teamPicksString}</h1>
                </div>

                <div>
                    <button onClick={() => setPage("draft")}>Draft</button>
                    <button onClick={() => setPage("trade")}>Trade</button>
                </div>

                {
                    page === "draft" ?
                    <div className="draftFilters">
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
                        originalTeamTradedPlayer={originalTeamTradedPlayer}
                        setOriginalTeamTradedPlayer={setOriginalTeamTradedPlayer}
                        tradingTeamTradedPlayer={tradingTeamTradedPlayer}
                        setTradingTeamTradedPlayer={setTradingTeamTradedPlayer}                  
                    />
                }
            </section>
        </StyledHomePage>
    )
}