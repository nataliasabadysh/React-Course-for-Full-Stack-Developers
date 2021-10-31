
import { useHistory, useLocation, Link, Route, Switch, Redirect } from 'react-router-dom';
import {useEffect} from 'react';


const NotFoundPage = () => <h1>Not Found Page</h1>
// Route
const UserInfo = ()=> {
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        console.log('location UserInfo', location)
    }, [location])

    return(
        <>
            {/* <button onClick={()=> history.push({
                pathname: '/',
                state: { from: location }
            })}> go back to Home page </button> */}

            {/* <button onClick={()=> history.push('/')}> go back to Home page</button> */}

            <Link to={{
                pathname: '/',
                state: { from: location }
            }}> Go back to Home page </Link>

            <h1>User Info Page</h1>
        </>
    )
}

// Route
const UserView = ()=> {
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        console.log('location UserView', location)
    }, [location])


    return(
    <>
        <Link to={{
            pathname: '/',
            state: { from: location }
        }} >go back to Home page </Link>


        {/* // <h1 onClick={()=> history.push('/dashboard/1/info')}>User Info </h1> */}
        <h1>User View Page</h1>

        <Link to={{
                pathname: '/dashboard/1/info',
                state: { from: location },
                hash: '#page=3'
            }} > View User Info </Link>
    </>
    )
}

// Route
const DashboardPage = () => {
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        console.log('location DashboardPage', location)
    }, [location])

    return (
        <>
            <Link to={{
                     pathname: '/',
                    state: { from: location },
                }} >go back to Home page 
            </Link>

            <h1>Dashboard Page</h1>

            <button onClick={()=> history.push({
                pathname: location.state.from,
                state: {from: location }
            })}> go back to home page </button>
            {/* <h4 onClick={()=> history.push('dashboard/1')}> View User </h4> */}


            <Link to={{
                    pathname: '/dashboard/1',
                    state: { from: location },
                    hash: '#page=2'
                }} >View User </Link>
        </>
    )
}

const HomePage = () => {
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        console.log('location HomePage', location)
    }, [location])

    return(
        <>
            <Link to={{
                pathname: '/dashboard', 
                state: { from: location }, 
                hash: '#page=1'
            }}> Go to Dashboard Page</Link>

            <h1>Home Page</h1>
            <button onClick={()=> history.push(location && location.state && location.state.from || '/404')}> Go Back To Prev Page </button>
        </>
    )
}

// Components
const Menu = () => {
    return (
        <>
        <Switch>
            <Route exact path="/" component={HomePage} /> 
            <Route exact path="/dashboard" component={DashboardPage} /> 
            <Route exact path="/dashboard/:id" component={UserView} /> 
            <Route exact path="/dashboard/:id/info" component={UserInfo} /> 
            <Route exact path="/404" component={NotFoundPage} /> 
            <Redirect to="/" />
        </Switch>
        </>
    )
}

// Page
export const Dashboard =()=> {
    return (
        <Menu />
    )
}