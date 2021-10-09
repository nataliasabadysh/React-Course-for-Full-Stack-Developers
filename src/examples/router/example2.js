
import { BrowserRouter, Route } from 'react-router-dom';

const HomePage = () => <h1>Home Example :) </h1>
const RootPage = () => <h1>Root Example :) </h1>


export const AppExample = () => {
    return(
        <BrowserRouter>
            <Route path="/" component={RootPage} />
            <Route path="/home" component={HomePage} />
        </BrowserRouter>
    )
}



