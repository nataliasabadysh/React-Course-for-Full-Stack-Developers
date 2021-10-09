
// Core
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Instruments 
const styles = { display: 'flex', justifyContent: 'space-around', width: 500}

// Components as a Page
const Profile = () => <h1>Profile</h1>
const AboutPage = () => <h1>AboutPage</h1>
const ContactPage = ({ name }) => <h1>Contact Page, and extra props {name}</h1>

const Navigation = () => (
    <nav style={styles}>
        <Link to="/account-settings">Account Menu </Link>
        <Link to="/about">About Menu</Link>
        <Link to="/contact">Contact Menu </Link>
    </nav>
)

export const AppExample = () => {
    return(
        <Router>
            <Navigation />
            
            <Route exact path="/account-settings" component={Profile} />
            <Route exact path="/about" component={AboutPage} />
            <Route path="/contact" render={(props)=> <ContactPage  {...props}  name="Natasha"/>} />

        </Router>
    )
}



