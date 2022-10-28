import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateJogador1666964806802 implements MigrationInterface {
    public async up(queryRunner: QueryRunner):Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'jogadores',
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
                    name: 'FKJogador',
                    referencedTableName: 'times',
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
        await queryRunner.dropTable('jogadores');
      }
    }