import React from "react";

export default function ListEntry(props) {

  const [reload, setReload] = React.useState(false);

  function handleClick() {
    props.item.checked = !props.item.checked
    // props.setList(props.list)
    setReload(!reload)
  }

  var classes = props.item.checked ? 'listItem checked' : 'listItem'

  return (
    <div className={classes}
    onClick={handleClick}>
      {props.item.name}
      {props.item.checked && <div className='complete'>COMPLETED</div>}
    </div>
  );
}