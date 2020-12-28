import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateObjectives1606262846065 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "objectives",
				columns: [
					{
						name: "id",
						type: "varchar",
						isPrimary: true,
						generationStrategy: "uuid",
					},
					{
						name: "who",
						type: "varchar",
					},
					{
						name: "verb",
						type: "varchar",
					},
					{
						name: "goal",
						type: "varchar",
					},
					{
						name: "how",
						type: "varchar",
					},
					{
						name: "email",
						type: "varchar",
					},
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("objectives");
	}

}
