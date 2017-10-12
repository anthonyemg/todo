import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {};
const defaultProps = {
  todos: ['1', 'b', 'c', 'a', 'b', 'a', 'c', 'a', 'b', 'a', 'c', 'a', 'b', 'a']
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todoList-container">
        {this.props.todos.map((todo, idx) => (
          <div className="todoList-todo" key={idx}>
            <span>{todo}</span>
          </div>
        ))}
      </div>
    );
  }
}

TodoList.propTypes = propTypes;
TodoList.defaultProps = defaultProps;

const mapStateToProps = state => ({});
const mapDispachToProps = state => ({});

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
