import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showLightbox, hideLightbox } from '../actions.js';

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
                <input type="checkbox" className="todo" />
                <lable className="todo">{todo}</lable>
              </div>
              <div>
                <button
                  className="todoList-editButtom"
                  onClick={this.props.showLightbox}
                >
                  EDIT
                </button>
                <button className="todoList-deleteButtom">DELETE</button>
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
  hideLightbox: () => dispatch(hideLightbox())
});

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
