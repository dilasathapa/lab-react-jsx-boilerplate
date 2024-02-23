import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant
    },
    {
      id: 2,
      img: elephant
    },
    {
      id: 3,
      img: elephant
    },
    {
      id: 4,
      img: elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let images = imageData()
  // console.log(images)

  return (
    <>
      <div className='image-container'>
        {
          images.map((ele, ind) => {
            return (
            <img src={ele.img} alt="elephant" />)
          })
        }
      </div>
    </>
  )

}

export default App;
