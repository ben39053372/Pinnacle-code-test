import React from "react";
import "./index.css";

// If you wanna implement by TypeScript (Advanced Requirement 1), then rename this file to index.tsx and remove index.jsx
// Otherwise, remove this file

interface Props {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export default class Switch extends React.PureComponent<Props> {
    render() {
        return (
            <label className={`comp-switch ${this.props.disabled ? "disabled" : ""}`}>
                <input title="checkbox" type="checkbox" checked={this.props.checked} onChange={() => !this.props.disabled && this.props.onChange(!this.props.checked)} />
                <span className="slider round" />
            </label>
        );
    }
}
