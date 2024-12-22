
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
function App() {
  return(
    <>
    <Header/>
    {(() => {
        const cards = [];
        for (let i = 0; i < 10; i++) {
          cards.push(<Card key={i} />);
        }
        return cards;
      })()}
    
    <Footer/>
    </>
  )
}

export default App
