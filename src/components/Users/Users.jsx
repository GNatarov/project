import * as axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'
import './usersStyles.css'


class Users extends React.Component {

    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
            
        })
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
        })
    }
    
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                                        className={this.props.currentPage === p && 'activeLink'}
                                        onClick={() => {this.onPageChanged(p)}}>{p}</NavLink> })}
                                        

                </div>
                <h2>Users</h2>
                <div className={s.usersWrap}>
                    {this.props.users.map(u =>

                        <div key={u.id} className={s.usersItemWrap}>
                            <div className={s.usersAva}>
                                <div className={s.usersAvaImg}>
                                    <img className={s.img} src={u.photos.small != null ? u.photos.small : 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'} />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button className='btn btn-danger' onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                        : <button className='btn btn-success' onClick={() => { this.props.follow(u.id) }}>Follow</button>

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

}

export default Users;