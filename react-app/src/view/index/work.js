import React from 'react';
import {Link} from 'react-router-dom';
export default function Works(props){
    let {data,loadEnd,loading} = props;
    return(
        <div className="works">
        <h3>学员作品</h3>
        <ul className="works_list clearfix">
            <li>
                <a href="#">
                    <img src="images/work6.jpg" />
                    <span className="wrork_txt clearfix">
                        <strong>时空唱片机</strong>
                        <span>
                            <em>25</em>
                            <em>986</em>
                        </span>
                    </span>
                </a>
            </li>
            {/* {
            data.map(item=>(
                <li key={item.id}>
                    <Link to={"/work"+item.id }>
                        <img src={item.icon} className="work_a" />
                        <span className="wrork_txt clearfix work_a">
                            <strong className="work_a">{item.title}</strong>
                            <span className="work_a">
                                <em className="work_a">{item.message}</em>
                                <em className="work_a">{item.good}</em>
                            </span>
                        </span>
                    </Link>
                </li>
            ))
        } */}
        </ul>
        <a className="more" href="#">{loadEnd?"没有新的数据":(loading?"正在加载中":"上滑加载更多")}</a>
        {/* 正在加载中
        没有新的数据 */}
    </div>
    )
}