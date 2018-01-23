const INITIAL_STATE = {
    todos:[],
    editMode: 0
};
const url = "http://localhost:3000/api/todos/";


export const ADD_TODO = 'add todo';
export const DELETE_TODO = 'delete todo';
export const EDIT_TODO = 'edit todo';
export const GET_TODOS = 'get todos';
export const EDIT_MODE= 'edit mode';


export function addTodo(newtodo) {
    return {
        type: ADD_TODO,
        payload: { todo: newtodo }
    };
}
export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload:  id
    };
}

export function editTodo(newTodo){
    return {
        type: EDIT_TODO,
        payload: {newTodo}
    }
}

export function getTodos(todos){
    return {
        type: GET_TODOS,
        payload: todos
    }
}

export function fetchGetTodos() {
    return function(dispatch) {
        fetch(url)
            .then((res) => res.json())
            .then(result => dispatch(getTodos(result.todos)))
    }
}


export function fetchAddTodo(newtodo) {
    return function(dispatch) {
        fetch(url, {
            method: 'post',
            body: JSON.stringify({todo: newtodo}),
            headers: {"Content-Type": "application/json"}
        })
            .then((res) => res.json())
            .then(todo => {

                dispatch(addTodo(todo))})
    }
}

export function editMode(id){
    return {
        type: EDIT_MODE,
        payload: id
    }
}
export function fetchEditTodo(_id, newTodo) {
    console.log(_id);
    return function(dispatch) {
        fetch(url + _id , {
            method: 'put',
            body: JSON.stringify({todo: newTodo}),
            headers: {"Content-Type": "application/json"}
        })
            .then((res) => res.json())
            .then(todo => {
                console.log(todo)
                dispatch(editTodo(todo))})
    }
}



export function fetchDeleteTodo(_id){
    return function(dispatch) {
        fetch(url + _id , {
            method: 'delete'
        }).then((res) => {
            res.json()})
            .then(() => {dispatch(deleteTodo(_id))});
    }
}
export default function(state = INITIAL_STATE, action) {
    const { type, payload} = action;
    switch (type) {
        case GET_TODOS:
            return {
                ...state,
                todos: [...state.todos, ...payload]
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload.todo]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== payload)
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo._id === payload.newTodo._id)
                        todo.todo=payload.newTodo.todo;
                    return todo;
                }),
                editMode: 0
            };
        case EDIT_MODE:
            return {
                ...state,
                editMode: payload
            };
        default:
            return state;
    }
}



