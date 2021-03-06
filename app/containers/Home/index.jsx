import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className='m-container'>
        <HomeHeader userinfo={this.props.userinfo}/>
        <div className='content-wrap'>
            <Category/>
            <Ad/>
            <List cityName={this.props.userinfo.cityName}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
