import { useNavigate } from "react-router-dom";
import { Button } from "./components/Button/Button";
import { ProposalCard } from "./pages/Proposal/components/ProposalCard/ProposalCard";
import "./App.scss";
import { ROUTES } from "./constants/routes";

function App() {
  let navigate = useNavigate();
  const proposals = JSON.parse(localStorage.getItem("proposals"));

  return (
    <div className="home-container">
      <Button text="Create proposal" onClick={() => navigate(ROUTES.ENTRY)} />
      <div>
        {proposals && Object.keys(proposals).length > 0 ? (
          Object.values(proposals).map((proposal) => (
            <ProposalCard key={proposal?.id} proposal={proposal} />
          ))
        ) : (
          <h2>No saved proposals</h2>
        )}
      </div>
    </div>
  );
}

export default App;
