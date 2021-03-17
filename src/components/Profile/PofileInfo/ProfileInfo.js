import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatar}><img src={props.profile.photos.large} /></div>
                <div>
                    <div className={classes.name}>{props.profile.fullName}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    {props.profile.lookingForAJob ? <span className={classes.desc}>В поисках работы</span> : null}
                    <div className={classes.contacts}>
                        <span className={classes.title}>Контакты:</span>
                        {props.profile.contacts.facebook ? <div className={classes.social}><a href={`https://${props.profile.contacts.facebook}`}>facebook</a></div> : null}
                        {props.profile.contacts.website ? <div className={classes.social}><a href={`https://${props.profile.contacts.website}`}>website</a></div> : null}
                        {props.profile.contacts.vk ? <div className={classes.social}><a href={`https://${props.profile.contacts.vk}`}>vk</a></div> : null}
                        {props.profile.contacts.twitter ? <div className={classes.social}><a href={`${props.profile.contacts.twitter}`}>twitter</a></div> : null}
                        {props.profile.contacts.instagram ? <div className={classes.social}><a href={`https://${props.profile.contacts.instagram}`}>instagram</a></div> : null}
                        {props.profile.contacts.youtube ? <div className={classes.social}><a href={`https://${props.profile.contacts.youtube}`}>youtube</a></div> : null}
                        {props.profile.contacts.github ? <div className={classes.social}><a href={`https://${props.profile.contacts.github}`}>github</a></div> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileInfo;