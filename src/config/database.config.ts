import { registerAs } from '@nestjs/config'

export default registerAs('database', () => ({
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DBNAME,
  synchronize: true,
}))
