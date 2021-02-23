import React from 'react'
import a from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img className={a.contentImg} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            <div className={a.aboutWrap}>
                <div className={a.myAva}>
                    <img src="https://imgur.com/I80W1Q0.png" alt="" />
                </div>
                <div className={a.aboutText}>
                    <h3>WASSEE</h3>
                    <p>Date of Birth: 23 january</p>
                    <p>City: Kharkiv</p>
                    <p>Education: .!.</p>
                    <p>Web Site: none</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;