import styled from "styled-components";

export const StyledHomePage = styled.main`
    background-color: rgb(30,30,30);
    padding: 2vh 8vw;
    height: 100vh;
    /* width: 100%; */

    h1{
        text-align: center;
    }
    .header{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        select{
            padding: .25rem;
            border-radius: .25rem;
            font-weight: 500;
            color: #000000;
        }
        option{
            font-weight: 500;
            color: #000000;
        }

        button{
            padding: .25rem;
            border-radius: .5rem;
            border: none;
            font-weight: 600;
            color: #FFFFFF;
            background-color: transparent;
            border: solid 2px #FFFFFF;
            margin-bottom: .5rem;
        }
        margin-bottom: 2rem;
    }

    .rounds{
        height: 175px;
        overflow-x: scroll;
        max-height: 175px;
        margin-bottom: 2rem;

    }

    .teamDraftingInfo{
        display: flex;
        border-top-right-radius: .5rem;
        border-top-left-radius: .5rem;
        flex-direction: column;
        gap: .25rem;
        padding: .5rem;
        background-color: rgb(250,250,250);
    }

    .pageButtons{
        padding: 0rem .5rem .5rem .5rem;
        background-color: rgb(250,250,250);
        display: flex;
        gap: .5rem;
        button{
            background-color: transparent;
            border: none;
            padding: 0;
            border-bottom: solid 5px;
        }
        .pageButtons__draft{
            border-color: ${({page}) => page === "draft" ? "green" : "black"};
            font-weight: ${({page}) => page === "draft" ? 600 : 400};
            color: ${({page}) => page === "draft" ? "green" : "black"};
        }

        .pageButtons__trade{
            border-color: ${({page}) => page === "trade" ? "green" : "black"};
            font-weight: ${({page}) => page === "trade" ? 600 : 400};
            color: ${({page}) => page === "trade" ? "green" : "black"};
        }
    }

    .draftFilters{

    }
`