import { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";

function Toast({ title, description, status, duration = 3000, onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose && onClose();
    };

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(false);
            onClose && onClose();
        }, 2000)
    }, [])

    return (
        isOpen && (
            <Box
                p={3}
                bg={status === "error" ? "red.500" : "green.500"}
                color="white"
                borderRadius="md"
                boxShadow="md"
                position="fixed"
                top="8"
                right="8"
                zIndex="9999"
                transition="transform 0.5s ease-in-out"
                transform={isOpen ? "translateX(0)" : "translateX(120%)"}
            >
                <strong>{title}</strong>
                <p>{description}</p>
                <Button onClick={handleClose} mt={"2"} color={"black"}>
                    Close
                </Button>
            </Box>
        )
    );
}

export default Toast;