import { useEffect, useState } from "react"
import { StyledPlayersForm } from "./style.js"

export const PlayersForm = ({ searchPlayer, setSearchPlayer, players, setPlayers, formData, setFormData }) => {

    useEffect(() => {
        const search = players.filter(player => player.name.toLowerCase().includes(formData.player.toLowerCase()))
        setSearchPlayer(search)
    }, [formData.player])
    
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
            <button>Search</button>
        </StyledPlayersForm>
    )
}