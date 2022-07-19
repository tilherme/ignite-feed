import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, content, published }) {
  const [comments, setComments] = useState([
    'Ola mundo',
  ]);
  const [newComment, setNewComment] = useState('')

  const publishedDate = format(published, "d 'de' LLLL 'as' HH:mm'h'", {
    locale: ptBr,
  });

  const publishedDistance = formatDistanceToNow(published, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateComment() {
    event.preventDefault();

    // console.log(event.target.comments.value);
    setComments([...comments, newComment]);
    setNewComment('')
  }
  function handlenNewComment () {
    setNewComment(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDate} dateTime={published.toISOString()}>
          {publishedDistance}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p>{item.content}</p>
          }
          if (item.type === 'link') {
            return <a href={item.content}>{item.content}</a>
          }
        })}
      </div>
      <form onSubmit={handleCreateComment} className={styles.comentForm}>
        <strong>Deixe seu comentario</strong>
        <textarea
         placeholder="Deixe seu comentario"
        name="comments"
        value={newComment}
        onChange={handlenNewComment} />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(item => {
          return <Comment content={item} />
        })}
      </div>
    </article>
  );
}
