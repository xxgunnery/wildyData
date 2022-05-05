export default function drawPoints(points, maximized) {
    let canvas = document.getElementById("wildyDots")
    if(maximized) {
        canvas = document.getElementById("wildyDotsMaximized")
    }
    
    if(canvas.getContext) {
        const numPoints = points.length

        const xRatio = canvas.offsetWidth/(3381 - 2949)
        const yRatio = canvas.offsetHeight/(3963 - 3526)
        const cbtDiff = 126 - 3
        const totalHue = 135
        const maxL = 35;
        const minL = 20;

        let ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

        for(let i = 0; i < points.length; i++) {

            let cbtLvl = points[i][2]
            let x = (points[i][0]-2949)*xRatio + 4
            let y =  canvas.offsetHeight - (points[i][1]-3526)*yRatio
            
            let hue = (totalHue - ((cbtLvl - 3)/cbtDiff)*totalHue)
            let lightness = (maxL - ((cbtLvl - 3)/cbtDiff)*maxL) + minL
            let hsla = `hsla(${hue}, 100%, ${lightness}%, 0.4)`

            ctx.fillStyle = hsla

            ctx.fillRect(x, y, 4, 4)
        }   
    }
}