import MiniCalendar from "../Calendar/MiniCalendar";
import { add, format } from 'date-fns'
import { useEffect, useRef, useState } from "react";
import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateDateTime } from "../../features/booking/bookingSlice";

const SlotBooking = ({ setSelectedMenu }) => {
    const { date, time } = useSelector(state => state.booking);
    const interval = 30;
    const dispatch = useDispatch();
    const [timesArray, setTimesArray] = useState(null);
    const [dateTime, setDateTime] = useState(false)

    useEffect(() => {
        if (!date) return

        const times = getTimes()
        setTimesArray([...times])

    }, [date])

    const handleTimeSelection = (t) => {
        setTimesArray((prev) => {
            const newTimes = prev.map(time => {
                if(t.time === time.time) {
                    return {...time, selected: true}
                }
                return {...time, selected: false}
            })

            return newTimes;
        })
        setDateTime(`${format(date, 'PPP')} ${t.time}`)
        dispatch(updateDateTime({ type: 'time', data: t }))
    }


    const getTimes = () => {
        if (!date) return

        const beginning = add(date, { hours: 9 })
        const end = add(date, { hours: 16 })

        const times = []

        for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
            if(i === beginning){
                times.push({ selected: true, time: format(i, 'kk:mm a')})
                setDateTime(`${format(date, 'PPP')} ${format(i, 'kk:mm a')}`)
            }
            else times.push({ selected: false, time: format(i, 'kk:mm a')})
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
                <Flex paddingX={'20px'} fontSize={'15px'} fontWeight={'bold'}>Meeting Duration: {interval} Minutes</Flex>
                {dateTime && <Flex paddingX={'20px'} fontSize={'15px'} fontWeight={'bold'}>{dateTime}</Flex>}
                {date && <SimpleGrid minChildWidth='100px' spacing='20px' padding='20px'>
                    {timesArray && timesArray.length > 0 && timesArray.map((t, i) => {
                        return <Center key={`time-${i}`} bg={t.selected ? 'black' : 'darkgray'} color={t.selected && 'white'} cursor={'pointer'} rounded={'3px'} justifyContent={'center'} height='30px' width='80px' onClick={() => handleTimeSelection(t)}>{t.time}</Center>
                    })}
                </SimpleGrid>}

                {/* {date && <Center key={`time-${0}`} bg='gray' _hover={{bg: 'darkgray'}} cursor={'pointer'} rounded={'3px'} justifyContent={'center'} height='30px' width='80px' >'times'</Center>} */}

            </div>
            <div className="vasuki-next" onClick={() => setSelectedMenu(2)}>
                <button className="vasuki-next-button" disabled={!date && true}>
                    Continue
                </button>
            </div>
        </section>
    )
}

export default SlotBooking;