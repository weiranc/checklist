import React from 'react'
import Navbar from './Navbar'
import NewItem from './NewItem'
import Search from './Search'
import List from './List'
import ListEntry from './ListEntry'
import Footer from './Footer'

export default function App() {

  const sampleItems = [
    {name: 'Item 1', checked: false, id: 1},
    {name: 'Item 2', checked: true, id: 2},
    {name: 'Item 3', checked: false, id: 3}
  ]

  const [list, setList] = React.useState(sampleItems);

  const [newItem, setNewItem] = React.useState('')
  const [filter, setFilter] = React.useState('')

  const newList = list.concat(newItem)

  console.log(list)

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