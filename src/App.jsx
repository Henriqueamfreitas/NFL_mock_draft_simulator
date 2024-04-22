import { useState } from "react";
import { picks } from "./services/picks";
import { prospects } from "./services/prospects";
import { RoundList } from "./components/RoundList";
import  { PlayersList } from "./components/PlayersList"

function App() {
  const [players, setPlayers] = useState(prospects.prospects)
  const [rounds, setRounds] = useState(picks.rounds)

  const [draftedPlayer, setDraftedPlayer] = useState(null)
  const firstPick = rounds[0].picks.filter(pick => pick.overall === 1)[0].team.id

  const [draftingTeam, setDraftingTeam] = useState(firstPick)

  for(let i=0; i<rounds.length; i+=1){
    for(let j=0; j<rounds[i].picks.length; j+=1){
      rounds[i].picks[j]["player_drafted"] = []
    }
  }

  // console.log(players)
  // console.log(rounds)

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
          draftingTeam={draftingTeam}
          setDraftingTeam={setDraftingTeam}
        />
      </section>
    </>
  );
}

export default App;
