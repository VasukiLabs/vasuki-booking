import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Select,
    FormControl,
    FormLabel,
    Code,
    Flex,
    Text,
    useToast,
    Button,
    useBreakpointValue
} from '@chakra-ui/react'
import { useState } from 'react';
import AppointmentData from './components/data';
import Toast from './components/Toast';

const Appointments = () => {
    const position = useBreakpointValue({ base: 'top-right', mlg: 'bottom-right' })
    const [showToast, setShowToast] = useState(false);
    const toast = Toast({
        title: "Hello!",
        description: "This is a custom toast message.",
        status: "success",
        duration: 3000,
        onClose: () => console.log("Toast closed")
    })

    const handleSelect = (event) => {
        console.log(event)
        setShowToast(event.target.value);
    }

    return (
        <TableContainer pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <Table colorScheme={"purple"} variant='simple'>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                    <Tr>
                        <Th>Date/Time</Th>
                        <Th>Customer</Th>
                        <Th>Service</Th>
                        <Th>Duration</Th>
                        <Th>Price</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {AppointmentData.map(appointment => {
                        return <Tr>
                            <Td>{appointment.date}</Td>
                            <Td>
                                <Flex flexDirection={"column"}>
                                    <Text fontSize="18px" fontWeight={"bold"}>{appointment.customer.name}</Text>
                                    <Text>{appointment.customer.email}</Text>
                                </Flex>
                            </Td>
                            <Td>{appointment.service}</Td>
                            <Td>{appointment.duration}</Td>
                            <Td>{appointment.price}</Td>
                            <Td>
                                <FormControl p={4}>

                                    <Select defaultValue={appointment.status} onChange={handleSelect}>
                                        <option value={"approved"}>Approved</option>
                                        <option value={"pending"}>Pending</option>
                                        <option value={"cancelled"}>Cancelled</option>
                                        <option value={"rejected"}>Rejected</option>
                                    </Select>
                                </FormControl>
                            </Td>
                        </Tr>
                    })}

                </Tbody>
                {/* <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot> */}
            </Table>
            {showToast && (
                <Toast
                    title="Success!"
                    description={`Appointment status has been changed to ${showToast}`}
                    status="success"
                    duration={3000}
                    onClose={() => setShowToast(false)}
                />
            )}
        </TableContainer>
    )
}

export default Appointments;