require('dotenv').config();

const config = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    JSONPLACEHOLDER_BASE_URL: process.env.REACT_APP_JSONPLACEHOLDER_BASE_URL
}

export default config;