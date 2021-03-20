import React from 'react';
import style from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, error, profile, savePhoto}) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>

            <div className={style.desc}>Full name: {createField('text', 'Name', 'fullName', [], Input)}</div>
            <div className={style.desc}>Looking for a job desc</div>
            {createField('text', 'Looking for a job', 'lookingForAJobDescription', [], Input)}
            <div className={style.desc}>About me</div>
            {createField('text', 'About me', 'aboutMe', [], Textarea)}
            <div className={style.contacts}>
                <span className={style.title}><b>Contacts:</b></span>
                {Object.entries(profile.contacts).map(key => {
                    if(key[1] === null) {
                        return null
                    } else {
                        return <div key={key[0]} className={style.contact}>
                            <span>{key[0]}: </span><div>{createField('text', key[0], 'contacts.' + key[0], [],Input)}</div>
                        </div>
                    }

                })}
            </div>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div><button>save</button></div>
        </form>
            <div className={style.desc}><b>Choose a main photo for your profile</b></div><input type={'file'} onChange={onMainPhotoSelected}/>
        </div>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;