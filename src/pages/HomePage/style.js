import styled from "styled-components";

export const StyledHomePage = styled.main`
    background-color: rgb(30,30,30);
    padding: 2vh 8vw;

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
        margin-bottom: 1rem;
    }

    img{
        width: 30px;
        height: 30px;
    }
`