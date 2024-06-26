import styled from "styled-components";

export const StyledRoundCard = styled.li`
    background-color: ${({selectingteam}) => selectingteam ? "rgb(190,190,190)" : "rgb(250,250,250)"};
    border-radius: .5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem .75rem;
    .leftContainer{
        display: flex;
        gap: .5rem;
    }
    .leftContainer__pickInfo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 35px;
        height: 35px;
    }

    .playerDraftedContainer{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        div{
            display: flex;
            gap: .25rem;
            justify-content: flex-end;
        }
    }
`