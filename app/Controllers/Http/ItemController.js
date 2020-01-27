'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Item = use('App/Models/Item')

/**
 * Resourceful controller for interacting with items
 */
class ItemController {
  /**
   * Show a list of all items.
   * GET items
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const items = Item.all()

    return items
  }

  /**
   * Create/save a new item.
   * POST items
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
        "code",
        "version",
        "exclusiveOrCommon",
        "model",
        "description",
        "isNewModel",
        "featureStationBase",
        "isKitOrGs",
        "crashLM3",
        "providerPackingType",
        "quantityBoxOnKD",
        "quantityPiecesOnKD",
        "packingTypeDCC",
        "weightPackingDCC",
        "owner",
        "extra",
        "note"
    ])

    const item = await Item.create({ ...data })

    return item
  }

  /**
   * Display a single item.
   * GET items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const item = await Item.findOrFail(params.id)

    await item.loadMany([
                        'CatchIK',
                        'CatchAndOpenBox',
                        'Format',
                        'CarryFormatedCar',
                        'SignAndPasteEtq',
                        'PositionIkOnCar',
                        'DiscardLeaving'
                      ])

    return item
  }

  /**
   * Update item details.
   * PUT or PATCH items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a item with id.
   * DELETE items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const item = await Item.findOrFail(params.id)

    // if (property.user_id !== auth.user.id) {
    //   return response.status(401).send({ error: 'Not authorized' })
    // }

    await item.delete()
  }
}

module.exports = ItemController
