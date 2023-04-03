import { Location, NavigateFunction } from "react-router-dom";

export interface IHistory {
  navigate: NavigateFunction | null;
  location: Location | null;
}

export const history: IHistory = {
  navigate: null,
  location: null,
};
