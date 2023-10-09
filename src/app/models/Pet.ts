type Pet = {
  name: string;
  owner: string;
};

export class PetModel {
  name: string;
  owner: string;

  constructor({ name, owner }: Pet) {
    this.name = name;
    this.owner = owner;
  }
  static getName() {
    return this.name;
  }
  static getPetOwner() {
    return this.name;
  }
}
