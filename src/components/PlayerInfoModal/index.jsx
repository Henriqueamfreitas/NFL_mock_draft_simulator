import { useEffect, useRef } from "react"
import { StyledPlayerInfoModal } from "./style"

export const PlayerInfoModal = ({viewPlayerInfo, setViewPlayerInfo, isPlayerInfoModalOpen, setIsPlayerInfoModalOpen}) => {
    const tranformInchesToFeet = (inches) => {
        return (inches*0.0833333).toFixed(2)
    }

    const tranformInchesToMeters = (inches) => {
        return (inches*0.0254).toFixed(2)
    }

    const tranformLbsToKgs = (lbs) => {
        return (lbs*0.453592).toFixed(2)
    }

    const modalRef = useRef(null)

    useEffect(() => {
        const handleMouseDown = (event) => {
            if(!modalRef.current?.contains(event.target)){
                setIsPlayerInfoModalOpen(false)
            }
        }

        const handleEsc = (event) => {
            if(event.key === "Escape"){
                setIsPlayerInfoModalOpen(false)
            }
        }

        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("keydown", handleEsc)

        return () => {
            window.removeEventListener("mousedown", handleMouseDown)
            window.removeEventListener("keydown", handleEsc)
        }
    }, [])

    return(
        <StyledPlayerInfoModal>
            <div ref={modalRef}>
                <button onClick={() => setIsPlayerInfoModalOpen(false)}>X</button>
                <h1>{viewPlayerInfo.name}</h1>
                <p>Birth place: {viewPlayerInfo.birth_place}</p>
                <p>Conference: {viewPlayerInfo.conference.name}</p>
                <p>Division: {viewPlayerInfo.division.alias}</p>
                <p>Position: {viewPlayerInfo.position}</p>
                <p>Team: {viewPlayerInfo.team_name}</p>
                <p>Height: {tranformInchesToFeet(viewPlayerInfo.height)}ft or {tranformInchesToMeters(viewPlayerInfo.height)}m</p>
                <p>Weight: {viewPlayerInfo.weight}lbs or {tranformLbsToKgs(viewPlayerInfo.weight)}Kg</p>
                {
                    viewPlayerInfo.top_prospect ?
                    <p>Top 100 Prospects</p> :
                    null
                }
            </div>
        </StyledPlayerInfoModal>
    )
} 