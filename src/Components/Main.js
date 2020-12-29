import React,{Component} from 'react'
import Title from "./Title"
import Photospace from "./Photospace"
import AddPhoto from "./AddPhoto"
import {Route} from "react-router-dom"
class Main extends Component{

  constructor(){
    super()
    this.state = {
      posts : [{
        id: 0,
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
      }, {
        id: 1,
        description: "Pokemon",
        imageLink: "https://pokemongolive.com/img/posts/anniversaryposter2019.jpg"
      }, {
        id: 2,
        description: "Minions",
        imageLink: "https://cdn.hipwallpaper.com/i/91/90/cspkNE.jpg"
      }],
      screen: 'photos'
    }
    this.removePhoto = this.removePhoto.bind(this)
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description)
    this.setState((state) => ({posts: state.posts.filter(post => post !== postRemoved)}))
    }

  addPhoto(postSubmitted) {
      this.setState(state => ({
          posts: state.posts.concat([postSubmitted])
      }))
  }
  
  render(){
      return (
        <div>
        <Route exact path="/" render = {() => (
          <div>
          <Title title={"PhotoSpace"} />
          <Photospace
            posts={this.state.posts}
            onRemovePhoto={this.removePhoto}
            onNavigate={this.navigate}
          />
        </div>
        )}/>
          <Route path="/AddPhoto" render={({history}) => (
            <AddPhoto onAddPhoto ={(addedpost) => {
              this.addPhoto(addedpost)
              history.push('/')
            }} />
          )}/>

         </div>
        
      );
  }
}

export default Main
