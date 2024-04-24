import { useState } from "react"
import { StyledTradeDiv } from "./style"

export const TradeDiv = ({ teamInfo, setTeamInfo, pick, tradeData, setTradeData, teamPicksArr, rounds, setRounds, originalTeamTradedPlayer, setOriginalTeamTradedPlayer, tradingTeamTradedPlayer, setTradingTeamTradedPlayer }) => {

    let teamNames = []
    for (let i = 0; i < teamInfo.length; i += 1) {
        if (teamInfo[i].name !== pick.team.name) {
            teamNames.push(teamInfo[i].name)
        }
    }
    teamNames.sort()

    useState(() => {
        setTradeData({
            originalPickTeam: pick.team.name,
            originalTeamTradedPicks: [],
            tradingTeam: "",    
            tradingTeamTradedPicks: [],
        })
    }, rounds)

    let tradingTeamPicksArr = []
    for (let i = 0; i < rounds.length; i += 1) {
        for (let j = 0; j < rounds[i].picks.length; j += 1) {
            if (rounds[i].picks[j].team.name === tradeData.tradingTeam) {
                if(rounds[i].picks[j].overall>=pick.overall){
                    tradingTeamPicksArr.push((rounds[i].picks[j].overall))
                }
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

    // console.log(tradingTeamTradedPlayer)


    const makeTrade = () => {
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

        let updatedRounds = [...rounds]
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

        let updatedTeamInfo = [...teamInfo]
        // Tiramos o jogador do tradingTeam
        // PRECISAMOS colocar o jogador do originalPickteam no trading team

        // Tiramos tirar o jogador do originalPickTeam
        // PRECISAMOS colocar o jogador do tradingTeam no originalPickteam

        for(let i=0; i<updatedTeamInfo.length; i+=1){

            if(updatedTeamInfo[i].name === tradeData.tradingTeam){
                for(let j=0; j<updatedTeamInfo[i].players.length; j+=1){
                    if(updatedTeamInfo[i].players[j].id === tradingTeamTradedPlayer){
                        const playerToTrade = updatedTeamInfo[i].players.splice(j, 1)[0];
                        updatedTeamInfo.find(team => team.name === tradeData.originalPickTeam).players.push(playerToTrade);        
                    }
                }
            }                

            if(updatedTeamInfo[i].name === tradeData.originalPickTeam){
                for(let j=0; j<updatedTeamInfo[i].players.length; j+=1){
                    if(updatedTeamInfo[i].players[j].id === originalTeamTradedPlayer){
                        const playerToTrade = updatedTeamInfo[i].players.splice(j, 1)[0];
                        updatedTeamInfo.find(team => team.name === tradeData.tradingTeam).players.push(playerToTrade);   
                    }
                }
            }        
        }

        console.log(updatedTeamInfo)
        setRounds(updatedRounds)
        let resetTradeData = {
            originalPickTeam: tradeData.originalPickTeam,
            originalTeamTradedPicks: [],
            originalTeamTradedPlayers: [],
            tradingTeam: "",    
            tradingTeamTradedPicks: [],
            tradingTeamTradedPlayers: [],
        }
        setTradeData(resetTradeData)
    }
    let tradingTeamPlayers=[]
    let originalPickTeamPlayers

    for(let i=0; i<teamInfo.length; i+=1){
        if(teamInfo[i].name === tradeData.tradingTeam){
            tradingTeamPlayers=(teamInfo[i].players)
        }
        
        if(teamInfo[i].name === tradeData.originalPickTeam){
            originalPickTeamPlayers=(teamInfo[i].players)
        }
    }
    tradingTeamPlayers.sort((a, b) => a.name.localeCompare(b.name));
    originalPickTeamPlayers.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <StyledTradeDiv>
            <div className="tradingTeams">
                <div className="tradingTeams__trading">
                    <h1>TEAM TO TRADE</h1>
                    <select value={tradeData.tradingTeam} onChange={(e) => setTradeData({ ...tradeData, tradingTeam: e.target.value })}>
                        <option value="">Select a team</option>
                        {
                            teamNames.map((team, index) => (
                                <option key={index} value={team}>{team}</option>
                            ))
                        }
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

                    <div>
                        <select onChange={(e) => setTradingTeamTradedPlayer(e.target.value)}>
                            <option value="">Select a player</option>
                            {
                                tradingTeamPlayers.length>0 ?
                                tradingTeamPlayers.map((player, index) => {
                                    return(
                                        <option key={index} value={player.id}>{player.name}</option>
                                    )
                                }) :
                                null
                            }
                        </select>
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

                    <div>
                        <select onChange={(e) => setOriginalTeamTradedPlayer(e.target.value)}>
                            <option value="">Select a player</option>
                            {
                                originalPickTeamPlayers?.length>0 ?
                                originalPickTeamPlayers.map((player, index) => {
                                    return(
                                        <option key={index} value={player?.id}>{player?.name}</option>
                                    )
                                }) 
                                :
                                null
                            }
                        </select>
                    </div>
                </div>
            </div>

            <button onClick={() => {makeTrade()}}>Send Trade</button>
        </StyledTradeDiv>
    )
}
