import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../features/booking/bookingSlice";

const YourInformation = ({ setSelectedMenu }) => {
    const dispatch = useDispatch();
    const { firstName, lastName, phone, email, gender, notes } = useSelector(state => state.booking);

    const handleValidation = () => {

        setSelectedMenu(3)
    }

    return (
        <section className="vasuki-main-section active">
            <div className="vasuki-section-name">
                <i className="fa-solid fa-left-long back" style={{ "color": "#ffffff" }} onClick={() => setSelectedMenu(1)}></i>
                <span>Your Information</span>
            </div>
            <div className="vasuki-section-form vasuki-customer-info">
                <div className="vasuki-form-field">
                    <label for="first-name" className="required">First Name</label>
                    <input type="text" id="first-name" value={firstName} onChange={(e) => dispatch(updateUserInfo({ type: 'firstName', data: e.target.value }))} name="first-name" placeholder="First Name" required />
                </div>
                <div className="vasuki-form-field">
                    <label for="last-name" className="required">Last Name</label>
                    <input type="text" id="last-name" name="last-name" value={lastName} onChange={(e) => dispatch(updateUserInfo({ type: 'lastName', data: e.target.value }))} placeholder="Last Name" required />
                </div>
                <div className="vasuki-form-field">
                    <label for="email" className="required">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => dispatch(updateUserInfo({ type: 'email', data: e.target.value }))} placeholder="Email" required />
                </div>
                <div className="vasuki-form-field">
                    <label for="phone" className="required">Phone</label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => dispatch(updateUserInfo({ type: 'phone', data: e.target.value }))} name="phone" placeholder="Phone" required />
                </div>
                <div className="vasuki-form-field">
                    <p>Gender</p>
                    <div className="radio-field">
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">Male</label>
                    </div>
                    <div className="radio-field">
                        <input type="radio" id="female" name="gender" value="female" />
                        <label for="female">Female</label>
                    </div>
                    <div className="radio-field">
                        <input type="radio" id="other" name="gender" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="vasuki-form-field">
                    <label for="notes">Additional Notes</label>
                    <textarea type="notes" id="notes" name="notes" value={notes} onChange={(e) => dispatch(updateUserInfo({ type: 'notes', data: e.target.value }))} placeholder="Type extra notes here"></textarea>
                </div>
            </div>
            <div className="vasuki-next" onClick={handleValidation}>
                <button className="vasuki-next-button">
                    Continue
                </button>
            </div>
        </section>
    )
}

export default YourInformation;