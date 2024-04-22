import { useState } from "react";
import { picks } from "./services/picks";
import { prospects } from "./services/prospects";
import { RoundList } from "./components/RoundList";
import  { PlayersList } from "./components/PlayersList"

function App() {
  const [players, setPlayers] = useState(prospects.prospects)
  const [rounds, setRounds] = useState(picks.rounds)

  const [draftedPlayer, setDraftedPlayer] = useState(null)
  
  const firstPick = rounds[0].picks.filter(pick => pick.overall === 1)[0]
  const [pick, setPick] = useState(firstPick)

  // console.log(players)
  // console.log(rounds)
  // console.log(pick)

  return (
    <>
      <section>
        <h1>Rounds</h1>
        {
          rounds.map(round => {
            return (
              <RoundList 
                key={round.id} 
                players={players} 
                round={round} 
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
    </>
  );
}

export default App;
