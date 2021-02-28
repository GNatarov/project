import React from 'react'
import a from './ProfileInfo.module.css'
import Proloader from '../../common/preloader/preloader'

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Proloader />
    }
    //debugger;
    return (
        <div>
            <img className={a.contentImg} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            <div className={a.aboutWrap}>
                <div className={a.myAva}>
                    <img src={props.profile.photos.large} alt="" />
                </div>
                <div className={a.aboutText}>
                    <h3>{props.profile.fullName}</h3>
                    <p>About me: {props.profile.aboutMe}</p>
                    <p>Looking for a job: {props.profile.lookingForAJob ? 'Да' : 'Нет'}</p>
                    <p>Looking for a job description: {props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;