'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Item extends Model {
  CatchIK () {
    return this.hasOne('App/Models/CatchIk')
  }
  CatchAndOpenBox () {
    return this.hasOne('App/Models/CatchAndOpenBox')
  }
  Format () {
    return this.hasOne('App/Models/Format')
  }
  CarryFormatedCar () {
    return this.hasOne('App/Models/CarryFormatedCar')
  }
  SignAndPasteEtq () {
    return this.hasOne('App/Models/SignAndPasteEtq')
  }
  PositionIkOnCar () {
    return this.hasOne('App/Models/PositionIkOnCar')
  }
  DiscardLeaving () {
    return this.hasOne('App/Models/DiscardLeaving')
  }
}

module.exports = Item
