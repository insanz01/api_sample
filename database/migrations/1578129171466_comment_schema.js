'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments()
      table.timestamps()
      table.string('content')
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentSchema
