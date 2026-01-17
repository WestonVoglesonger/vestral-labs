import { useParams, Link } from 'react-router-dom'
import { getPost } from '../data/posts'

function LabNotePost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <section className="page">
        <div className="container container--narrow">
          <h1>Post not found</h1>
          <Link to="/lab-notes">← Back to Lab Notes</Link>
        </div>
      </section>
    )
  }

  return (
    <article className="article">
      <div className="container container--narrow">
        <header className="article__header">
          <p className="article__date">{post.date}</p>
          <h1 className="article__title">{post.title}</h1>
          <div className="post-item__tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>

        <div 
          className="article__content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div style={{marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--color-border)'}}>
          <Link to="/lab-notes" style={{color: 'var(--color-text-secondary)'}}>← Back to Lab Notes</Link>
        </div>
      </div>
    </article>
  )
}

export default LabNotePost
