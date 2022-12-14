import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePlayer1667080250237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner):Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'players',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary:true,

                    },
                    {
                        name: 'team_id',
                        type: 'uuid',
                    },
                    {
                        name:'name',
                        type: 'varchar',
                    },
                    {
                        name: 'age',
                        type:'number',
                    },
                    { 
                        name: 'position',
                        type:'varchar',
                    },
                    {
                        name:'goals',
                        type:'number'
                    },
                ],
                foreignKeys: [
                    {
                    name: 'FKPlayer',
                    referencedTableName: 'teams',
                    referencedColumnNames: ['id'],
                    columnNames: ['team_id'],
                    onDelete: 'SET NULL',
                    onUpdate: 'SET NULL',
                    }
                
                ],
            }),
        );
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('players');
      }
    }
