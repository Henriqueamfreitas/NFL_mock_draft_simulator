import { RoundList } from "../../components/RoundList"
import { PlayersList } from "../../components/PlayersList"
import { PlayersForm } from "../../components/PlayersList/PlayersForm"
import { StyledHomePage } from "./style"
import { TradeDiv } from "../../components/TradeDiv"
import { useEffect } from "react"
import { PlayerInfoModal } from "../../components/PlayerInfoModal"

import { StyledH1, StyledH2, StyledSpan, StyledLabel } from "../../styles/typography"

export const HomePage = ({ players, setPlayers, rounds, setRounds, draftedPlayer, setDraftedPlayer, pick, setPick, searchPlayer, setSearchPlayer, formData, setFormData, page, setPage, teamInfo, setTeamInfo, tradeData, setTradeData, originalTeamTradedPlayer, setOriginalTeamTradedPlayer, tradingTeamTradedPlayer, setTradingTeamTradedPlayer, numberOfRounds, setNumberOfRounds, viewPlayerInfo, setViewPlayerInfo, isPlayerInfoModalOpen, setIsPlayerInfoModalOpen }) => {
    let teamPicksString = ""
    let teamPicksArr = []

    for (let i = 0; i < rounds.length; i += 1) {
        for (let j = 0; j < rounds[i].picks.length; j += 1) {
            if (rounds[i].picks[j].team.name === pick?.team.name) {
                teamPicksString += `${(rounds[i].picks[j].overall)}, `
                if (rounds[i].picks[j].overall >= pick.overall) {
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

    useEffect(() => {
        let updatedRounds = []
        for (let i = 0; i < rounds.length; i += 1) {
            if (i <= numberOfRounds - 1) {
                updatedRounds.push(rounds[i])
            }
        }

        setRounds(updatedRounds)
    }, [numberOfRounds])


    return (
        <StyledHomePage page={page}>
            <StyledH1 fontcolor="white" fontSize="40" fontWeigth="900">
                Mock Draft NFL 2024
            </StyledH1>
            <header className="header">
                <button onClick={restartDraft}>
                    Restart Draft
                </button>
                <StyledLabel fontcolor="white" fontSize="14" fontWeigth="500" htmlFor="numberOfRounds">
                    How many rounds do you want to do your mock?
                </StyledLabel>
                <select name="numberOfRounds" onChange={(e) => e.target.value !== "" ? setNumberOfRounds(Number(e.target.value)) : null}>
                    <option value="">Select the number of rounds</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <StyledSpan fontcolor="white" fontSize="12" fontWeigth="400">
                    If you want to change the number of rounds, please click on the Restart Draft button
                </StyledSpan>
            </header>
            <section className="rounds">
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
                <div className="teamDraftingInfo">
                    <StyledH2 fontcolor="black" fontSize="16" fontWeigth="600">
                        On the Clock: {pick?.team.market} {pick?.team.name}, Pick: {pick?.overall}
                    </StyledH2>
                    <StyledSpan fontcolor="black" fontSize="14" fontWeigth="500">
                        Picks: {teamPicksString}
                    </StyledSpan>
                </div>

                <div className="pageButtons">
                    <button className="pageButtons__draft" onClick={() => setPage("draft")}>Draft</button>
                    <button className="pageButtons__trade" onClick={() => setPage("trade")}>Trade</button>
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
                                viewPlayerInfo={viewPlayerInfo}
                                setViewPlayerInfo={setViewPlayerInfo}
                                isPlayerInfoModalOpen={isPlayerInfoModalOpen}
                                setIsPlayerInfoModalOpen={setIsPlayerInfoModalOpen}
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
            {
                isPlayerInfoModalOpen ?
                    <PlayerInfoModal
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
                        viewPlayerInfo={viewPlayerInfo}
                        setViewPlayerInfo={setViewPlayerInfo}
                        isPlayerInfoModalOpen={isPlayerInfoModalOpen}
                        setIsPlayerInfoModalOpen={setIsPlayerInfoModalOpen}
                    /> :
                    null
            }
        </StyledHomePage>
    )
}