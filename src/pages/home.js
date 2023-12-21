import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/home.css"

export const Home = () => {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, My Name is Blend</h2>
                <div className="prompt"><p>A front end developer with a passion for learning and creating.</p>
                    <a href="mailto:blendrexhepi8@gmail.com"><EmailIcon /></a> 
                    <a href="https://www.linkedin.com/in/blend-rexhepi-730140216/"><LinkedInIcon /></a>
                    <a href="https://github.com/blendrexhepi"><GitHubIcon /></a> 
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                   <ol className="list">
                        <li className="item">
                            <h2>Front-End</h2>
                            <span>ReactJS, HTML, CSS, BootStrap, MaterialUI </span>
                        </li>
                        <li className="item">
                            <h2>Languages</h2>
                            <span>Javascript, Java, Python, TypeScript</span>
                        </li>
                   </ol>
            </div>
        </div>
    )
}