import React,{Component} from 'react'
import Title from "./Title"
import Photospace from "./Photospace"
import AddPhoto from "./AddPhoto"
import {Route} from "react-router-dom"
class Main extends Component{

  render(){
      return (
        <div>
          <Route exact path='/' render={() => (
              <div>
                <Title title={"PhotoSpace"} />
                <Photospace {...this.props} />
              </div>
            )}/>
          
        </div>
      );
  }
}

export default Main
