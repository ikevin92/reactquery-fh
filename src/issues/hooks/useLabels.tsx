import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../interfaces';
import { sleep } from '../../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100');
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(['labels'], getLabels, {
    staleTime: 1000 * 60 * 60,
    // no se dispara sino hasta dentro de 1 hora
    // initialData: [],
    // placeholderData: [],
    placeholderData: [
      {
        id: 791921801,
        node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
        url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
        name: '❤️',
        color: 'ffffff',
        default: false,
      },
      {
        id: 710400704,
        node_id: 'MDU6TGFiZWw3MTA0MDA3MDQ=',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Renderer',
        name: 'Component: Test Renderer',
        color: '006b75',
        default: false,
      },
    ],
  });

  return labelsQuery;
};
