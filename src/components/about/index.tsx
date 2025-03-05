import { Typography } from "@mui/material"
import { AboutSection,Introduction, PhotoSection } from "./styled"

const About = () => {
    return (
        <AboutSection>
           <Introduction>
            <Typography variant="h4">  
                Hello im
            </Typography>
            </Introduction>
            <PhotoSection>
                hi
            </PhotoSection>
        </AboutSection>
    )
}

export default About