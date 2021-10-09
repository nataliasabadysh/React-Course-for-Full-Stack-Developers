
// Core
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// Instruments 
const styles = { display: 'flex', justifyContent: 'space-around', width: 300}
const activeColorLink = { color: 'red', display: 'block'}
const colorLink = { color: 'black', display: 'block'}

// Components as a Page
const HomePage = () => <h1>HomePage</h1>
const AboutPage = () => <h1>AboutPage</h1>

const Navigation = () => (
    <nav style={styles}>
        <NavLink exact to="/home" style={colorLink} activeStyle={activeColorLink}>Home</NavLink>
        <NavLink to="/about" style={colorLink}  activeStyle={activeColorLink}>About </NavLink>
        <NavLink to="/contact" style={colorLink}  activeStyle={activeColorLink}>Contact</NavLink>
    </nav>
)

export const AppExample = () => {
    return(
        <Router>
            <Navigation />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route path="/contact" render={()=> <h1>Contact</h1>} />
        </Router>
    )
}



