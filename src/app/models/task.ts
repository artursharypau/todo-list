export class Task {
  id: string;
  value: string;
  state: boolean;

  constructor(id: string, value: string, state: boolean) {
    this.id = id;
    this.value = value;
    this.state = state;
  }
}
