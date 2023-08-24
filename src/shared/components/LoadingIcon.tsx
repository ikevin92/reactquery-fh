import { FC } from 'react';
import { FaSpinner } from 'react-icons/fa';

export const LoadingIcon: FC = (): JSX.Element => {
  return <FaSpinner className="loader" />;
};
