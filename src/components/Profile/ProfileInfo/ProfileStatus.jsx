import React from 'react';
import s from "./ProfileInfo.module.css";
// import { render } from '@testing-library/react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activeteEditMode() {
    //берется из React.Componentт передаем обьект свойства который перезапишет свойства в нашем локальном стейте
    this.setState({
      editMode: true
    })
  }
  deactiveteEditMode() {
    //берется из React.Componentт передаем обьект свойства который перезапишет свойства в нашем локальном стейте
    this.setState({
      editMode: false
    })
  }

  handleFocus = (evt) => {
    evt.target.select();
  }
  render() {
    return (
      <ul>
        {!this.state.editMode &&
          <li onDoubleClick={this.activeteEditMode.bind(this)}>{this.props.status}</li>
        }
        {this.state.editMode &&
          <li><input onFocus={this.handleFocus} autoFocus={true} onBlur={this.deactiveteEditMode.bind(this)} value={this.props.status} /></li>
        }
      </ul>
    )
  }
}

export default ProfileStatus;