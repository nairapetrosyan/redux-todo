import React from 'react';
import List from './List';
import { mapStateToProps, mapDispatchToProps} from './stateToProps';
import { connect } from 'react-redux';


class AddTodo extends React.Component{
	constructor(props){
		super(props);
    }

    componentDidMount(){
        this.props.fGetTodos();
    }
    editMode = (_id) => {
	    const it = this.props.todos.filter((item)=> {
	        return (item._id === _id);
	    })[0];
	    this._inputElement.value=it.todo;
        this.props.onoff(_id);
	}

    addOrEdit=(e)=>{
        e.preventDefault();
        const newtodo = this._inputElement.value;
        if(this.props.editMode){
	        this.props.fEditTodo(this.props.editMode, newtodo)
        }
        else {
            this.props.fAddTodo(newtodo);
        }
        this._inputElement.value ="";
    }
    fetchDeleteTodo = (_id) =>{
	    this.props.fDeleteTodo(_id)
    }

  render() {
	    return (
	        <div className="addtodo">
                <input key="addtodo" placeholder="Enter todo" ref={(a) => {this._inputElement = a}}>
                </input>
                <button type="submit" onClick={this.addOrEdit}>Submit</button>
                <List todos={this.props.todos} editMode={this.editMode} delete={this.fetchDeleteTodo} />
            </div>
        );

	}
}




export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddTodo)

//ReactDOM.render(<Provider store={store}><AddTodo/></Provider>, document.getElementById('app'));


