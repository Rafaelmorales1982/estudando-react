import Button from "../Button/Button";
import styles from './Card.module.css';

function Card({titulo, descricao}) {
//  console.log(props)
return(
  <div className={styles.card}>
    <h2 className={styles.title}>{titulo}</h2>
    <p>{descricao}</p>
    <Button/>
  </div>
)
}

export default Card;