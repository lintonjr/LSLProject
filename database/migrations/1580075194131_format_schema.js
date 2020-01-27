'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FormatSchema extends Schema {
  up () {
    this.create('formats', (table) => {
      table.increments()
      table
      .integer('item_id')
      .unsigned()
      .references('id')
      .inTable('items')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.time('firstTime', { precision: 6 }).nullable()
      table.time('firstQuantity', { precision: 6 }).nullable()
      table.string('firstPieceOrCar').nullable()
      table.time('secondTime', { precision: 6 }).nullable()
      table.time('secondQuantity', { precision: 6 }).nullable()
      table.string('secondPieceOrCar').nullable()
      table.time('thirdTime', { precision: 6 }).nullable()
      table.time('thirdQuantity', { precision: 6 }).nullable()
      table.string('thirdPieceOrCar').nullable()
      table.time('fourthTime', { precision: 6 }).nullable()
      table.time('fourthQuantity', { precision: 6 }).nullable()
      table.string('fourthPieceOrCar').nullable()
      table.time('fifthTime', { precision: 6 }).nullable()
      table.time('fifthQuantity', { precision: 6 }).nullable()
      table.string('fifthPieceOrCar').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('formats')
  }
}

module.exports = FormatSchema
