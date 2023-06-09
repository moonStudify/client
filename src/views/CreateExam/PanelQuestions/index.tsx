import { Box } from "@chakra-ui/react";
import PanelReview from "./PanelReview";

function PanelQuestions() {
    return (
        <Box position={"fixed"}
            left="0"
            zIndex={"101"}
            overflow="hidden"
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            w="12rem"
            h={"100%"}
            bg="rgb(255, 255, 255)"
            boxShadow={"rgba(0, 0, 0, 0.15) 0px 2px 4px 0px"}
        >
            <PanelReview />
            <Box p={"0 1.5rem"} mt="1rem">
                <Box as={"button"} w="100%" boxShadow={"rgba(0, 0, 0, 0.25) 0px -4px inset"}
                    bg="rgb(19, 104, 206)"
                    color={"rgb(255, 255, 255)"}
                    borderRadius="4px"
                    fontSize={"0.875rem"}
                    fontWeight="bold"
                    minW={"42px"} minHeight="42px"
                    p={"0 16px 4px"}
                    _hover={{ minH: "40px", marginTop: "2px", paddingBottom: "2px", bg: "rgb(18, 96, 190)", boxShadow: "rgba(0, 0, 0, 0.25) 0px -2px inset" }}
                >
                    Thêm câu hỏi
                </Box>
            </Box>
        </Box>
    );
}

export default PanelQuestions;