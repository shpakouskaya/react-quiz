import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Redirect, Route, Switch} from 'react-router-dom';
import Quiz from './containers/quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import QuizCreator from './containers/QuizCreator/QuizCreator'
import Auth from './containers/Auth/Auth'
import {connect} from 'react-redux'
import Logout from './components/Logout/Logout';


class App extends Component() {
  render(){
    let routes = (
      <Switch>
        <Route path={'/auth'} component={Auth}/>
        <Route path={'/quiz/:id'} component={Quiz}/>
        <Route path={'/'} component={QuizList}/>
        <Redirect to='/'/>
      </Switch>
    )
    if (this.props.isAutheticated){
      <Switch>
        <Route path={'/quiz-creator'} component={QuizCreator}/>
        <Route path={'/quiz/:id'} component={Quiz}/>
        <Route path={'/'} component={QuizList}/>
        <Route path={'/logout'} component={Logout}/>
        <Redirect to='/'/>
      </Switch>
    }
    return (
      <Layout>
        { routes }
      </Layout>
    )
  }
}
function mapStateToProps(state){
  return {
    isAutheticated: !!state.auth.token
  }
}
export default connect(mapStateToProps)(App);
