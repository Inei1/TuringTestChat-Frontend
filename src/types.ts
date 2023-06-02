export interface LoginState {
  tabIndex: number;
  loggedIn: boolean;
}

export interface Message {
  name: string;
  text: string;
  key: string;
}

export interface User {
  detection: number;
  deception: number;
  detectionWins: number;
  detectionLosses: number;
  deceptionWins: number;
  deceptionLosses: number;
}