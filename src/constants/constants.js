import { v4 as uuid } from "uuid";

export const RANGES = {
  BELOW_FIFTY: "belowFifty",
  ABOVE_FIFTY: "aboveFifty",
  ABOVE_HUNDRED: "aboveHundred",
};

export const priceLimits = {
  belowFifty: {
    startPrice: 1000,
    perKm: 10,
  },
  aboveFifty: {
    startPrice: 5000,
    perKm: 8,
  },
  aboveHundred: {
    startPrice: 10000,
    perKm: 7,
  },
};

export const DEFAULT_PROPOSAL = {
  id: uuid(),
  fullName: {
    value: "",
    label: "",
  },
  email: {
    value: "",
    label: "Email",
  },
  fromAddress: {
    value: "",
    label: "From address",
  },
  toAddress: {
    value: "",
    label: "To address",
  },
  livingSpace: {
    value: "",
    label: "Living space (m2)",
  },
  basementAttic: {
    value: "",
    label: "Basement/attic living space (m2) - optional",
  },
  piano: {
    value: false,
    label: "Is it a piano?",
  },
  packagingHelp: {
    value: false,
    label: "Is packaging help needed?",
  },
  distance: {
    value: 0,
    label: "Distance",
  },
};

export const TRAVEL_MODE = {
  DRIVING: "DRIVING",
};
