import React from 'react'
import ReactDOM from 'react-dom/client'

import Form from './components/Form'
import Wildy from './components/Wildy'
import playerDataParse from './playerDataParse'
import './index.css'

function Module() {
  const [playerData, setPlayerData] = React.useState({data: ["HELLO"]})
  const [maximized, setMaximized] = React.useState(false)
  const [tab, setTab] = React.useState({clicked: "Combat"})

  React.useEffect(() => {
    async function callBackendAPI() {
          const response = await fetch('/express_backend');
          const body = await response.json()

          if (response.status !== 200) {
            throw Error(body.message) 
          }
          return (
            body
          ); 
    }

    callBackendAPI()
      .then(res => {
          setPlayerData(res)
        }
      )
      .catch(err => console.log(err))
      
  }, [])

  React.useEffect(() => {
    playerDataParse(playerData, {form: "Worlds", value: ""}, false)
  }, [playerData])

  React.useEffect(() => {
    console.log(tab.clicked)
    const value = document.getElementsByName(tab.clicked)[0].value
    playerDataParse(playerData, {form: tab.clicked, value: value}, maximized)
  }, [maximized])

  function minimizeMap() {
    document.getElementById("maximized").style.display = "none"
    setMaximized(false)
  }

  return (
    <div className="container">
      <div id="maximized" className="maximizedMap">
        <button onClick={minimizeMap}>MINIMIZE MAP</button>
        <Wildy canvasDimensions={{height:"1350px", width: "1384px", id: "maximized"}}/>
      </div>
      <Form tab={tab} setTab={setTab} maximized={maximized} setMaximized={setMaximized} playerData={playerData}/>
      <Wildy canvasDimensions={{height:"800px", width: "820px", id: "regular"}}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Module />
  </React.StrictMode>
)

