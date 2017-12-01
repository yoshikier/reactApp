import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const data = this.props.data
    return (
      <li>
        <Link to={'/detail/' + data.id}>
            <div className='imgbox'>
              <img src={data.img} />
            </div>
            <div className='exp-cont'>
              <h4>{data.title}</h4>
              <p className='sub'>{data.subTitle}</p>
              <p className='price'>￥{data.price}</p>
              <span className='distance'>{data.distance}</span>
              <span className='cell'>已售{data.mumber}</span>
            </div>
        </Link>
      </li>
    )
  }
}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = Item
