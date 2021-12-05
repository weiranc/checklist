export default function Search(props) {
  return (
    <div className='search'>
        <input className='searchBar' placeholder='Search...'
        onChange={e => props.setFilter(e.target.value)}
        />
    </div>
  );
}