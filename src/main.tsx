import { createRoot } from 'react-dom/client'
import './index.css'
import { App }from './App.tsx'
import { sum } from './01-hello-tests/01.ts';



const a = sum;
console.log(a)

createRoot(document.getElementById('root')!).render(<App />)
