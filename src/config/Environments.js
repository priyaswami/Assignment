/**
 * Environment setup file for app
 */

const DEVELOPMENT = 'dev'
const PRODUCTION = 'prod'
const Environments = DEVELOPMENT

//Development Base API URL
const DEV = '';
//Production Base API URL
const PROD = '';

//Environments
export const ENV = Environments === DEVELOPMENT ? DEV : PROD;
