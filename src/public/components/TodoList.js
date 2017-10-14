import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  todos: PropTypes.array.isRequired
};
const defaultProps = {
  todos: ['af', 'sf']
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    this.refs.todoListWrapper.scrollTop = this.refs.todoListWrapper.scrollTop = 0;
  }
  render() {
    return (
      <div className="todoList-container">
        <div className="todoList-wrapper" ref="todoListWrapper">
          {this.props.todos.map((todo, idx) => (
            <div className="todoList-todo" key={idx}>
              <div>
                <button className="todoList-doneButtom" />
                <span>{todo}</span>
              </div>
              <button className="todoList-deleteButtom" />
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
