import { Server } from 'http';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

async function bootstrap() {
  const server: Server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

bootstrap();
