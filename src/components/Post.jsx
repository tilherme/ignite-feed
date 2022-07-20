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
    event.target.setCustomValidity('')
    setNewComment(event.target.value);
  }

  function handlenNewCommentInvalid () {
    event.target.setCustomValidity('Campo obrigatorio')

  }

  function deleteComment (commentToDelete) {
    const newCommentWithoutDelete = comments.filter(comment =>{
        return comment != commentToDelete
    })
    setComments(newCommentWithoutDelete);
  }

const isNewCommentInput = newComment.length === 0

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
            return <p key={item.content}>{item.content}</p>
          }
          if (item.type === 'link') {
            return <a key={item.content} href={item.content}>{item.content}</a>
          }
        })}
      </div>
      <form onSubmit={handleCreateComment} className={styles.comentForm}>
        <strong>Deixe seu comentario</strong>
        <textarea
         placeholder="Deixe seu comentario"
        name="comments"
        value={newComment}
        onChange={handlenNewComment}
        required 
        onInvalid={handlenNewCommentInvalid}/>
        <footer>
          <button type="submit" disabled={isNewCommentInput}>Publicar</button>
        </footer>

      </form>
      <div className={styles.commentList}>
        {comments.map(item => {
          return <Comment key={item} content={item} onDeleteComment={deleteComment}/>
        })}
      </div>
    </article>
  );
}
