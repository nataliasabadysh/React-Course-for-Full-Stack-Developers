
// Core
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// Instruments 
const styles = { display: 'flex', justifyContent: 'space-around', width: 300}
const activeColorLink = { color: 'red', display: 'block'}
const colorLink = { color: 'black', display: 'block'}



const SubHomePage = (props) =><></>
// Components as a Page
const HomePage = (props) =>{ 

console.log('root home', props.history.location.search)
    return(
        <>
            <h1>HomePage</h1>
            <SubHomePage  />
        </>)

}

const AboutPage = (props) =>{
    console.log('props',  props)

    return(
        <h1>AboutPage</h1>

    )
}

const Navigation = () => (
    <nav style={styles}>
        <NavLink  to="/home" style={colorLink} activeStyle={activeColorLink}>Home</NavLink>
        <NavLink to="/about" style={colorLink}  activeStyle={activeColorLink}>About </NavLink>
        <NavLink to="/article/react/routing" style={colorLink}  activeStyle={activeColorLink}>Article </NavLink>
    </nav>
)

// Динамический параметр
// article/:id

// Необязательный параметр
// ?/subArticle?

{/* <Profile name=""/> */}

export const AppExample = () => {
    return(
        <BrowserRouter>
            <Navigation />

            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/article/:article?/:subArticle?" render={({ match, location, history })=> {
                return(
                    <>
                        <p>Root</p>
                        <span>{JSON.stringify(match)}</span>
                        <span>{JSON.stringify(location)}</span>
                        <span>{JSON.stringify(history)}</span>
                    </>
                )
            }} />
        </BrowserRouter>
    )
}



