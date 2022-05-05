import drawPoints from "./drawPoints"

export default function playerDataParse(playerData, config, maximized) {

  const playerDataArray = playerData.data
  const numPoints = playerDataArray.length
  let worldPoints = []

  if(numPoints > 1) {
    for(let i = 0; i < numPoints; i++) {
      if(playerDataArray[i].length === 4) {
        const combatLvl = playerDataArray[i][1]
        const world = playerDataArray[i][3]
        const firstOp = playerDataArray[i][2].split("x=")[1].split("y=")
        const worldPointX = firstOp[0].replace(",","").trimEnd()
        const secOp = firstOp[1].split("plane=")
        const worldPointY = secOp[0].replace(",","").trimEnd()
        

        worldPoints.push([worldPointX,worldPointY,combatLvl,world].map(val => parseInt(val)))
      }
    }
  }
  if(config.form === "Worlds") {
    if(config.value === "") {
      drawPoints(worldPoints, maximized)
    } else {
      let world = parseInt(config.value)
      worldPoints = worldPoints.filter(player => player[3] === world)

      drawPoints(worldPoints, maximized)    
    }
  } else if(config.form === "Combat") {
      let combat = config.value
      if(combat === "") {
        drawPoints(worldPoints, maximized)
      } else {
        combat = {low: combat.split("-")[0], high: combat.split("-")[1]}
        worldPoints = worldPoints.filter(player => ( (player[2] >= combat.low) && (player[2] <= combat.high) ))
        drawPoints(worldPoints, maximized)
      }
  }

}