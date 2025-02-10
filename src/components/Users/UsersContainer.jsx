import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reduser";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPi} from "../../api/api";

export class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPi.getUsers(this.props.currentPage, this.props.currentPage).then((data) => {
            // debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPi.getUsers(pageNumber, this.props.pageSize).then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
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

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(follow(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollow(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPage(page))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetching(isFetching))
//         },
//     }
// }


export const UsersContainer =
    connect(mapStateToProps,  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,})(UsersAPIComponent)

