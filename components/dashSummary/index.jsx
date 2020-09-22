import UserloggSummary from './userloggSummary'
import CataloggSummary from './cataloggSummary'

const DashSummary = () => {
    //Render
    return (
        <div className="container dash-summary">
            <div className="row">
                <div className="col-md-4">
                    <UserloggSummary />
                </div>
                <div className="col-md-4">
                    <CataloggSummary />
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    )
}

export default DashSummary