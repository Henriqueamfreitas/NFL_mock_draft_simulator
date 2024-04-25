import styled, {css} from "styled-components"

export const headlineStyles = css`
    font-family: "Roboto", sans-serif;
    color: ${({fontcolor}) => {
        switch(fontcolor){
            case "black":
                return "#000000"
            case "white":
                return "#FFFFFF"
        }
    }};

    font-size: ${({fontSize}) => {
        switch(fontSize){
            case "12":
                return "12px"
            case "14":
                return "14px"
            case "16":
                return "16px"
            case "18":
                return "18px"
            case "20":
                return "20px"
            case "40":
                return "40px"
        }
    }};

    font-weight: ${({fontWeigth}) => {
        switch(fontWeigth){
            case "400":
                return 400
            case "500":
                return 500
            case "600":
                return 600
            case "700":
                return 700
            case "800":
                return 800
            case "900":
                return 900
        }
    }};
`
export const StyledH1 = styled.h1`
    ${headlineStyles}
`

export const StyledH2 = styled.h1`
    ${headlineStyles}
`

export const StyledLabel = styled.label`
    ${headlineStyles}
`

export const StyledSpan = styled.span`
    ${headlineStyles}
`

export const StyledP = styled.span`
    ${headlineStyles}
`