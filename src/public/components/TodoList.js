import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTodos, showLightbox, hideLightbox } from '../actions.js';

import Lightbox from './Lightbox';
import TodoLightbox from './TodoLightbox';

const propTypes = {
  todos: PropTypes.array.isRequired,
  displayLightbox: PropTypes.bool.isRequired
};
const defaultProps = {};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }
  componentDidUpdate() {
    this.refs.todoListWrapper.scrollTop = this.refs.todoListWrapper.scrollTop = 0;
  }
  handleDeleteTodo(index) {
    const copiedState = [...this.props.todos];
    copiedState.splice(index, 1);
    this.props.updateTodos(copiedState);
  }
  render() {
    return (
      <div className="todoList-container">
        <div className="todoList-wrapper" ref="todoListWrapper">
          {this.props.todos.map((todo, idx) => (
            <div className="todoList-todo" key={idx}>
              <div>
                <input type="checkbox" />
                <lable className="todo">{todo}</lable>
              </div>
              <div>
                <button
                  className="todoList-editButtom"
                  onClick={this.props.showLightbox}
                >
                  EDIT
                </button>
                <button
                  className="todoList-deleteButtom"
                  onClick={() => this.handleDeleteTodo(idx)}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
        {this.props.displayLightbox ? (
          <Lightbox>
            <TodoLightbox hideLightbox={this.props.hideLightbox} />
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
  displayLightbox: state.displayLightbox
});
const mapDispachToProps = dispatch => ({
  showLightbox: () => dispatch(showLightbox()),
  hideLightbox: () => dispatch(hideLightbox()),
  updateTodos: todos => dispatch(updateTodos(todos))
});

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
