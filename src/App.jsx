import { useState } from "react";
import { picks } from "./services/picks";
import { prospects } from "./services/prospects";
import { teams } from "./services/teams";
import { HomePage } from "./pages/HomePage";

function App() {
  const [players, setPlayers] = useState(prospects.prospects)
  const [rounds, setRounds] = useState(picks.rounds)

  const [draftedPlayer, setDraftedPlayer] = useState(null)

  const firstPick = rounds[0].picks.filter(pick => pick.overall === 1)[0]
  const [pick, setPick] = useState(firstPick)

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
    />
  );
}

export default App;
