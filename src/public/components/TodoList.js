import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  todos: PropTypes.array.isRequired
};
const defaultProps = {};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todoList-container">
        <div className="todoList-wrapper">
          {this.props.todos.map((todo, idx) => (
            <div className="todoList-todo" key={idx}>
              <span>{todo}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispachToProps = state => ({});

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
