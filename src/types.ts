export interface Prediction {
  input: any;
  status: "starting" | "processing" | "succeeded";
  id: string;
  output: [string, string];
}
