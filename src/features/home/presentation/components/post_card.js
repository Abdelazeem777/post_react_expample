export default function PostCard({ post }) { return (
<div className="post-card">
<br/>

    <div>postId: {post.id}</div>
<br/>
    <div className="post-card-title">{post.title}</div>
    <div className="post-card-body">{post.body}</div>
    <br/>
</div>
); }