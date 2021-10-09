
import { BrowserRouter as Router, Route } from 'react-router-dom';

const HomePage = () => <h1>1) HomePage</h1>
const AboutPage = () => <h1> 2) AboutPage</h1>


export const AppExample = () => {
    return(
        <Router>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" render={()=> <h1>Contact</h1>} />
        </Router>
    )
}



