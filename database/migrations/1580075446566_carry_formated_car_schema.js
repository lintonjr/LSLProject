'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarryFormatedCarSchema extends Schema {
  up () {
    this.create('carry_formated_cars', (table) => {
      table.increments()
      table
      .integer('item_id')
      .unsigned()
      .references('id')
      .inTable('items')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.time('firstTime', { precision: 6 }).nullable()
      table.time('secondTime', { precision: 6 }).nullable()
      table.time('thirdTime', { precision: 6 }).nullable()
      table.time('fourthTime', { precision: 6 }).nullable()
      table.time('fifthTime', { precision: 6 }).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('carry_formated_cars')
  }
}

module.exports = CarryFormatedCarSchema
