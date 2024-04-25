import { useEffect, useState } from "react"
import { StyledPlayersForm } from "./style.js"

export const PlayersForm = ({ searchPlayer, setSearchPlayer, players, setPlayers, formData, setFormData }) => {

    useEffect(() => {
        let search
        
        if(formData.position !== "" && formData.player === ""){
            search = players.filter(player => (player.position === formData.position))
            setSearchPlayer(search)
        }
        if(formData.player !== "" && formData.position === ""){
            search = players.filter(player => player.name.toLowerCase().includes(formData.player.toLowerCase()))
            setSearchPlayer(search)
        }

        if(formData.player !== "" && formData.position !== ""){
            search = players.filter(player => player.name.toLowerCase().includes(formData.player.toLowerCase()))
            search = search.filter(player => (player.position === formData.position))
            setSearchPlayer(search)
        }
    }, [formData])
    
    const submitForm = (e) => {
        e.preventDefault()
        setFormData({
            player: "",
            position: "",
        })
    }

    return (
        <StyledPlayersForm onSubmit={submitForm}>
            <input 
                type="text" 
                value={formData.player} 
                placeholder="Search the player" 
                onChange={(e) => setFormData({...formData, player: e.target.value})} 
            />

            <select onChange={(e) => setFormData({...formData, position: e.target.value})}>
                <option value="">Filter by position</option>
                <option value="QB">QB</option>
                <option value="RB">RB</option>
                <option value="TE">TE</option>
                <option value="WR">WR</option>
                <option value="C">C</option>
                <option value="OG">OG</option>
                <option value="OL">OL</option>
                <option value="OT">OT</option>
                <option value="CB">CB</option>
                <option value="DB">DB</option>
                <option value="DE">DE</option>
                <option value="DL">DL</option>
                <option value="DT">DT</option>
                <option value="FS">FS</option>
                <option value="SAF">S</option>
                <option value="LB">LB</option>
                <option value="OLB">OLB</option>
                <option value="K">K</option>
                <option value="P">P</option>
                <option value="LS">LS</option>
            </select>
            {/* <button>Search</button> */}
        </StyledPlayersForm>
    )
}