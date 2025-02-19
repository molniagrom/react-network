import React from "react";

export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status || "",  // Гарантируем, что `status` всегда строка
    };

    componentDidUpdate(prevProps) {
        // Обновляем state, если status в props изменился
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status || "" });
        }
    }

    activateEditMode = () => {
        this.setState({ editMode: true });
    };

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.upDateStatus(this.state.status || "");  // Отправляем не null, а строку
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    render() {
        return (
            <>
                {!this.state.editMode && (
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status || "---"}</span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus
                            onBlur={this.deactivateEditMode}
                            value={this.state.status || ""}  // Если null → пустая строка
                        />
                    </div>
                )}
            </>
        );
    }
}
