import { createRoot } from 'react-dom/client'
import './index.css'
import { App }from './App.tsx'
import { splitIntoWords } from './01-hello-tests/01.ts'


const sentense = "Hello my friends"
const result = splitIntoWords(sentense)
console.log(result);


createRoot(document.getElementById('root')!).render(<App />)
