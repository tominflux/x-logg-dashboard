const { default: UserloggSummary } = require("./userloggSummary")

const DashSummary = (props) => {
    //Render
    return (
        <div className="container dash-summary">
            <div className="row">
                <div className="col-md-4">
                    <UserloggSummary />
                </div>
                <div className="col-md-4">

                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    )
}

export default DashSummary