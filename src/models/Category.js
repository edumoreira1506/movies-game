import * as CategoryService from '../services/CategoryService';

export const all = async () => await CategoryService.findAll();

export const getQuizzes = async category => await CategoryService.getQuizzes(category.id);
