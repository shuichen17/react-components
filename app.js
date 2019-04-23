// TODO
var App = () => (
  <div>
    <h1>GroceryList</h1>
    <GroceryList items = {groceryItems} />
  </div>

	);



var GroceryList = (props) => (
   <ul>
     {props.items.map((item, index) =>
     	<GroceryItem key={index} name={item} />)}
   </ul>
	);
class GroceryItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			crossedOut: false,
			bold: true
		};
	}

onListItemClick(event) {
	this.setState({
		crossedOut: !this.this.state.crossedOut
	});
}

onMouseEnterHandler(event) {
	this.setState({
		bold: false
	});
}

onMouseLeaveHandler(event) {
	this.setState({
		bold: true
	});
}

render() {
	var style = {
		'textDecoration': this.state.crossedOut ? 'line-through' : 'none',
		'fontWeight': this.state.bold ? 'bold' : 'normal'
	}
	return (
      <li style={style}
         onClick={this.onListItemClick.bind(this)}
         onMouseEnter={this.onMouseEnterHandler.bind(this)}
         onMouseLeave={this.onMouseLeaveHandler.bind(this)}>
         {this.props.name}
         </li>


		)
}
}
var groceryItems = ['apple', 'orange', 'banana', 'kiwi']

ReactDOM.render(<App />, document.getElementById('app'));