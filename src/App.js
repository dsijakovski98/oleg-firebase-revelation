import './App.css';
import Item from './Item';
import useItemList from './customHooks/useItemList'
import { addItemFirestore } from './firestore/firestoreAdd'

function App() {
  const [itemList, error] = useItemList()

  const addItem = async () => {
    const newItem = {
      name: 'Some name',
      age: 12
    }

    await addItemFirestore(newItem) 
  }

  return (
    <div className="App">
      <button onClick={addItem}>Add Dummy Item</button>
      {
        error
        ? error
        : itemList
          ? itemList.map(item => <Item key={item.id} item={item} />)
          : 'Empty List'
      }
    </div>
  );
}

export default App;
