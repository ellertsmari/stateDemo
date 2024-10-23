import Button from './Button'
import { useState } from 'react'


function App() {
  const [shouldAppear, setShoudAppear] = useState(true);
  const [imgUrl, setImgUrl] = useState('');

  const makeAppear = () => {
    if (shouldAppear) {
      setImgUrl('https://i.pinimg.com/originals/4c/4b/c9/4c4bc9af912f572f83105594ff7a3498.gif')
    }
    else{
      setImgUrl('')
    }
    console.log(imgUrl);
    setShoudAppear(!shouldAppear)
  }
  return (
    <>
      <Button onClick={makeAppear}>
        <p>
          {shouldAppear?"show":"hide"} image
        </p>

      </Button>
      <img src={imgUrl} />
    </>
  )
}

export default App
