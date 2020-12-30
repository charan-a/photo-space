import { connect } from 'react-redux';
import Main from './Main'
import {bindActionCreators} from 'redux'
import {removePicture} from "../redux/action"
import {withRouter} from 'react-router'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({removePicture}, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
export default App;
