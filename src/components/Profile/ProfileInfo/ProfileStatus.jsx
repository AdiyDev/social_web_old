import React from 'react';
import s from "./ProfileInfo.module.css";
// import { render } from '@testing-library/react';
// import { updateStatus } from './../../../redux/profile-reducer';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activeteEditMode = () => {
    //берется из React.Componentт передаем обьект свойства который перезапишет свойства в нашем локальном стейте
    this.setState({
      editMode: true
    })
  }
  deactiveteEditMode = () => {
    //берется из React.Componentт передаем обьект свойства который перезапишет свойства в нашем локальном стейте
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  handleFocus = (evt) => {
    evt.target.select();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
    console.log('update')
  }

  render() {
    console.log('render')
    return (
      <ul>
        {!this.state.editMode &&
          <li><span onDoubleClick={this.activeteEditMode}>{this.props.status || '------'}</span></li>
        }
        {this.state.editMode &&
          <li><input
            onChange={this.onStatusChange}
            onFocus={this.handleFocus}
            autoFocus={true}
            onBlur={this.deactiveteEditMode}
            value={this.state.status} /></li>
        }
      </ul>
    )
  }
}

export default ProfileStatus;