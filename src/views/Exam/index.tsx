import { ExamIcon } from "@/components/Icon";
import { Box, Button, Container, Img, Text } from "@chakra-ui/react";
import OneTest from "./OneTest";
import { useRouter } from "next/router";

function Exam() {
    const router = useRouter();
    const goToCreateExam = () => {
        router.push("/createexam")
    }

    return (
        <Container maxW={"5xl"}>
            <Box
                onClick={goToCreateExam}
                as={"button"}
                mt={"1rem"}
                display={"flex"}
                bg={"rgb(19, 104, 206)"}
                p={"0.5rem"}
                borderRadius={"4px"}
                boxShadow={"rgba(0, 0, 0, 0.25) 0px -2px inset"}
                minH={"30px"}
                _hover={{ minH: "29px", bg: "rgb(18, 96, 190)", boxShadow: "rgba(0, 0, 0, 0.25) 0px -1px inset" }}
            >
                <Img w={"50px"} h={"30px"} src="https://assets-cdn.kahoot.it/builder/v2/assets/quiz-illustration-e68cb765.svg" />
                <Text color={"#fff"}>Tạo bài kiểm tra</Text>
            </Box>
            <OneTest />
            <Box w={"205px"} h={"115px"} mx="auto">
                <ExamIcon />
                <Text mx={"auto"} fontSize={"14px"} color={"#3c4043"} fontWeight={500}>Đây là nơi giao bài kiểm tra</Text>
            </Box>
        </Container>
    );
}

export default Exam;