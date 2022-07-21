import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment () {
    onDeleteComment(content)
  }

  function handleLikeCount(){
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/tilherme.png" alt="" srcset="" />
      <div className={styles.commentBox}>
        <div className={styles.commentInfo}>
          <header>
            <div className={styles.author}>
              <strong>Guilherme Mateus</strong>
              <time title="06 de Julho as 19:18" dateTime="2022-06-06 19:18:00">
                {" "}
                Cerca de 1h atras
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
                <Trash size={24}/>
            </button>
          </header>
          <p>{content} </p>
        </div>
        <footer>
        <button onClick={handleLikeCount}>
        <ThumbsUp />
        Aplaudir <span>{likeCount}</span>    
        </button>    
        </footer>
      </div>
    </div>
  );
}
