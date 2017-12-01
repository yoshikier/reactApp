import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import localStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div id='content'>
                {
                  this.state.initDone
                  ? this.props.children
                  : <div>加载中...</div>
                }
            </div>
        )
    }

    componentDidMount(){

      // 从localStorage里面获取城市
      let cityName = localStore.getItem(CITYNAME)
      if (cityName == null) {
        cityName = '北京'
      }

      this.props.userInfoAction.update({
        cityName: cityName
      })

      this.setState({
        'initDone': true
      })
    }

}

function mapStateToProps(state){
  return {

  }
}

function mapDispatchToProps(dispatch){
  return {
    userInfoAction: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
