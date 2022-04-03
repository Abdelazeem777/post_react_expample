
export default function PostCard({ post }) {
    return (
        <div className="post-card">
            <div className="post-card__image">
                <img src={post.image} alt={post.title} />
            </div>
            <div className="post-card__content">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="post-card__description">{post.description}</p>
                <div className="post-card__footer">
                    <div className="post-card__author">
                        <img src={post.author.image} alt={post.author.name} />
                        <span>{post.author.name}</span>
                    </div>
                    <div className="post-card__date">
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}