import React from "react";
import ReactDOM from 'react-dom/client';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        alert('Submit name: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text"
                        value={this.state.value}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm />)