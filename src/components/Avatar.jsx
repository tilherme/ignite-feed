import styles from './Avatar.module.css'
 
export function Avatar({ hasBorder = true ,src}) {
    return (
        <img className={hasBorder ? styles.avatarBorder : styles.avatar} src={src} />
        
      )
    }