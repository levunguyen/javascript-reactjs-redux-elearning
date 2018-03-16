import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radium from 'radium';
// import Button from 'material-ui/Button';
// import Divider from 'material-ui/Divider/Divider';
import SignUp from '../../../containers/SignUp/SignUp';
const styles = theme => ({
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
  },
});

class Header extends Component{
  render(){
    return (
      <header id="header">
        <div className="Logo">
          <ul>
            <a href="/">E-LEARNING</a>
          </ul>
        </div>
        <div className="Nav" dir="ltr">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About Us">About Us</a>
              </li>
              <li>
                <a>|</a>
              </li>
              <li>
                <a href="/Login">Login</a>
              </li>
              <li>
                <a  data-toggle="modal" data-target=".bd-example-modal-lg">Sign Up</a> 
              </li>
            </ul>
          </nav>
        </div>
        <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <SignUp/>
            </div>
          </div>
        </div>


      </header>
    );
  }
}
// const header = props => {
//   return (
//     <header id="header">
//       <div className="Logo">
//         <ul>
//           <a href="/">E-LEARNING</a>
//         </ul>
//       </div>
//       <div className="Nav" dir="ltr">
//         <nav>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/About Us">About Us</a>
//             </li>
//             <li>
//               <a>|</a>
//             </li>
//             <li>
//               <a href="/Login">Login</a>
//             </li>
//             <li>
//               <a  data-toggle="modal" data-target="#exampleModal">Sign Up</a> 
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Radium(withStyles(styles)(Header));
