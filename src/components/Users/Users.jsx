import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <>
            <div className='pagination'>
                {pages.map(p => {
                    let path = '/users/' + p;
                    return <NavLink to={path}
                        className={props.currentPage === p && 'activeLink'}
                        onClick={() => { props.onPageChanged(p) }}>{p}</NavLink>
                })}
            </div>
             <h2>Users</h2>
            <div className={s.usersWrap}>
                {props.users.map(u =>
                    <div key={u.id} className={s.usersItemWrap}>
                        <div className={s.usersAva}>
                            <div className={s.usersAvaImg}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={s.img} src={u.photos.small != null ? u.photos.small : 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button className='btn btn-danger' onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button className='btn btn-success' onClick={() => { props.follow(u.id) }}>Follow</button>

                                }
                            </div>
                        </div>
                        <div className={s.usersPost}>
                            <div className={s.userNameStatus}>
                                <div className={s.usersName}>{u.name}</div>
                                <div className={s.usersStatus}>{u.status}</div>
                            </div>
                            <div className={s.usersLocation}>
                                <div className={s.usersLocationCountry}>{"u.location.country"},</div>
                                <div className={s.usersLocationCity}>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </>
    )
}

export default Users;