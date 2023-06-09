type UserInput = Pick<
  KeyboardEvent,
  "altKey" | "code" | "ctrlKey" | "key" | "location" | "metaKey" | "shiftKey"
>;

interface InputHistory {
  list: UserInput[];
  firstPressed?: UserInput;
  lastPressed?: UserInput;
}

export { UserInput, InputHistory };
