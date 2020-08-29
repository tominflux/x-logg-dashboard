import Login from '../components/login'
import DashboardHead from '../components/head'

const LoginPage = () => (<>
    <DashboardHead />
    <section>
        <div className="container">
            <Login />
        </div>
    </section>
</>)

export default LoginPage