import { v4 as uuid } from "uuid";
import { DEFAULT_PROPOSAL } from "../constants/constants";

export const updateFields = (e, index, property, inputFields, callback) => {
  let inputFieldsCopy = [...inputFields];
  if (property === "toggle") {
    inputFieldsCopy[index].value = !inputFieldsCopy[index].value;
  } else if (property === "textInput") {
    inputFieldsCopy[index].value = e.target.value;
  } else {
    inputFieldsCopy[index].value = e.label;
  }
  callback(inputFieldsCopy);
};

export const setProposals = (proposal) => {
  let proposals = JSON.parse(localStorage.getItem("proposals"));
  if (proposals) {
    proposals.push(proposal);
  } else {
    proposals = [proposal];
  }
  localStorage.setItem("proposals", JSON.stringify(proposals));
};

const booleanToYesNoString = (value) => (value ? "yes" : "no");

export const setValue = (value) =>
  typeof value === "boolean" ? booleanToYesNoString(value) : value;

export const getProposal = (params) => {
  const proposals = JSON.parse(localStorage.getItem("proposals"));
  let proposal = proposals.find((proposal) => proposal.id === params.id);
  return proposal ?? DEFAULT_PROPOSAL;
};

export const createProposal = (inputFields) =>
  inputFields.reduce(
    (prev, curr) => ({
      ...prev,
      id: uuid(),
      [curr.id]: { value: curr.value, label: curr.label },
    }),
    {}
  );

const setDefaultValue = (value) => {
  if (typeof value === "string") {
    return "";
  } else if (typeof value === "number") {
    return 0;
  } else {
    return false;
  }
};

export const clearEntry = (inputFields) =>
  inputFields.map((field) => ({
    ...field,
    value: setDefaultValue(field.value),
  }));

export const thousandSeparator = (price) =>
  price
    .toFixed(1)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
