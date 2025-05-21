import { createRoot } from 'react-dom/client'
import './index.css'
import { App }from './App.tsx'
import { sum } from './01-hello-tests/01.ts';
import { messages } from './05/05_01.ts';



const a = sum;
console.log(messages)


createRoot(document.getElementById('root')!).render(<App />)
