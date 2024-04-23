import { StyledTradeDiv } from "./style"

export const TradeDiv = ({ teamInfo, setTeamInfo, pick, tradeData, setTradeData, teamPicksArr, rounds, setRounds }) => {
    let teamNames = []
    for (let i = 0; i < teamInfo.length; i += 1) {
        if (teamInfo[i].name !== pick.team.name) {
            teamNames.push(teamInfo[i].name)
        }
    }
    teamNames.sort()

    let tradingTeamPicksArr = []
    for (let i = 0; i < rounds.length; i += 1) {
        for (let j = 0; j < rounds[i].picks.length; j += 1) {
            if (rounds[i].picks[j].team.name === tradeData.tradingTeam) {
                tradingTeamPicksArr.push((rounds[i].picks[j].overall))
            }
        }
    }

    const tradingTeamPicksToBeTraded = (overAllPick) => {
        if (tradeData.tradingTeamTradedPicks.length === 0) {
            const newPicks = [...tradeData.tradingTeamTradedPicks, overAllPick]
            setTradeData({ ...tradeData, tradingTeamTradedPicks: newPicks })
        }
        const filtered = tradeData.tradingTeamTradedPicks.filter(pick => pick === overAllPick)
        if (filtered.length === 0) {
            setTradeData({ ...tradeData, tradingTeamTradedPicks: [...tradeData.tradingTeamTradedPicks, overAllPick] })
        } else {
            const filtered = tradeData.tradingTeamTradedPicks.filter(pick => pick !== overAllPick)
            setTradeData({ ...tradeData, tradingTeamTradedPicks: filtered })
        }
    }

    const originalTeamPicksToBeTraded = (overAllPick) => {
        if (tradeData.originalTeamTradedPicks.length === 0) {
            const newPicks = [...tradeData.originalTeamTradedPicks, overAllPick]
            setTradeData({ ...tradeData, originalTeamTradedPicks: newPicks })
        }
        const filtered = tradeData.originalTeamTradedPicks.filter(pick => pick === overAllPick)
        if (filtered.length === 0) {
            setTradeData({ ...tradeData, originalTeamTradedPicks: [...tradeData.originalTeamTradedPicks, overAllPick] })
        } else {
            const filtered = tradeData.originalTeamTradedPicks.filter(pick => pick !== overAllPick)
            setTradeData({ ...tradeData, originalTeamTradedPicks: filtered })
        }
    }

    const makeTrade = () => {
        console.log(tradeData)
        let originalPickTeam 
        let tradingTeam 

        for(let i=0; i<rounds.length; i+=1){
            for(let j=0; j<rounds[i].picks.length; j+=1){
                if(rounds[i].picks[j].team.name === tradeData.originalPickTeam){
                    originalPickTeam=rounds[i].picks[j].team
                }
                if(rounds[i].picks[j].team.name === tradeData.tradingTeam){
                    tradingTeam=rounds[i].picks[j].team
                }
            }
        }

        const updatedRounds = [...rounds]
        for(let k=0; k<tradeData.tradingTeamTradedPicks.length; k+=1){
            for(let i=0; i<updatedRounds.length; i+=1){
                for(let j=0; j<updatedRounds[i].picks.length; j+=1){
                        if(updatedRounds[i].picks[j].overall === tradeData.tradingTeamTradedPicks[k]){
                            updatedRounds[i].picks[j].team=originalPickTeam
                        }
                }
            }
        }

        for(let k=0; k<tradeData.originalTeamTradedPicks.length; k+=1){
            for(let i=0; i<updatedRounds.length; i+=1){
                for(let j=0; j<updatedRounds[i].picks.length; j+=1){
                        if(updatedRounds[i].picks[j].overall === tradeData.originalTeamTradedPicks[k]){
                            updatedRounds[i].picks[j].team=tradingTeam
                        }
                }
            }
        }

        setRounds(updatedRounds)

        // fazer um for para as picks do trading que irão para o original
        // dentro desse for, fazer um outro for com os rounds até achar o overall igual
        // substituir o time

        // fazer de novo do original para o trading
        // console.log(rounds[0].picks[0].overall)
        // console.log(rounds[0].picks[0].team)
        // console.log(rounds[0].picks[0])
        
        // tradingTeamTradedPicks vai virar do originalTeam
        // originalTeamTradedPicks vai virar do tradingTeam
    }

    return (
        <StyledTradeDiv>
            <div className="tradingTeams">
                <div className="tradingTeams__trading">
                    <h1>TEAM TO TRADE</h1>
                    <select value={tradeData.tradingTeam} onChange={(e) => setTradeData({ ...tradeData, tradingTeam: e.target.value })}>
                        <option value="">Select a team</option>
                        {teamNames.map((team, index) => (
                            <option key={index} value={team}>{team}</option>
                        ))}
                    </select>

                    <div className="tradingTeams__trading--picks">
                        <span>2024</span>
                        {
                            tradingTeamPicksArr.map((pick, index) => {
                                return (
                                    <button onClick={() => tradingTeamPicksToBeTraded(pick)} key={index}>{pick}</button>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="tradingTeams__original">
                    <h1>TEAM WITH THE PICK</h1>
                    <h2>{pick.team.name}</h2>
                    <div className="tradingTeams__original--picks">
                        <span>2024</span>
                        {
                            teamPicksArr.map((pick, index) => {
                                return (
                                    <button onClick={() => originalTeamPicksToBeTraded(pick)} key={index}>{pick}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <button onClick={() => {makeTrade()}}>Send Trade</button>
        </StyledTradeDiv>
    )
}
