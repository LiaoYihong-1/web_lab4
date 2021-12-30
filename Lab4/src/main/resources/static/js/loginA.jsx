class LoginA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '',password:''};
    }

    render() {
        return (
            <form id={"login_form"}>
                <label>
                    Name:
                    <input type="text" value={this.state.username}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="text" value={this.state.password}/>
                </label>
                <br/>
                <label>
                    <button type="submit">Log in</button>
                    <a href="/register.html">
                        <button type="button">register</button>
                    </a>
                </label>
            </form>
        );
    }
}
ReactDOM.render(<LoginA/>,document.getElementById("login-window"));
ReactDOM.render(<a href="/main.html">main page</a>,document.getElementById("to-main-page"));