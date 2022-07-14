import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src="https://github.com/diego3g.png"
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme Mateus</strong>
            <span>Front-end</span>
          </div>
        </div>

        <time title="06 de Julho as 19:18" dateTime="2022-06-06 19:18:00">
          {" "}
          Publicado ha 1h
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          {" "}
          <a href=""> jane.design/doctorcare</a>{" "}
        </p>
        <p>
         <a href=""> #novoprojeto</a>{''}
         <a href="">  #nlw </a>{' '}
         <a href=""> #rocketseat </a>   
        </p>
      </div>
      <form className={styles.comentForm}>
        <strong>Deixe seu comentario</strong>
        <textarea 
        placeholder="Deixe seu comentario"
        />
     <footer>
     <button type="submit">Publicar</button>
     </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
