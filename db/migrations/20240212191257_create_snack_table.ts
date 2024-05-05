import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('snack', (table) => {
    table.uuid('id').primary()
    table.string('name')
    table.string('description')
    table.boolean('insideDiet')
    table.string('user_id').references('id').inTable('user')
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('snack')
}
