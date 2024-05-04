import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import multer from 'multer'

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import artistsRoutes from './routes/artists.routes.js'
import releasesRoutes from './routes/releases.routes.js'
import adminRoutes from './routes/admin.routes.js'
import contactFormRoutes from './routes/contact-form.routes.js'
import fileUpload from 'express-fileupload'

const app = express()
const upload = multer({ dest: './uploads/' })

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
)
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads/'
  })
)

app.use(express.static('uploads'))

app.post('/api/releases', upload.array('file'), (req, res) => {
    const file = req
    if (!file) {
      res.status(500).json({ error: 'File is required' })
      return
    }
  res.status(200).json({data:[], message: 'File uploaded successfully'})
})

app.use('/api', authRoutes)
app.use('/api', taskRoutes)
app.use('/api', artistsRoutes)
app.use('/api', releasesRoutes)
app.use('/api', adminRoutes)
app.use('/api', contactFormRoutes)

app.use((err, req, res, next) => {
  console.log(err)
  const status = err.status || 500
  const message = err.message || 'Something went wrong'
  res.status(status).send(message)
  next()
})

app.use((req, res) => {
  res.status(404).json({ error: 'Page not found' })
})



export default app
