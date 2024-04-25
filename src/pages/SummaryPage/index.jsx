import { RoundList } from "../../components/RoundList"
import { StyledSummaryPage } from "./style"
import { useNavigate } from "react-router-dom"
import React, { useRef } from 'react';
import * as htmlToImage from 'html-to-image';

export const SummaryPage = ({ players, setPlayers, rounds, setRounds, draftedPlayer, setDraftedPlayer, pick, setPick, searchPlayer, setSearchPlayer, formData, setFormData, page, setPage, teamInfo, setTeamInfo, tradeData, setTradeData, originalTeamTradedPlayer, setOriginalTeamTradedPlayer, tradingTeamTradedPlayer, setTradingTeamTradedPlayer, numberOfRounds, setNumberOfRounds, viewPlayerInfo, setViewPlayerInfo, isPlayerInfoModalOpen, setIsPlayerInfoModalOpen }) => {
    const navigate = useNavigate();
    const roundListRef = useRef(null);

    // const downloadRoundList = () => {
    //     const roundListContent = document.getElementsByClassName("roundList")[0].outerHTML;
    //     const blob = new Blob([roundListContent], { type: "text/html" });
    //     const url = URL.createObjectURL(blob);

    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.download = "round_list.html";

    //     // Simula um clique no link para iniciar o download
    //     link.click();

    //     // Revoga o URL do Blob
    //     URL.revokeObjectURL(url);
    //     // console.log(blob)
    // } 

    const downloadRoundList = async () => {
        const roundListElement = roundListRef.current;
        // console.log(roundListElement)
        try {
            const dataUrl = await htmlToImage.toPng(roundListElement);
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'round_list.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading round list:', error);
        }
    };
    return (
        <StyledSummaryPage>
            <h1>Summary</h1>
            <button onClick={() => navigate("/")}>Back</button>
            <button onClick={downloadRoundList}>Download</button>
            <div ref={roundListRef} className="roundList">
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
            </div>
        </StyledSummaryPage>
    )
}