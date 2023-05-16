import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration11684239997259 implements MigrationInterface {
    name = 'Migration11684239997259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "operating_time" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dayOfWeek" character varying NOT NULL, "openingTime" TIME NOT NULL, "closingTime" TIME NOT NULL, "restaurantId" uuid, CONSTRAINT "PK_19e4219b631c73517f2a763cd95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "operating_time" ADD CONSTRAINT "FK_43a8ed58692e985318041b52063" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "operating_time" DROP CONSTRAINT "FK_43a8ed58692e985318041b52063"`);
        await queryRunner.query(`DROP TABLE "operating_time"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
    }

}
