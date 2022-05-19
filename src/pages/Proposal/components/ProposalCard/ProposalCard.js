import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import "./ProposalCard.scss";

export const ProposalCard = ({ proposal }) => {
  let navigate = useNavigate();

  return (
    <div
      className="proposal-card"
      onClick={() => navigate(`${ROUTES.PROPOSAL}/${proposal.id}`)}
    >
      <div className="full-name">{proposal.fullName.value}</div>
    </div>
  );
};
