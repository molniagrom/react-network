import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reduser";
import axios from "axios";
import {Users} from "./Users";
import { ReactComponent as Preloader } from "../../assets/images/Gear@1x-0.7s-200px-200px.svg";

export class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetchingAC(true)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetchingAC(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetchingAC(true)
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                      onPageChanged={this.onPageChanged}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
                />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetchingAC: (IsFetching) =>{
            dispatch(toggleIsFetchingAC(IsFetching))
        },
    }
}

export const UsersContainer =
    connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)