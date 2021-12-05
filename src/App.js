import React from 'react'
import Navbar from './Navbar'
import NewItem from './NewItem'
import Search from './Search'
import List from './List'
import Footer from './Footer'

export default function App() {

  const sampleItems = []

  const [list, setList] = React.useState(sampleItems);

  const [newItem, setNewItem] = React.useState('')
  const [filter, setFilter] = React.useState('')

  const newList = list.concat(newItem)

  return (
    <div className="App">
      <Navbar />
      <div className='Forms'>
        <NewItem
        add={setList}
        list={list}
        newItem={newItem}
        setNewItem={setNewItem}
        updatedList={newList}
        />
        <Search setFilter={setFilter} />
      </div>
      <List list={list} filter={filter} setList={setList} />
      <Footer />
    </div>
  );
}