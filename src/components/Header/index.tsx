import logo from "../../assets/logo.png"
import restart from "../../assets/restart.svg"

import styles from "./style.module.css"

type Props = {
  current: number // número de tentativas atuais
  max: number // número máximo de tentativas
  onRestart: () => void //definimos o botão de restar como método
}

export function Header ({current, max, onRestart}: Props) {
  return (
    <div className= {styles.container}>
      <img src={logo} alt="Logo" />

      <header>
        <span>
          <strong>{current}</strong> de {max} tentativas.
        </span>

        <button type="button" onClick={onRestart}> 
          <img src={restart} alt="Ícone de reiniciar" />
        </button>

      </header>

    </div>
  )
}