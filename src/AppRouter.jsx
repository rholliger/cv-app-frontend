import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CVView from './CVView';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={CVView} />
                    <Route path="/workexperience" component={() => <div>Hallo workexperience</div>} />
                    <Route path="/education" component={() => <div>Hallo Education</div>} />
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;