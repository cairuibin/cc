import React, { Component } from 'react'
import { Switch, Route, Redirect ,withRouter} from 'react-router-dom'

class RouterView extends Component {
    render() {
        let { routers } = this.props;

        let redirect = routers.filter(v => v.redirect);
        let newroutes = routers.filter(v => !v.redirect);
        return (
            <Switch>
                {newroutes.map((v, i) => {
                    return <Route key={i} path={v.path} exact={v.exact} render={(props) => {
                        if (v.children) {
                            return <v.component routers={v.children}  {...props} />
                        } else {
                            return <v.component {...props} />
                        }
                    }} />
                })}
                {redirect.map((v, i) => {
                    return <Redirect exact={v.exact} key={i} from={v.path} to={v.redirect} />
                })}
            </Switch>
        )
    }
}
export default withRouter(RouterView)