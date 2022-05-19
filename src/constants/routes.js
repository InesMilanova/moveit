import App from "../App";
import { Entry } from "../pages/Entry/Entry";
import { Proposal } from "../pages/Proposal/Proposal";

export const ROUTES = {
    PROPOSAL: '/proposal',
    ENTRY: '/entry'
}

export const paths = [
    {
      path: "/",
      component: App,
    },
    {
      path: "entry",
      component: Entry,
    },
    {
      path: "proposal/:id",
      component: Proposal,
    },
  ];
