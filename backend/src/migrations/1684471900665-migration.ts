import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1684471900665 implements MigrationInterface {
    name = 'Migration1684471900665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurants" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "type" character varying NOT NULL, "cellPhone" character varying NOT NULL, CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "operatingTimes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dayOfWeek" character varying NOT NULL, "openingTime" TIME NOT NULL, "closingTime" TIME NOT NULL, "restaurantId" uuid, CONSTRAINT "PK_2b6f5375e8e083d5386e23775fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "operatingTimes" ADD CONSTRAINT "FK_1467b7319f2095b32c0b9b17675" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operatingTimes" DROP CONSTRAINT "FK_1467b7319f2095b32c0b9b17675"`);
        await queryRunner.query(`DROP TABLE "operatingTimes"`);
        await queryRunner.query(`DROP TABLE "restaurants"`);
    }

}
