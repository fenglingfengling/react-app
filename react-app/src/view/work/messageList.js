import React from 'react';
import { connect } from 'react-redux';
// import ToDate from '../../common/component/ToDate.js';

function MessageListView(props) {
    let { MessageList, loadEnd, loading } = props;
    return (<div>
        <ul className="comment_list">
            <li>
                <div className="user_comment clearfix">
                    <span>xuezhige</span>
                </div>
                <div className="comment_txt">
                    作品很棒，希望自己也能做出这么好的作品
        </div>
                <div className="comment_footer">
                    <time>17分钟前</time>
                    <button>编辑</button>
                </div>
            </li>
            {/* {MessageList.map((item,index)=>{
                 <li key={index}>
                 <div className="user_comment clearfix">
                     <span>{item.username}</span>
                 </div>
                 <div className="comment_txt">
                     {item.content}
                </div>
                    <div className="comment_footer">
                        <time>
                            <ToDate 
                            time={item.create_time}
                            />
                        </time>
                    </div>
                </li>
            })} */}
        </ul>
        <a className="comment_list_more">{loadEnd?"没有新的数据了":(loading?"正在加载中":"上滑加载更多")}</a>
        )

    </div>)
}
function MessageList(props) {
    // console.log(props);
    return (
        <div className="comment_list_wrap">
            {/* {message.length<=0?<p className="comment_list_info">快来发布一条评论吧</p>:<MessageListView {...props}/>} */}
        </div>
    )
       
}
export default connect(state => state.MessageList)(MessageList);