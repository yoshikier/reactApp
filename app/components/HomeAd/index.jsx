import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className='home-ad-content'>
        <h3>超值特惠</h3>
        <ul className='clearfix'>
          {
            this.props.data.map((item, index) => {
              return <li key={index}>
                <a href={item.link} target='_blank'>
                  <img src={item.img} alt={item.title} />
                </a>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = HomeAd
