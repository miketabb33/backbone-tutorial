import express, { Express, Request, Response } from 'express'
import path from 'path'

const app: Express = express()

app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
