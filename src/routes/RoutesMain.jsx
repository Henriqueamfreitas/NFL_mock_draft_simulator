import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SummaryPage } from "../pages/SummaryPage";

import { useEffect, useState } from "react";
import { picks } from "../services/picks";
import { prospects } from "../services/prospects";
import { teams } from "../services/teams";

export const RoutesMain = () => {
  const LsRounds = JSON.parse(localStorage.getItem("@rounds"))
  const LsPlayers = JSON.parse(localStorage.getItem("@players"))
  const LsPick = JSON.parse(localStorage.getItem("@pick"))

  const [viewPlayerInfo, setViewPlayerInfo] = useState(null)
  const [isPlayerInfoModalOpen, setIsPlayerInfoModalOpen] = useState(false)

  const [rounds, setRounds] = useState(LsRounds ? LsRounds : picks.rounds)
  const [players, setPlayers] = useState(LsPlayers ? LsPlayers : prospects.prospects)

  const firstPick = rounds[0].picks.filter(pick => pick.overall === 1)[0]

  const [pick, setPick] = useState(LsPick ? LsPick : firstPick)

  useEffect(() => {
    localStorage.setItem("@rounds", JSON.stringify(rounds))
  }, [rounds])

  useEffect(() => {
    localStorage.setItem("@players", JSON.stringify(players))
  }, [players])

  useEffect(() => {
    localStorage.setItem("@pick", JSON.stringify(pick))
  }, [rounds])

  const [teamInfo, setTeamInfo] = useState(teams)

  const [draftedPlayer, setDraftedPlayer] = useState(null)


  const [tradeData, setTradeData] = useState({
    originalPickTeam: "",
    originalTeamTradedPicks: [],
    originalTeamTradedPlayers: [],
    tradingTeam: "",
    tradingTeamTradedPicks: [],
    tradingTeamTradedPlayers: [],
  })

  const [searchPlayer, setSearchPlayer] = useState([])
  const [formData, setFormData] = useState({
    player: "",
    position: "",
  })

  const [page, setPage] = useState("draft")

  const [originalTeamTradedPlayer, setOriginalTeamTradedPlayer] = useState(null)
  const [tradingTeamTradedPlayer, setTradingTeamTradedPlayer] = useState(null)

  const [numberOfRounds, setNumberOfRounds] = useState(7)

  // console.log(teams)
  // console.log(rounds)
  // console.log(pick)

  return (
    <Routes>
      <Route path="/" element={
        <HomePage
          players={players}
          setPlayers={setPlayers}
          rounds={rounds}
          setRounds={setRounds}
          draftedPlayer={draftedPlayer}
          setDraftedPlayer={setDraftedPlayer}
          pick={pick}
          setPick={setPick}
          searchPlayer={searchPlayer}
          setSearchPlayer={setSearchPlayer}
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
          teamInfo={teamInfo}
          setTeamInfo={setTeamInfo}
          tradeData={tradeData}
          setTradeData={setTradeData}
          originalTeamTradedPlayer={originalTeamTradedPlayer}
          setOriginalTeamTradedPlayer={setOriginalTeamTradedPlayer}
          tradingTeamTradedPlayer={tradingTeamTradedPlayer}
          setTradingTeamTradedPlayer={setTradingTeamTradedPlayer}
          numberOfRounds={numberOfRounds}
          setNumberOfRounds={setNumberOfRounds}
          viewPlayerInfo={viewPlayerInfo}
          setViewPlayerInfo={setViewPlayerInfo}
          isPlayerInfoModalOpen={isPlayerInfoModalOpen}
          setIsPlayerInfoModalOpen={setIsPlayerInfoModalOpen}
        />
      } />
      <Route path="/summary" element={
        <SummaryPage
          players={players}
          setPlayers={setPlayers}
          rounds={rounds}
          setRounds={setRounds}
          draftedPlayer={draftedPlayer}
          setDraftedPlayer={setDraftedPlayer}
          pick={pick}
          setPick={setPick}
          searchPlayer={searchPlayer}
          setSearchPlayer={setSearchPlayer}
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
          teamInfo={teamInfo}
          setTeamInfo={setTeamInfo}
          tradeData={tradeData}
          setTradeData={setTradeData}
          originalTeamTradedPlayer={originalTeamTradedPlayer}
          setOriginalTeamTradedPlayer={setOriginalTeamTradedPlayer}
          tradingTeamTradedPlayer={tradingTeamTradedPlayer}
          setTradingTeamTradedPlayer={setTradingTeamTradedPlayer}
          numberOfRounds={numberOfRounds}
          setNumberOfRounds={setNumberOfRounds}
          viewPlayerInfo={viewPlayerInfo}
          setViewPlayerInfo={setViewPlayerInfo}
          isPlayerInfoModalOpen={isPlayerInfoModalOpen}
          setIsPlayerInfoModalOpen={setIsPlayerInfoModalOpen}
        />
      } />
    </Routes>
  );
};