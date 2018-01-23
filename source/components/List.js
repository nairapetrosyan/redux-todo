import React from 'react';

const List = (props) =>{
	console.log(props.todos)
		return (<div>
			<ul>
          		{
          		    props.todos.map((item) => {
          		        return (<li key={item._id+item.todo}>{item.todo}
          		        <button onClick={()=>{props.editMode(item._id)}}>Edit</button>
                            <button onClick={()=>{props.delete(item._id)}}>Delete</button>
                        </li>)
          		    })
          		}
  			</ul>
  		</div>)
  

}
export default List;
