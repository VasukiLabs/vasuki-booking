import { useState } from 'react'

const menuItems = [
    {
        name: 'Service Selection',
        class: 'fa-sharp fa-solid fa-screwdriver-wrench fa-2x',
        status: 'complete'
    },
    {
        name: 'Date & Time',
        class: 'fa-solid fa-calendar fa-2x',
        status: 'active'
    },
    {
        name: 'Your Information',
        class: 'fa-solid fa-user fa-2x',
        status: false
    },
    {
        name: 'Payments',
        class: 'fa-solid fa-credit-card fa-2x',
        status: false
    }
]

const Layout = ({ children }) => {
    const [toggle, setToggle] = useState()

    const handleToggle = () => {
        setToggle(prev=>!prev)
    }

    return (
        <main className="vasuki-app">
            <section className={`vasuki-sidebar open ${toggle && 'collapsed'}`}>
                <section className="vasuki-sidebar-index">
                    {menuItems.map(item => {
                        return <div className={`vasuki-sidebar-index-option ${item.status && item.status}`}>
                        <div className="vasuki-sidebar-index-option-icon">
                            <i className={item.class} style={{"color": "#ffffff"}}></i>
                        </div>
                        <span className="vasuki-sidebar-index-option-text">
                            {item.name}
                        </span>
                        <div className="vasuki-sidebar-index-option-status">

                        </div>
                    </div>
                    })}
                </section>
                <section onClick={handleToggle} className="vasuki-sidebar-collapse">
                <div class="vasuki-sidebar-collapse-option">
                    <div className="vasuki-sidebar-collapse-icon">
                        <i className="fa-solid fa-chevron-double-left fa-2x" style={{"color": "#ffffff"}}></i>
                    </div>
                    <span className={`vasuki-sidebar-collapse-text`}>
                        Collapse Menu
                    </span>
                    </div>
                </section>
            </section>
            <section className="vasuki-main-content">
                {children}
            </section>
        </main>
    )
}

export default Layout;