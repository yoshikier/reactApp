import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/Info'

class Detail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const params = this.props.params
    return (
      <div>
        <Header headerTitle='商品详情'/>
        <Info id = {params.id}/>
      </div>
    )
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = Detail
