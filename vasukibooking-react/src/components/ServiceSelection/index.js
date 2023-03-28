const ServiceSelection = ({ setSelectedMenu }) => {

    return (
        <section className="vasuki-main-section active">
            <div className="vasuki-section-name">
                <span>Service Selection</span>
            </div>
            <div className="vasuki-section-form">
                <div className="vasuki-form-field">
                    <label for="service" className="required">Service</label>
                    <input type="text" name="service" placeholder="Select Service" className="dropdown" required />
                </div>
                <div className="vasuki-form-field">
                    <label for="employee">Employee</label>
                    <input type="text" name="employee" placeholder="Select Employee" className="dropdown" />
                </div>
            </div>
            <div className=" vasuki-next" onClick={() => setSelectedMenu(1)}>
                <button className="vasuki-next-button">
                    Continue
                </button>
            </div>
        </section>
    )

}

export default ServiceSelection;