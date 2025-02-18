import React from "react";

export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    };

    activateEditMode = () => {
        debugger
        console.log("this:", this)
        this.setState({ editMode: true });
    };
    deactivateEditMode () {
        this.setState({ editMode: false });
    };

    render() {
        return (
            <>
                {!this.state.editMode && (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input onBlur={this.deactivateEditMode} value={this.props.status} autoFocus />
                    </div>
                )}
            </>
        );
    }
}
