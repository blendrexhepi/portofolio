import  InstagramIcon  from "@mui/icons-material/Instagram";
import   LinkedInIcon  from "@mui/icons-material/LinkedIn";
import  FacebookIcon  from "@mui/icons-material/Facebook";
import  TwitterIcon  from "@mui/icons-material/Twitter";
import "../styles/footer.css"


export const Footer = () => {
    return (
        <div className="footer">
             <div className="socialMedia">
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
             </div>
             <p>&copy; 2023 BlendRexhepi</p>
        </div>
    )
}