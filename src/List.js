import ListEntry from './ListEntry'

export default function List(props) {

  var filteredElements = props.list.filter(item => item.name.toLowerCase().includes(props.filter))
  var listElements = filteredElements.map(item => <ListEntry item={item} key={item.id} setList={props.setList} list={props.list}/>);


  return (
    <div className="listContainer">
      {listElements}
    </div>
  );
}