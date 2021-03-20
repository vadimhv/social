import React, {useEffect, useState} from 'react';

const ProfileStatusWithHook = (props) => {

    let [editMode, changeEditMode] = useState(false);
    let [status, changeStatus] = useState(props.status);

    useEffect(() => {
        changeStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        changeEditMode(true)
    }

    const deactivateEditMode = () => {
        changeEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        changeStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&
            <div>
                <span onClick={activateEditMode}>{props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </>
    )
}

export default ProfileStatusWithHook;