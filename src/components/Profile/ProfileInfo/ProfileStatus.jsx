import React from "react";

export class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }

        console.log("componentDidUpdate")
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    };
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.upDateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    render() {
        console.log("render")
        return (
            <>
                {!this.state.editMode && (
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status || "---"}</span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                )}
            </>
        );
    }
}