export class RegisterViewModel {
  firstName: String;
  lastName: String;
  email: String;
  gender: String;
  dob: String;
  password: String;
  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.gender = '';
    const m = new Date();
    this.dob = m.getUTCDate() + '/' + (m.getUTCMonth() + 1) + '/' + m.getUTCFullYear();
    this.password = '';
  }
  isValid(): String {
    if (this.firstName === '') {
      return 'Please enter your FirstName';
    } else if (this.password === '') {
      return 'Please enter Password';
    } else if (this.email === '') {
      return 'Please enter Email';
    } else if (this.gender === '') {
      return 'Please select Gender';
    }
    return 'Valid';
  }
}
