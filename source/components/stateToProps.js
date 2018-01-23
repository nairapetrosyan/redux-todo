import { fetchGetTodos, fetchAddTodo, fetchEditTodo, fetchDeleteTodo, editMode } from './../redux/reducers/todoReducer';

export function mapStateToProps(state) {
    return {todos: state.todos,
        editMode: state.editMode};
}

export function mapDispatchToProps(dispatch) {
    return {
        fGetTodos: () => dispatch(fetchGetTodos()),
        fAddTodo: (newtodo) => dispatch(fetchAddTodo(newtodo)),
        fEditTodo: (_id, newTodo) => dispatch(fetchEditTodo(_id, newTodo)),
        fDeleteTodo: (_id) => dispatch(fetchDeleteTodo(_id)),
        onoff: (bool) => dispatch(editMode(bool))
    };
};