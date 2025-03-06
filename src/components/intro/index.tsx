import { Typography } from "@mui/material"
import { AboutSection,Introduction, PhotoSection, SocialMediaSection,ButtonsGroup,ExperienceSection, ExperienceItem } from "./styled"
import { FaInstagram,FaLinkedinIn,FaGithub } from "react-icons/fa"
import { Button } from "../../types"

const Intro = () => {
    return (
        <AboutSection>
           <Introduction>
            <Typography variant="h6" color="#858585">  
                Hello im
            </Typography>
            <Typography variant="h3" color="#959595" fontWeight="700">  
                Name
            </Typography>
            <Typography variant="h2" color="#ff6500">  
                Full Stack Developer
            </Typography>
            <SocialMediaSection>
                <FaInstagram size={30}/>
                <FaLinkedinIn size={30}/>
                <FaGithub size={30}/>
            </SocialMediaSection>
            <ButtonsGroup>
            <Button>
                <Typography>Hire Me</Typography>
            </Button>
            <Button style={{
                backgroundColor: "#1b1616",
                color: "white",
                border: "1px solid #959595"
            }}>
                <Typography>Download CV</Typography>
            </Button>
            </ButtonsGroup>
            <ExperienceSection>
                <ExperienceItem>
                    <Typography color="#ff6500">
                        3+
                    </Typography>
                    <Typography>
                        Years
                    </Typography>
                </ExperienceItem>
                <ExperienceItem>
                    <Typography color="#ff6500">
                        10+
                    </Typography>
                    <Typography>
                        Projects
                    </Typography>
                </ExperienceItem>
            </ExperienceSection>
            </Introduction>
            <PhotoSection>
                hi
            </PhotoSection>
        </AboutSection>
    )
}

export default Intro