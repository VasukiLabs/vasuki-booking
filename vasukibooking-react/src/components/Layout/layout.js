import { useState } from 'react'

const menuItems = [
    {
        name: 'Service Selection',
        class: 'fa-sharp fa-solid fa-screwdriver-wrench fa-2x',
        number: 0
    },
    {
        name: 'Date & Time',
        class: 'fa-solid fa-calendar fa-2x',
        number: 1
    },
    {
        name: 'Your Information',
        class: 'fa-solid fa-user fa-2x',
        number: 2
    },
    {
        name: 'Payments',
        class: 'fa-solid fa-credit-card fa-2x',
        number: 3
    }
]

const Layout = ({ selectedMenu, children }) => {
    const [toggle, setToggle] = useState()

    const handleToggle = () => {
        setToggle(prev=>!prev)
    }

    return (
        <main className="vasuki-app">
            <section className={`vasuki-sidebar open ${toggle && 'collapsed'}`}>
                <section className="vasuki-sidebar-index">
                    {menuItems.map(item => {
                        return <div className={`vasuki-sidebar-index-option ${item.number === selectedMenu ? 'active' : item.number < selectedMenu ? 'complete' : '' }`}>
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