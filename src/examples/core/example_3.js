
import T from 'prop-types'; 

// Components + Props  

function AppBar({ title }){
    return <header> { title }</header>
}

AppBar.defaultProps = {
    title:  "Placeholder, page title"
}

AppBar.propTypes = {
    title: T.string
}

export default AppBar;
