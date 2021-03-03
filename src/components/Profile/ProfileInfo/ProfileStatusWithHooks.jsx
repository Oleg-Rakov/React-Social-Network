import React, { useEffect, useState } from 'react'

let ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let activeEditMode = () => {
        setEditMode(true)
    }

    let disableEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status:</b><span onDoubleClick={activeEditMode}>{props.status || 'No Status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={disableEditMode} value={status} />
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks