import dotenv from 'dotenv';

dotenv.config();

interface Config 
{
    GITHUB_TOKEN: string;
    LOG_LEVEL: number;
    LOG_FILE: string;
}

const config: Config = {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    LOG_LEVEL: Number(process.env.LOG_LEVEL),
    LOG_FILE: process.env.LOG_FILE
}

export default config;