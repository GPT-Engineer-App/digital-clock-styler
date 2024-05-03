import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg="gray.800">
      <Box p={8} borderRadius="lg" bg="gray.700" boxShadow="2xl">
        <Text fontSize="6xl" fontWeight="bold" fontFamily="monospace" letterSpacing="wider" color="white">
          {formatTime(time)}
        </Text>
      </Box>
    </Flex>
  );
};

export default Index;
