
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/tilherme.png" alt="" srcset="" />
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
            <button title="Deletar comentario">
                <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
        <button>
        <ThumbsUp />
        Aplaudir <span>20</span>    
        </button>    
        </footer>
      </div>
    </div>
  );
}
