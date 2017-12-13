// // TODO
// var App = () => (
//   <div> Hello world </div>
// );

// ReactDOM.render(<App />, document.getElementById('app'));

var App = () => (
 <div>
  <h2>My Todo List</h2>
  <TodoList todos={['one', 'two']}/>
 </div> 
);



var TodoList = (props) => (
  <ul>
    {props.todos.map((todo, index) =>
      <TodoListItem todo={todo} key={index}/>
    )}
  </ul>
);

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.todo}</li>
//     );

//   }

// }
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ['line-through', 'underline dotted red', '']
      done: 0
    };
  }

  onListItemClick() {
    if (this.state.done === 2){
      this.setState({
        done: 0
      });
    } else {
      this.setState({
        done: this.state.done + 1
      });
    }
  }

  render() {
    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style;
    if (this.state.done === 0 ){
      style = {
        textDecoration: 'line-through'
      }
    } else if (this.state.done === 1) {
      style = {
        fontFamily: 'Sans-Serif'
      }
    } else {
      style = {
        textDecoration: 'underline dotted red'
      }
    }
//     var style = {
// //      textDecoration: this.state.done ? 'line-through' : 'underline'
//       if (this.state.done === 0) {
//         return textDecoration: 'line-through'
//       };
    // };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));