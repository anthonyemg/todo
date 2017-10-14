import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  updateTodos,
  selectTodo,
  showLightbox,
  hideLightbox
} from '../actions.js';

import Lightbox from './Lightbox';
import TodoLightbox from './TodoLightbox';

const propTypes = {
  todos: PropTypes.array.isRequired,
  todo: PropTypes.number,
  displayLightbox: PropTypes.bool.isRequired
};
const defaultProps = {};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleShowLightbox = this.handleShowLightbox.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
  }
  componentDidUpdate() {
    this.refs.todoListWrapper.scrollTop = this.refs.todoListWrapper.scrollTop = 0;
  }
  handleDeleteTodo(index) {
    const copiedState = [...this.props.todos];
    copiedState.splice(index, 1);
    this.props.updateTodos(copiedState);
  }
  handleShowLightbox(index) {
    this.props.selectTodo(index);
    this.props.showLightbox();
  }
  handleUpdateTodo(text, index) {
    const copiedState = [...this.props.todos];
    copiedState.splice(index, 1, text);
    this.props.updateTodos(copiedState);
  }
  render() {
    return (
      <div className="todoList-container">
        <div className="todoList-wrapper" ref="todoListWrapper">
          {this.props.todos.map((todo, index) => (
            <div className="todoList-todo" key={index}>
              <div>
                <input type="checkbox" />
                <lable className="todo">{todo}</lable>
              </div>
              <div>
                <button
                  className="todoList-editButtom"
                  onClick={() => this.handleShowLightbox(index)}
                >
                  EDIT
                </button>
                <button
                  className="todoList-deleteButtom"
                  onClick={() => this.handleDeleteTodo(index)}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
        {this.props.displayLightbox ? (
          <Lightbox>
            <TodoLightbox
              hideLightbox={this.props.hideLightbox}
              todos={this.props.todos}
              todoIndex={this.props.todoIndex}
              handleUpdateTodo={this.handleUpdateTodo}
            />
          </Lightbox>
        ) : (
          ''
        )}
      </div>
    );
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

const mapStateToProps = state => ({
  todos: state.todos,
  todoIndex: state.todoIndex,
  displayLightbox: state.displayLightbox
});
const mapDispachToProps = dispatch => ({
  showLightbox: () => dispatch(showLightbox()),
  hideLightbox: () => dispatch(hideLightbox()),
  updateTodos: todos => dispatch(updateTodos(todos)),
  selectTodo: index => dispatch(selectTodo(index))
});

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
