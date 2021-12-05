export default function NewItem(props) {

  function handleClick() {
    if (props.newItem.name) {
      props.add(props.updatedList)
      props.setNewItem({name: '', checked: false, id: props.list.length + 1})
    }
  }

  function handleChange(e) {
    props.setNewItem({name: e.target.value, checked: false, id: props.list.length + 1})
  }

  return (
    <div className='newItem'>
      <input className='newItemBar' placeholder="Add New Item" onChange={handleChange} value={props.newItem.name}/>
      <button className='newItemButton' onClick={handleClick}>Add</button>
    </div>
  );
}