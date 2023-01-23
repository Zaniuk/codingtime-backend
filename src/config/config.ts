import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  path: path.join(__dirname + `./../.env.${process.env.NODE_ENV}`),
}); // change according to your need

const config = {
  port: process.env.APPLICATION_PORT,
  dbUrl: process.env.DB_URL,
  dbPassword: process.env.DB_PASSWORD,
};

export default config;
