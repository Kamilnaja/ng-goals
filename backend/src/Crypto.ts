const bcrypt = require('bcryptjs');

export interface User {
  password: string;
}

export class Crypto {
  salt: any;
  hash: any;
  constructor(
  ) { }

  public compare(user: User, password) {
    this.salt = bcrypt.genSaltSync(10);
    this.hash = bcrypt.hashSync(user.password, this.salt);
    return bcrypt.compareSync(password, this.hash);
  }
}
