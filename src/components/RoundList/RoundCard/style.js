import styled from "styled-components";

export const StyledRoundCard = styled.li`
    display: flex;
    background-color: aliceblue;
    border-radius: .5rem;
    width: 90%;
    height: 50px;
    padding: 1rem;
    align-items: center;
    div{
        width: fit-content;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-right: 1.5rem;
    }
    p{
        width: 45%;
    }
    p:nth-child(3){
        display: flex;
        justify-content: flex-end;
    }
`