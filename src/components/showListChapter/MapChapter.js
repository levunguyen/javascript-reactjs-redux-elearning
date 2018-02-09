import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/ChapterAction/ChapterAction';
import Chapters from './Chapters';
//import MapVideo from './MapVideo';
class MapChapter extends Component {
  componentDidMount() {
  //  this.props.onFetchAllSession(this.props.SectionData.section.section_id);
  }
  render() {
    // let sectionName = null;
    // if (this.props.SectionData.section.length !== 0) {
    //   sectionName = this.props.SectionData.section.sectionList.map(section => {
    //     return <Chapters key={section.section_id} sectionName={section.section_name} />;
    //   });
    // }
    // return <div>{sectionName}</div>;
    let myData = this.props.SectionData.section.sectionList;
    let myMap = new Map();
    let mySections = [];
    let myVideos = [];
    if(myData !== undefined){
      myData.forEach((item, index) => {
        myMap.set(item.section_id, item.list_video);
        item.list_video.forEach((item, index) => {
          myVideos.push(item.video_name);
        });
        mySections.push({section_id: item.section_id, section_name: item.section_name, videos: myVideos});
        myVideos = [];
      });
    }
    return (
      <div>
        {mySections.map(element =>{
          return <Chapters 
                    key ={element.section_id} 
                    sectionId= {element.section_id} 
                    myVideos = {element} 
                    sectionName={element.section_name}
                  />
        })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    SectionData: state.section,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchAllSession: id => {
      dispatch(action.fetchDataSection(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapChapter);