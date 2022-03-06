import "../../../main-page/main-page.css"
import './about.scss'
import darkLogo from '/Users/artemijkolotov/Documents/VSCode/MiddleTrainCoffee/my-app/src/img/Dark Beans logo.svg'
const About = () => {
    return (
        <div className="info-block">
            <div className="container">
                <h2>About Us</h2>
                <img src={darkLogo} alt='coffee beans' />
                <p>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br />
Afraid at highly months do things on at. Situation recommend objection do intention<br />
so questions. As greatly removed calling pleased improve an. Last ask him cold feel<br />
met spot shy want. Children me laughing we prospect answered followed. At it went<br />
is song that held help face.<br /><br />
Now residence dashwoods she excellent you. Shade being under his bed her, Much<br />
read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant<br />
horrible but confined day end marriage. Eagerness furniture set preserved far<br />
recommend. Did even but nor are most gave hope. Secure active living depend son<br />
repair day ladies now.
          </p>      
            </div>
        </div>
    )
}
export default About