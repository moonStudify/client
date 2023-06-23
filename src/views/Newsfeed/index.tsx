import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import CoverImage from "./CoverImage";
import CodeOfFeed from "./CodeOfFeed";
import NotiTest from "./NotiTest";
import Feed from "./Feed";

function Newsfeed() {
    return (
        <Container maxW={"5xl"}>
            <CoverImage />
            <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(6, 1fr)">
                <GridItem colSpan={1}>
                    <CodeOfFeed />
                    <NotiTest />
                </GridItem>
                <GridItem colSpan={5}>
                    <Feed />
                </GridItem>
            </Grid>
        </Container>
    );
}

export default Newsfeed;