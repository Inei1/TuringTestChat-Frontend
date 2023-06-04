export interface LoginContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export interface Message {
  name: string;
  text: string;
  key: string;
}

export interface User {
  name: string;
  dailyCredits: number;
  permanentCredits: number;
  detection: number;
  deception: number;
  detectionWins: number;
  detectionLosses: number;
  deceptionWins: number;
  deceptionLosses: number;
}