
function List(props){
    const catagories = props.catagories
    const itemList = props.items
    const listItems = itemList.map(item => 
            <li key={item.id}>
                {item.name}: &nbsp;
                <b>{item.calories}</b></li>);
    return(
        <ul>
            <h3 className="list-category">{catagories}</h3>
            <ol className="list-items">{listItems}</ol>
        </ul>
    )
}
List.defaultProps = {
    catagories: "catagories",
    items: []
}

export default List