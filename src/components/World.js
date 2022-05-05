import React from "react"
import Worlds from "./Worlds"
import playerDataParse from "../playerDataParse"

export default function World(props) {
    const playerData = props.playerData
    const maximized = props.maximized

    const [formData,setFormData] = React.useState(
        {world: ""}
    )

    React.useEffect(() => {
        playerDataParse(props.playerData, {form: "Worlds", value: formData.world}, false)
    }, [formData])

    function resetFormData(event) {
        event.preventDefault()
        setFormData({world: ""})
    }

    function worldClickEvent(event) {
        setFormData(prevFormData => {
            const {id} = event.target
            return {
                ...prevFormData,
                world: id
            }
        }) 
    }

    function handleChange(event) {
        setFormData(prevFormData => {
            const {value} = event.target
            playerDataParse(props.playerData, {form: "Worlds", value: value}, maximized)
            return {
                ...prevFormData,
                world: value
            }
        })
    }
    return (
        <form className="form">
            <input className="form__worldInput" type="text" placeholder="World Number" onChange={handleChange} name="Worlds" value={formData.world}/>
            <button onClick={resetFormData}>SHOW ALL</button>
            <Worlds worldClickEvent={worldClickEvent} playerData={playerData}/>
        </form>
    )
}
