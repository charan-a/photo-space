import { connect } from 'react-redux';
import Main from './Main'
import {bindActionCreators} from 'redux'
import {removePicture} from "../redux/action"

function mapStateToProps(state) {
  return {
    posts: state
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({removePicture}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)
export default App;
