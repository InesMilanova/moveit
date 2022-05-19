import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { getProposal, setValue } from "../../utils/utils";
import { PriceService } from "./../../services/price.service";
import "./Proposal.scss";

export function Proposal() {
  const [proposal, setProposal] = useState();
  const [proposedPrice, setProposedPrice] = useState(0);
  let params = useParams();

  useEffect(() => {
    let foundProposal = getProposal(params);

    const { distance, livingSpace, basementAttic, piano } = foundProposal;
    let priceService = new PriceService(
      distance.value,
      livingSpace.value,
      basementAttic.value,
      piano.value
    );

    setProposedPrice(
      priceService.getDistancePrice() * priceService.getNumberOfCars() +
        priceService.checkIfMovingPiano()
    );

    if (foundProposal) {
      setProposal(foundProposal);
    }
  }, [params, params.id]);

  return (
    <>
      <Header />
      <div className="proposal-container">
        <h2>Price proposal for household moving</h2>
        <div className="proposal">
          <div className="proposal-info">
            {proposal &&
              Object.values(proposal).map((prop) => (
                <div>
                  {console.log("label", prop.label)}
                  <b>{prop.label}</b> {setValue(prop.value)}
                </div>
              ))}
          </div>
          <div className="proposal-price">
            <div>
              <b>Proposed price</b> {proposedPrice} SEK.
            </div>
            <div>
              We save your price proposal 90 days to view the price proposal
              again, visit{" "}
              <a href="http://google.com">http://moveit.com/offer</a>
            </div>
            <div>If you have questions, contact us moveit@moveit.se.</div>
          </div>
        </div>
      </div>
    </>
  );
}
