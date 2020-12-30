import React,{Component} from 'react'
import Title from "./Title"
import Photospace from "./Photospace"
import AddPhoto from "./AddPhoto"
import {Route} from "react-router-dom"
import Single from "./Single"


class Main extends Component{

  render(){
      return (
        <div>
          <h1><Title title={"PhotoSpace"} /></h1>
          <Route exact path='/' render={() => (
              <div>
                <Photospace {...this.props} />
              </div>
            )}/>
          <Route exact path='/AddPhoto' render={(history) => (
              <AddPhoto {...this.props} onHistory={history} />
            )}/>
          <Route path="/single/:id" render = {(params) => (
                <Single  {...this.props} {...params}/> 
            )}/>
        </div>
      );
  }
}

export default Main
