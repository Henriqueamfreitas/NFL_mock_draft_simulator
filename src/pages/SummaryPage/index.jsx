import { RoundList } from "../../components/RoundList"
import { StyledSummaryPage } from "./style"
import { useNavigate  } from "react-router-dom"


export const SummaryPage = ({ players, setPlayers, rounds, setRounds, draftedPlayer, setDraftedPlayer, pick, setPick, searchPlayer, setSearchPlayer, formData, setFormData, page, setPage, teamInfo, setTeamInfo, tradeData, setTradeData, originalTeamTradedPlayer, setOriginalTeamTradedPlayer, tradingTeamTradedPlayer, setTradingTeamTradedPlayer, numberOfRounds, setNumberOfRounds, viewPlayerInfo, setViewPlayerInfo, isPlayerInfoModalOpen, setIsPlayerInfoModalOpen }) => {
    const navigate = useNavigate();
    
    return (
        <StyledSummaryPage>
            <h1>Summary</h1>
            <button onClick={() => navigate("/")}>Back</button>
            <button>Download</button>
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
        </StyledSummaryPage>
    )
}