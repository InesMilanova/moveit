import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { allInputFields } from "./inputFields";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import "./Entry.scss";
import { clearEntry, createProposal, setProposals, updateFields } from "../../utils/utils";
import { TRAVEL_MODE } from "../../constants/constants";
import { ROUTES } from "../../constants/routes";

export function Entry() {
  let navigate = useNavigate();
  const [inputFields, setInputFields] = useState(allInputFields);

  const showProposal = () => {
    const result = createProposal(inputFields);
    handleCheckDistance(result);
  };

  const setDistanceAndNavigate = (res, result) => {
    result.distance = {
      value: res.rows[0].elements[0].distance.value / 1000,
      label: "Distance",
    };
    setProposals(result);
    navigate(`${ROUTES.PROPOSAL}/${result.id}`);
  }
  
  useEffect(() => {
    setInputFields(clearEntry(inputFields));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCheckDistance = (result) => {
    const origin = result.fromAddress.value;
    const destination = result.toAddress.value;

    const distanceMatrix = new window.google.maps.DistanceMatrixService();
    distanceMatrix.getDistanceMatrix(
      { origins: [origin], destinations: [destination], travelMode: TRAVEL_MODE.DRIVING },
      (res) => setDistanceAndNavigate(res, result)
    );
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Create a price proposal for household moving</h1>
        <form>
          {inputFields.map((field, index) =>
            field.type === "autocomplete" ? (
              <label htmlFor={field.id} key={field.id}>
                <span>{field.label}</span>
                <field.component
                  apiKey={field.apiKey}
                  selectProps={{
                    direction: field.value,
                    onChange: (e) => updateFields(e, index, "address", inputFields, (updatedFields) => setInputFields(updatedFields)),
                  }}
                  debounce={1000}
                  minLengthAutocomplete={3}
                />
              </label>
            ) : (
              <field.component
                id={field.id}
                key={field.id}
                type={field.type}
                placeholder={field.label}
                handleToggle={(e) => updateFields(e, index, "toggle", inputFields, (updatedFields) => setInputFields(updatedFields))}
                onChange={(e) => updateFields(e, index, "textInput", inputFields, (updatedFields) => setInputFields(updatedFields))}
                title={field.label}
                value={field.value}
              />
            )
          )}
        </form>
        <Button text="Show proposal" onClick={showProposal} />
      </div>
    </div>
  );
}
