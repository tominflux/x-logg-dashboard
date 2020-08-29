

const Login = () => {
    //Render
    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6 login__label-col">
                    Username:
                </div>
                <div className="col-md-6 login__input-col">
                    <input
                        className="login__input"
                        type="text"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 login__label-col">
                    Password:
                </div>
                <div className="col-md-6 login__input-col">
                    <input
                        className="login__input"
                        type="password"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col login__submit-col">
                    <button
                        className="btn btn-primary"
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login