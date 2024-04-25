import styled from "styled-components";

export const StyledTradeDiv = styled.div`
    .tradingTeams{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: .75rem;
    }

    .tradingTeams__trading, .tradingTeams__original{
        display: flex;
        flex-direction: column;
        gap: .35rem;
    }

    .tradingTeams__original{
        margin-bottom: .75rem;
    }

    .tradingTeams__original--picks, .tradingTeams__trading--picks{
        display: flex;
        gap: .25rem;
        flex-wrap: wrap;
    }

    .sendTradeButton{
        border: none;
        border-radius: .5rem;
        background-color: orange;
        color: white;
        padding: .25rem .75rem;
    }
`