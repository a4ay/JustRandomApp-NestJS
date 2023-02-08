import { MigrationInterface, QueryRunner } from "typeorm";

export class initialUserEntity1675877828374 implements MigrationInterface {
    name = 'initialUserEntity1675877828374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying, "middleName" character varying, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "emailConfirmed" boolean NOT NULL DEFAULT false, "phoneNumber" character varying, "phoneNumberConfirmed" boolean NOT NULL DEFAULT false, "passwordHash" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
