import React, {useState, useEffect, useRef} from 'react'

const MemeGenerator = () => {

  const [image, setImage] = useState(null)
  const canvas = useRef(null)
  const [topText, setTopText] = useState(' ')
  const [bottomText, setBottomText] = useState(' ')

  useEffect(() =>{
    const catImage = new Image()
    catImage.src ="https://picsum.photos/256"
    catImage.onload =() => setImage(catImage)
  },[])

  useEffect(()=>{
    if(image && canvas) {
      const ctx = canvas.current.getContext('2d')
      //Canvas Slika
      ctx.fillStyle="black"
      ctx.fillRect(0,0,400, 256+80)
      ctx.drawImage(image, (400-256) /2,40)
      //Canvas text
      ctx.font = "30px Comic Sans MS"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"

      ctx.fillText(topText, 400/2, 30)
      ctx.fillText(bottomText, 400/2, 256+40+30)
    }
  },[ image, canvas, topText, bottomText])

  return(
    <div>
      <h1>Canvas Meme generator!</h1>
      <div>
        <canvas
          ref={canvas}
          width={400}
          height={256+80}
        />
      </div>
      <label>Enter Top Text: </label>
      <input type='text'
       value={topText}
       onChange={e=> setTopText(e.target.value)}
       />
      
      <br />
      <label>Enter Bottom Text: </label>
      <input type='text'
       value={bottomText}
       onChange={e=> setBottomText(e.target.value)}
       />

    </div>
  )
}

export default MemeGenerator