import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import {CITYNAME} from '../../config/localStoreKey'
import localStore from '../../util/localStore'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

class City extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <Header headerTitle='选择城市'/>
        <CurrentCity cityName={this.props.userinfo.cityName}/>
        <CityList changeCity={this.changeCityHandle.bind(this)}/>
      </div>
    )
  }

  componentDidMount(){

    console.log(CITYNAME)
  }

  changeCityHandle(cityname){
    if(cityname == null){
      return
    }else{

      // 更换resux state状态
      const userinfo = this.props.userinfo;
      userinfo.cityName = cityname;
      this.props.userinfoAction.update(userinfo)

      // 修改localStorage
      localStore.setItem(CITYNAME, cityname);

      // 跳回首页
      hashHistory.push('/')
    }
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
function mapStateToProps(state){
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    userinfoAction: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)
