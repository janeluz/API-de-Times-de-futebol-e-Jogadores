import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTeam1667078172975 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
  
        await queryRunner.createTable(
          new Table({
            name: 'teams',
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
    
      
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('teams');
      }
    }
    
