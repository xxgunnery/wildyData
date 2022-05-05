export default function Wildy(props) {
    let id = "wildyDots"
    if(props.canvasDimensions.id === "maximized") {
        id = "wildyDotsMaximized"
    }
    const imageHeight = props.canvasDimensions.height
    const imageWidth = props.canvasDimensions.width

    let canvasHeight = imageHeight.split("px")[0]
    let canvasWidth = imageWidth.split("px")[0]

    canvasHeight = canvasHeight - (canvasHeight/1350)*20
    canvasWidth = canvasWidth - (canvasWidth/1384)*55

    let canvasMarginLeft = (canvasWidth/1384)*55;
    let canvasMarginBottom = (canvasHeight/1350)*25;

    return(
        <div style={{height: imageHeight}}className="container__application" id="application">
            <div style={props.canvasDimensions} className="application__background"></div>
            <img style={props.canvasDimensions} className="wildyImg" src="./wildy.png"/>
            <canvas style={{marginLeft: canvasMarginLeft, marginBottom: canvasMarginBottom }}height={canvasHeight} width={canvasWidth} id={id}></canvas>
        </div>        
    )
}
