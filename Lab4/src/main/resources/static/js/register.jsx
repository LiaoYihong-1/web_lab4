class SignUpForm extends React.Component{
    constructor(pros) {
        super(pros)
        this.state = {username: '',password:''};
    }

    render() {
        return (
            <form id={"sign_up_form"}>
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
                    <button type="button">Log in</button>
                    <a href="/register.html">
                        <button type="button">register</button>
                    </a>
                </label>
            </form>
        );
    }
}
ReactDOM.render(<SignUpForm/>,document.getElementById("sign-up"));