{
  // Problem
  // const OBJ_ROLES = {
  //   admin: 'admin',
  //   user: 'user'
  // };

  // const objPerson1 = {
  //   role: OBJ_ROLES.admin
  // }

  // const objPerson2 = {
  //   role: OBJ_ROLES.user
  // }

  // const objSmth = {
  //   role: 'test'
  // }

  // function fnGetUserType(person: { role: string }) {
  //   if (person.role === 'admin') {
  //     console.log('admin');
  //   } else {
  //     console.log('user');
  //   }
  // }

  // fnGetUserType(objPerson1);
  // fnGetUserType(objPerson2);
  // fnGetUserType(objSmth);

  // Solution
  enum ENUM_ROLES {
    admin,
    user
  }

  const objPerson1 = {
    role: ENUM_ROLES.admin
  }

  const objPerson2 = {
    role: ENUM_ROLES.user
  }

  const objSmth = {
    role: 'test'
  }

  function fnGetUserType(person: { role: ENUM_ROLES }) {
    if (person.role === ENUM_ROLES.admin) {
      console.log('admin');
    } else {
      console.log('user');
    }
  }

  fnGetUserType(objPerson1);
  fnGetUserType(objPerson2);
  fnGetUserType(objSmth);
}