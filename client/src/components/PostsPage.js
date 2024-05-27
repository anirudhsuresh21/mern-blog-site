import Header from "./Header";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../UserContext";
import {Link} from 'react-router-dom';

export default function PostsPage(){
    const [postInfo,setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
      fetch(`http://localhost:4000/post/${id}`)
        .then(response => {
          response.json().then(postInfo => {
            setPostInfo(postInfo);
          });
        });
    }, []);
  
    if (!postInfo) return '';
    return(
        <>
        <div className='post'>
      <h1>{postInfo.title}</h1>
      <div className='author'>
      <p><b>by @{postInfo.author.username}</b> / <time>{formatISO9075(new Date(postInfo.createdAt))}</time></p>
      {userInfo.id === postInfo.author._id && (
      <div className="edit-row"><Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            Edit
          </Link>
          
        </div>
         )}
      </div>
      <div className="postImage"><img src={`http://localhost:4000/${postInfo.cover}`} ></img></div>
      <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
        </>
        
    )
}