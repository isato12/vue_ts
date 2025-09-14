import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

//import './bases/1-const'
//import './bases/3-object'
//import './bases/2-arrays'
//import './bases/4-functions'
//import './bases/5-dese'
//import './bases/6-deses-arr'
//import './bases/7-imp_exp'
import './bases/8-promesas'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    
  </div>
`
