import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Posts({ _id, title, summary, cover, content, createdAt, author }) {
  return (
    <Link style={{textDecoration:'none'}} to={`/post/${_id}`}>
    <div className="posts">
      <div className="head">
        <h2>{title}</h2>
        <h6>{author.username}</h6>
        <time>{formatISO9075(new Date(createdAt))}</time>
      </div>
      <div className="desc">
        <p>{summary}</p>
      </div>
      <img src={'http://localhost:4000/' + cover}></img>
    </div>
    </Link>
  )

}