interface User {
  name: string
  email: string
  address: {
    city: string
    state?: string
  }
}

const showWelcomeMessage = (user : User) => {
  return `
    Welcome ${user.name},
    your email is ${user.email},
    your city is ${user.address.city},
    and your state is ${user.address.state}
  `
}

const newUser = {
  name:  'Wellington Pinho',
  email: 'wellpinho@outlook.com',
  address: {
    city: 'Palhoça',
    state: 'SC'
  }
}

console.log(showWelcomeMessage(newUser))