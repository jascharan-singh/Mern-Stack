import List from "./List"




function App() {
  const fruits = [
    {id: 1, name:"apple",  calories: 100}, {id : 2, name:"banana", calories: 200},
    {id : 3, name:"orange", calories: 300}, {id : 4, name:"pineapple", calories: 400},
     {id : 5, name:"cherry", calories: 500}
    ];
  const vegetables = [{id: 6, name: "potatoes", calories: 110},
      {id: 7, name: "celery", calories: 15},
      {id: 8, name: "carrots", calories: 25}, 
      {id: 9, name: "corn", calories: 63}, 
      {id: 10, name: "broccoli", calories: 50}];
  return (
    <>
    {fruits.length > 0 && <List items={fruits} catagories={'Fruits'}/>} 
    {vegetables.length > 0 && <List items={vegetables} catagories={'Vegetables'}/>} 
    </>
  )
}

export default App
