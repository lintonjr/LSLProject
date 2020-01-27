'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table.string('code', 60).notNullable()
      table.string('version', 20).nullable()
      table.string('exclusiveOrCommon', 30).notNullable()
      table.string('model', 30).notNullable()
      table.string('description', 254).nullable()
      table.boolean('isNewModel').nullable()
      table.string('featureStationBase').nullable()
      table.string('isKitOrGs').nullable()
      table.boolean('crashLM3').nullable()
      table.string('providerPackingType').nullable()
      table.integer('quantityBoxOnKD').nullable()
      table.integer('quantityPiecesOnKD').nullable()
      table.string('packingTypeDCC').nullable()
      table.string('weightPackingDCC').nullable()
      table.string('owner').nullable()
      table.string('extra').nullable()
      table.string('note').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemSchema
