import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { useIssue } from '../hooks';
import { LoadingIcon } from '../../shared/components/LoadingIcon';

export const IssueView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id = '0' } = params;

  const { issueQuery, commentsQuery } = useIssue(Number(id));

  if (issueQuery.isLoading) <LoadingIcon />;

  if (!issueQuery.data) return <Navigate to="./issues/list" />;

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>

      {/* Primer comentario */}
      <IssueComment issue={issueQuery.data} />

      {/* Comentario de otros */}
      {commentsQuery.isLoading && <LoadingIcon />}
      {commentsQuery.data?.map((issue) => (
        <IssueComment
          key={issue.id}
          issue={issue}
        />
      ))}
    </div>
  );
};
