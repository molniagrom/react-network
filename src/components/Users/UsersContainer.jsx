import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow, toggleFollowingProgress, getUsers
} from "../../redux/users-reduser";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                      followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
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

// можно так
// let withRedirect = withAuthRedirect(UsersAPIComponent)
//
// export const UsersContainer =
//     connect(mapStateToProps,  {follow, unfollow, toggleFollowingProgress, getUsers})(withRedirect)

// можно так
// export const UsersContainer =
//     withAuthRedirect(
//         connect(mapStateToProps,  {follow, unfollow, toggleFollowingProgress, getUsers})(UsersAPIComponent)
//     )


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,  {follow, unfollow, toggleFollowingProgress, getUsers})
)(UsersAPIComponent)












