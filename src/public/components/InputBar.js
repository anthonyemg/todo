import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTodos } from '../actions.js';

const propTypes = {
  todos: PropTypes.array.isRequired
};
const defaultProps = {};

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
    this.handleTodoInput = this.handleTodoInput.bind(this);
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
  }
  handleTodoInput(e) {
    this.setState({
      newTodo: e.target.value
    });
  }
  handleEnterKeyPress(e) {
    if (e.charCode === 13 && this.state.newTodo !== '') {
      const newTodos = [...this.props.todos, this.state.newTodo];
      this.props.updateTodos(newTodos);
      this.setState({
        newTodo: ''
      });
    }
  }
  render() {
    return (
      <div className="inputBar-container">
        <input
          value={this.state.newTodo}
          type="text"
          onChange={this.handleTodoInput}
          onKeyPress={this.handleEnterKeyPress}
          placeholder="add todo"
        />
      </div>
    );
  }
}

InputBar.propTypes = propTypes;
InputBar.defaultProps = defaultProps;

const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispachToProps = dispatch => ({
  updateTodos: todo => dispatch(updateTodos(todo))
});

export default connect(mapStateToProps, mapDispachToProps)(InputBar);
