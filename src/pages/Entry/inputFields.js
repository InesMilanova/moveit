import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "../../components/Input/Input";
import { ToggleSwitch } from "../../components/ToggleSwitch/ToggleSwitch";

export const allInputFields = [
  {
    id: "fullName",
    type: "text",
    label: "Full name",
    value: "",
    component: Input,
  },
  {
    id: "email",
    type: "email",
    label: "Email",
    value: "",
    component: Input,
  },
  {
    id: "fromAddress",
    type: "autocomplete",
    label: "From address",
    value: "",
    component: GooglePlacesAutocomplete,
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    point: "origin",
  },
  {
    id: "toAddress",
    type: "autocomplete",
    label: "To address",
    value: "",
    component: GooglePlacesAutocomplete,
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    point: "destination",
  },
  {
    id: "livingSpace",
    type: "number",
    label: "Living space (m2)",
    value: 0,
    component: Input,
  },
  {
    id: "basementAttic",
    type: "number",
    label: "Basement/attic living space (m2)",
    value: 0,
    component: Input,
  },
  {
    id: "piano",
    type: "toggle",
    label: "Is it a piano?",
    value: false,
    component: ToggleSwitch,
  },
  {
    id: "packagingHelp",
    type: "toggle",
    label: "Is packaging help needed?",
    value: false,
    component: ToggleSwitch,
  },
];
