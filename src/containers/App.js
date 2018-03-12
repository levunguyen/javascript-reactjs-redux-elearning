import React, { Component } from 'react';
import MenuVideo from '../components/Videos/MenuVideo/MenuVideo';
import Classes from './App.css';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Wrapper from '../Hoc/Hoc';
import Radium from 'radium';
import { connect } from 'react-redux';
import CourseDatail from '../containers/CourseDetail/CourseDetail';
import ListCourse from '../containers/ListCourse/ListCourse';
import { checkAuthAction } from '../actions/authAction/authAction';
const theme = createMuiTheme();
class App extends Component {

  constructor(props) {
    super(props);
    this.checkAuth = this.checkAuth.bind(this);
  }

  componentWillMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    this.props.checkAuth();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={Classes}>
            <Wrapper>
              <Route path="/" exact component={ListCourse} />
              <Route path="/courses/:id" exact component={CourseDatail} />
              <Route
                path="/courses/:id/:url/:name"
                exact
                component={MenuVideo}
              />
            </Wrapper>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    checkAuth: () => {
      dispatch(checkAuthAction());
    },
  };
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(Radium(App));
