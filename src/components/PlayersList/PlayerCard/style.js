import styled from "styled-components";

export const StyledPlayerCard = styled.li`
    display: flex;
    background-color: aliceblue;
    border-radius: .5rem;
    width: 90%;
    height: 50px;
    padding: 1rem;
    align-items: center;
    div{
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-right: 1.5rem;
    }
    div, p{
        width: calc((83% - 1rem)/2);
    }
    button{
        background-color: transparent;
        border: solid 1px black;
        border-radius: .5rem;
        width: 17%;
        padding: .5rem;
    }
`