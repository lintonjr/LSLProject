'use strict'

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["username", "email", "registration", "password"])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
