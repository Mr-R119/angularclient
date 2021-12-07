export class Patient {
  id?: any;
  firstName?: string;
  secondName?: string;
  patronymic?: string;
  phone?: string;


  public toString(): string {
    return this.secondName + ' ' + this.firstName + ' ' + this.patronymic;
  }
}
