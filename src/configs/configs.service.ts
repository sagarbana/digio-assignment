import * as dotenv from 'dotenv';

dotenv.config();
export class ConfigsService {
    static getValue(key: string) {
      return process.env[key];
    }
}