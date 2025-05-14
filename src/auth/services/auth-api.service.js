import { BaseService } from '../../public/services/base.service';

export class AuthApiService extends BaseService {
  constructor() {
    super('/auth');
  }

  async login(email, password) {
    try {
      const response = await this.post('/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  async register(userData) {
    try {
      const response = await this.post('/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }

  async getUsers() {
    try {
      const response = await this.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async logout() {
    try {
      const response = await this.post('/logout');
      return response.data;
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }
}