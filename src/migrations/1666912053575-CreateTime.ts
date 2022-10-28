import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTime1666912053575 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Cria a tabela
    await queryRunner.createTable(
      new Table({
        name: 'times',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'coach',
            type: 'varchar',
          },
          {
            name: 'stadium',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  // Se algo der errado exclui a tabela
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('times');
  }
}