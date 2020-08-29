import styles from './login.module.css'


const Login = () => {
    console.log(styles)
    //Render
    return (
        <div 
            className={styles.login}
        >
            <div className="row align-items-center">
                <div 
                    className={
                        `col-md-5 ${styles.login__labelCol}`
                    }
                >
                    <span
                        className={styles.login__label}
                    >
                        Username:
                    </span>
                </div>
                <div
                    className={
                        `col-md-7 ${styles.login__inputCol}`
                    }
                >
                    <input
                        className="login__input"
                        type="text"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div 
                    className={
                        `col-md-5 ${styles.login__labelCol}`
                    }
                >
                    <span
                        className={styles.login__label}
                    >
                        Password:
                    </span>
                </div>
                <div
                    className={
                        `col-md-7 ${styles.login__inputCol}`
                    }
                >
                    <input
                        className={styles.login__input}
                        type="password"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div 
                    className={
                        `col ${styles.login__submitCol}`
                    }
                >
                    <button
                        className={
                            `btn btn-primary ${styles.login__submit}`
                        }
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login