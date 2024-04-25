import styled from "styled-components";

export const StyledPlayerCard = styled.li`
    background-color: rgb(250,250,250);
    border-radius: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem .75rem;

    div{
        display: flex;
        flex-direction: column;
        gap: .25rem;

        div{
            display: flex;
            flex-direction: row;
            gap: .25rem;
        }
    }

    button{
        border: none;
        background-color: green;
        color: white;
        font-weight: 600;
        padding: .25rem .5rem;
        border-radius: .5rem;
    }
`