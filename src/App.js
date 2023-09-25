
import './App.css';
import Button from './components/Button/Button';
import CourceCard from './components/Button/CourceCard/CourceCard';

function App() {
  const cource = {
    id: 1,
    img: 'https://assets.ithillel.ua/images/icons/courses-reach/_transform_icon64_2x/front-end-pro.png',
    level: "Advanced",
    title: "Front - end Pro",
    user: {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      name: "Tetiana Balakleiets"
    },
    rating: 8,
    students: 17,
    classes: 38,
    schedule: "twice a week",
    duration: 5400
  }
  return (
    <div className='list'>
      <CourceCard cource={cource}/>
    </div>

    // <div>
    //   <div className="App">Hello React</div>
    //   <Button text="Clik Me"></Button>
    // </div>

  )
}

export default App;
