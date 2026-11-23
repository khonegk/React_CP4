import express from 'express'
import cors from 'cors'

interface User {
    id: number,
    name: string,
    age: number,
    city: string
}
const users: User[] = [
    { id: 1, name: 'Magomed', age: 18, city: 'Makhachkala' },
    { id: 2, name: 'Ali', age: 18, city: 'Sergokala' },
    { id: 3, name: 'Vagid', age: 20, city: 'Makhachkala' },
    { id: 4, name: 'Said', age: 18, city: 'Semender' },
    { id: 5, name: 'Abakar', age: 17, city: 'Khunzakh' },
]
const app = express()
const PORT = process.env.PORT || 8000

app.use(cors({ origin: 'http://localhost:5173' }));
app.get('/users', (req, res) => {
    // искусственная задержка 2 секунды, чтобы успеть увидеть состояние loading
    setTimeout(() => {
        res.json(users);
    }, 2000);
});
app.listen (PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})