import React from 'react'
import s from './Post.module.css'

const Post = (props) => {

    
    return (
        <>
            <div className={s.item}>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
                <p className={s.text}>{props.message}</p>

            </div>
            <div>
                {props.likeCounts}
            </div>
        </>
    )
}

export default Post;