import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization:
      'Bearer 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',
  },
});
