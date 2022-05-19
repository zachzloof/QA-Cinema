import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() { 


    return(
        <footer style={{backgroundColor: "#002730", height: "180px", textAlign: "center", marginLeft: "6%", marginRight: "auto", marginTop:'20px'}}>
            
        <h2>QA LTD Headquarters</h2>
        <h5>International House
        </h5>
        <h5>1 St Katherines Way
        </h5>
        <h5>E1W 1UN</h5>
        <a href="https://www.facebook.com/QALtd/"><FontAwesomeIcon icon={brands('facebook')}/></a> &nbsp;<a href="https://www.instagram.com/qalimited/"><FontAwesomeIcon icon={brands('instagram')}/></a> &nbsp;<a href="https://www.linkedin.com/company/qa-ltd"><FontAwesomeIcon icon={brands('linkedin')}/></a>
        </footer>
    )
}


export default Footer;