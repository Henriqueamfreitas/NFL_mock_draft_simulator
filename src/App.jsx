import { useEffect, useState } from "react";
import { picks } from "./services/picks";
import { prospects } from "./services/prospects";
import { teams } from "./services/teams";
import { HomePage } from "./pages/HomePage";

function App() {
  const LsRounds = JSON.parse(localStorage.getItem("@rounds"))
  const LsPlayers = JSON.parse(localStorage.getItem("@players"))
  const LsPick = JSON.parse(localStorage.getItem("@pick"))
  
  const [rounds, setRounds] = useState(LsRounds ? LsRounds : picks.rounds)
  const [players, setPlayers] = useState(LsPlayers ? LsPlayers : prospects.prospects)
  
  const firstPick = rounds[0].picks.filter(pick => pick.overall === 1)[0]
  // console.log(firstPick)
  // console.log(LsPick)
  
  


  const [pick, setPick] = useState(LsPick ? LsPick : firstPick)

  // console.log("app:", pick)
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
    tradingTeam: "",    
    tradingTeamTradedPicks: [],
  })

  // console.log(tradeData.originalPickTeam)

  // console.log(tradeData.originalPickTeam)

  const [searchPlayer, setSearchPlayer] = useState([])
  const [formData, setFormData] = useState({
    player: "",
    position: "",
  })

  const [page, setPage] = useState("draft")

  // console.log(teams)
  // console.log(rounds)
  // console.log(pick)

  return (
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
    />
  );
}

export default App;
