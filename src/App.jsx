import {Post} from "./components/Post";
import { Header } from './components/Header'

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
export function App() {
  return (
      <div>
        <Header />
        <div className={styles.wrapper}>
        <Sidebar/>
          <main> 
          <Post
         author="Guilherme Mateus"
         content="Entre as medidas estão projetos já aprovados pelos 3 poderes e que afetam tanto pela perda na arrecadação como pelo aumento de gastos. "
        />
        <Post author="Gustavo" content="Outro Post" />

          </main>
        </div>
      </div>

    )
}

