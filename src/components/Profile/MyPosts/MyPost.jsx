import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'




const MyPosts = ({posts, addPost, updateNewPostText, newPostText}) => {
    let postsElement = posts.map(p => <Post message={p.message} likeCounts={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
        
    }

    return (
        
        <div className={s.postsWrap}>
            <h2>My Post</h2>
            <div className={s.postInput}>
                <textarea ref={newPostElement} onChange={onPostChange} value={newPostText}/>
                <button id="post-btn" onClick={ onAddPost } className='btn btn-dark'>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}

            </div>
        </div>
    )
}

export default MyPosts;