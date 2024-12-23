
import Header from './Header.jsx'

import Card from './Card.jsx'



function App() {
  const myName = 'Jascharan Singh';
  const myFriendName = 'Sarmad Ali';
  return(
    <>
    <Header/>
   
        
    <Card name = {myName } isStudyingReact={true}/>
    <Card name = {myFriendName} isStudyingReact={true} />
    <Card/>
    {/* <Button name = "click me!!!"/> */}
    
    {/* <Footer/> */}
    </>
  )
}

export default App
