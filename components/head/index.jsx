import React from 'react'
import Link from 'next/link'
import styles from './head.module.css'
import Logout from './logout'

const DashboardHead = () => (<>
    <header className={styles.header}>
        <div className="row align-items-center">
            <div className="col-md-3 text-center">
                [Icon]
            </div>
            <div className="col-md-3 text-center">
                <Link href="/">
                    <a>
                        <h1 className={styles.header__heading}>
                            [Sitename] Dashboard
                        </h1>
                    </a>
                </Link>
            </div>
            <div className="col-md-3">
                <span className={styles.header__welcome}>
                    Welcome [Admin Name]
                </span>
            </div>
            <div className="col-md-3 text-center">
                <Logout />
            </div>
        </div>
    </header>
</>)

export default DashboardHead