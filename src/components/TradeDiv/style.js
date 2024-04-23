import styled from "styled-components";

export const StyledTradeDiv = styled.div`
    display: flex;
    flex-direction: column;

    .tradingTeams{
        display: flex;
        gap: 2rem;
        margin-top: 1rem;
    }

    .tradingTeams__trading{
        width: calc((100% - 2rem)/2);
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .tradingTeams__trading--picks{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
        gap: .5rem;
        button{
            min-width: 40px;
            text-align: center;
        }
    }

    .tradingTeams__original{
        width: calc((100% - 2rem)/2);
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .tradingTeams__original--picks{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
        gap: .5rem;
        button{
            min-width: 40px;
            text-align: center;
        }
    }
`