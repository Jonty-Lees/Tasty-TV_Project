// This is the class for Signing in. Worth applying to the site once we have back end to be able to Fetch from.

export default class Signin {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  Signin() {
    console.log(`${userName} - Login Successful`);
  }
}
