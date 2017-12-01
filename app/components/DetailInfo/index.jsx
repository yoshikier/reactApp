import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        var info = this.props.info;
        return (
            <div className="detail-content">
                <div className="detail-info clearfix">
                    <div className="imgbox">
                        <img src={info.img}/>
                    </div>
                    <div className="des">
                        <h3>{info.title}</h3>
                        <p>￥{info.price}</p>
                        <p>{info.subTitle}</p>
                    </div>
                </div>
                <div className="time-cont">
                    {/* 设置 innnerHTML*/}
                    <p dangerouslySetInnerHTML={{__html: info.desc}}></p>
                </div>
            </div>
        )
    }

}

// 使用require.ensure 异步加载，还不支持ES6 的 export
//export default City
module.exports = DetailInfo
