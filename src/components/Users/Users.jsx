import React from 'react'
import s from './Users.module.css'
import './usersStyles.css'

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                followed: false,
                fullname: 'Gennadiy',
                status: 'hello',
                location: { city: 'Kharkiv', country: 'Ukraine' }
            },
            {
                id: 2,
                photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                followed: true,
                fullname: 'Georgiy',
                status: 'bey',
                location: { city: 'Kharkiv', country: 'Ukraine' }
            },
            {
                id: 3,
                photoUrl: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                followed: false,
                fullname: 'Morten',
                status: 'fuck',
                location: { city: 'Copenhagen', country: 'Denmark' }
            },
        ])
    }
    return (
        <>
            <h2>Users</h2>
            <div className={s.usersWrap}>
                {props.users.map(u =>
                    <div key={u.id} className={s.usersItemWrap}>
                        <div className={s.usersAva}>
                            <div className={s.usersAvaImg}>
                                <img className={s.img} src={u.photoUrl} />
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
                                <div className={s.usersName}>{u.fullname}</div>
                                <div className={s.usersStatus}>{u.status}</div>
                            </div>
                            <div className={s.usersLocation}>
                                <div className={s.usersLocationCountry}>{u.location.country},</div>
                                <div className={s.usersLocationCity}>{u.location.city}</div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </>
    )
}

export default Users;