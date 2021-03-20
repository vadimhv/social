import React, {Component} from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className={style.status}>
                {!this.state.editMode &&
                <div>
                    <span  onClick={this.activateMode}>{this.props.status || "-"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;