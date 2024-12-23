import './App.css'
import MovieCard from './MovieCard'
import BatmanImage from './assets/Batman.jpg';


function App() {
  return (
    <>
    <MovieCard poster={BatmanImage} title={'Batman'} genre={'Action'} isPopular={true}/>
    <MovieCard poster={BatmanImage} title={'Batman'} genre={'Action'} isPopular={false}/>
    <MovieCard poster={BatmanImage} title={'Batman'} genre={'Action'} isPopular={true}/>
    <MovieCard poster={BatmanImage} title={'Batman'} genre={'Action'} isPopular={true}/>
    <MovieCard poster={BatmanImage} title={'Batman'} genre={'Action'} isPopular={true}/>
    </>
  )
}

export default App
