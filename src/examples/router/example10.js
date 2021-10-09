
// Core
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

// Instruments 
const styles = { display: 'flex', justifyContent: 'space-around', width: 300}
const activeColorLink = { color: 'red', display: 'block'}
const colorLink = { color: 'black', display: 'block'}

// Components as a Page
const HomePage = () => <h1>HomePage</h1>
const AboutPage = () => <h1>AboutPage</h1>
const NotFound = () => <h1>Page Not Found</h1>

const Navigation = () => (
    <nav style={styles}>
        <NavLink exact to="/home" style={colorLink} activeStyle={activeColorLink}>Home</NavLink>
        <NavLink to="/about" style={colorLink}  activeStyle={activeColorLink}>About </NavLink>
        {/* <NavLink to="/article/react/routing" style={colorLink}  activeStyle={activeColorLink}>Article </NavLink> */}
    </nav>
)

export const AppExample = () => {
    return(
        <Router>
            <Navigation />
            {/* <Switch> */} 
            {/* Для исключительного рендеринга */}
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route component={NotFound} />
                {/* <Redirect to="/home" /> */}
            {/* </Switch> */}
        </Router>
    )
}