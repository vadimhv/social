import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import profilePhoto from '../../../assets/img/user_moc.png';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }


    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => setEditMode(false)
        );
    }

    return (
        <>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatar}><img src={profile.photos.large || profilePhoto}/></div>

                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}
                                             savePhoto={savePhoto}/> :
                    <ProfileData profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}
                                 goToEditMode={() => {
                                     setEditMode(true)
                                 }}/>}
            </div>


        </>
    )
}

const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
    return (
        <div>

            <div className={classes.name}>{profile.fullName}</div>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            <div className={classes.desc}>About me: {profile.aboutMe}</div>
            {profile.lookingForAJobDescription &&
            <span className={classes.desc}>{profile.lookingForAJobDescription}</span>}
            <div className={classes.contacts}>
                <span className={classes.title}><b>Contacts:</b></span>
                {Object.entries(profile.contacts).map(key => {
                    if (key[1] === null) {
                        return null
                    } else {
                        return <Contact key={key[0]} contactTitle={key[0]} contactValue={key[1]}/>
                    }
                })}
            </div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit profile</button>
            </div>}
        </div>
    )
}

const Contact = ({contactTitle, contactValue}, profile) => {
    return <div className={classes.social}><a href={contactValue}>{contactTitle}</a></div>
}

export default ProfileInfo;