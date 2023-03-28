import MiniCalendar from "../Calendar/MiniCalendar";
import { add, format } from 'date-fns'
import { useEffect, useRef, useState } from "react";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateDateTime } from "../../features/booking/bookingSlice";

const SlotBooking = ({ setSelectedMenu }) => {
    const { date, time } = useSelector(state => state.booking);
    const dispatch = useDispatch();
    const [timesArray, setTimesArray] = useState(null);

    useEffect(() => {
        if (!date) return

        const times = getTimes()
        setTimesArray([...times])

    }, [date])


    const getTimes = () => {
        if (!date) return

        const beginning = add(date, { hours: 9 })
        const end = add(date, { hours: 16 })
        const interval = 15

        const times = []

        for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
            times.push(format(i, 'kk:mm'))
        }

        return times
    }

    return (
        <section className="vasuki-main-section active">
            <div class="vasuki-section-name">
                <i class="fa-solid fa-left-long back" style={{ "color": "#ffffff" }} onClick={() => setSelectedMenu(0)}></i>
                <span>Date & Time</span>
            </div>
            <div style={{overflowY: 'auto'}}>
                <MiniCalendar minW='100%' selectRange={false} />

                {date && <SimpleGrid minChildWidth='100px' spacing='20px' padding='20px'>
                    {timesArray && timesArray.length > 0 && timesArray.map((t, i) => {
                        return <Center key={`time-${i}`} bg='gray' _hover={{ bg: 'darkgray' }} cursor={'pointer'} rounded={'3px'} justifyContent={'center'} height='30px' width='80px' onClick={() => dispatch(updateDateTime({ type: 'time', data: t }))}>{t}</Center>
                    })}
                </SimpleGrid>}

                {/* {date && <Center key={`time-${0}`} bg='gray' _hover={{bg: 'darkgray'}} cursor={'pointer'} rounded={'3px'} justifyContent={'center'} height='30px' width='80px' >'times'</Center>} */}

            </div>
            <div className="vasuki-next" onClick={() => setSelectedMenu(2)}>
                <button className="vasuki-next-button">
                    Continue
                </button>
            </div>
        </section>
    )
}

export default SlotBooking;