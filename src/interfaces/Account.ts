import { Provider } from "../enums/Provider";
import { Group } from "./Group";

export interface Account {
    id: string;
    provider: Provider;
    name: string;
    email: string;
    password: string;
    groups: Group[];
  }