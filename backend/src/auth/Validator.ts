import { UserSchema, UserModel } from './../schemas/UserModel';
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

export const validate = async (request, username, password, h) => {
  console.log(`PASS: >>> ${password}`);

  if (username === 'help') {
    return { response: h.redirect('https://hapijs.com/help') };     // custom response
  }

  const user = await UserModel.findOne({
    $or: [
      {
        'name': username
      }
    ]
  }).exec();

  if (!user) {
    return { credentials: null, isValid: false };
  }

  const crypto = new Crypto();
  const isValid = crypto.compare(user, password);

  const credentials = { id: user.name, name: user.name };

  return { isValid, credentials };
};
