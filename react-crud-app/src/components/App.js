import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// action creatorを呼び出す。
import { readEvents } from '../actions';
import _ from 'lodash';


class App extends Component {

  componentDidMount(){
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render() {
    return (
        <Fragment>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                { this.renderEvents() }
              </tbody>
            </table>
        </Fragment>
    )
  }
}

// stateとcomponentを関連づける
const mapStateToProps = state => ({events: state.events});
// const  mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
//})

const mapDispatchToProps = ({ readEvents });


export default connect(mapStateToProps, mapDispatchToProps)(App);