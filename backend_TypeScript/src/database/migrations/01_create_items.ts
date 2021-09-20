import {Knex} from 'knex';

// Criando os atributos que a tabela vai ter

export async function up( knex: Knex) {
    return knex.schema.createTable('items',table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable();
    });
}

// Tem que ter atributo para criar e para destruir

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}