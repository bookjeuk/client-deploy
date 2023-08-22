export type Input = {
  type: string;
  placeholder: string;
  submitInput: () => void;
  updateInput: (text: string) => void;
}