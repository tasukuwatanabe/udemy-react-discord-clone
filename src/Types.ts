interface User {
  uid: string;
  photo: string;
  email: string;
  displayName: string;
}

export interface InitialUserState {
  user: null | User;
}
