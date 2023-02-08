import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: true})
    firstName: string;

    @Column({nullable: true})
    middleName: string;

    @Column({nullable: false})
    lastName: string;

    @Column({nullable: false})
    email: string;

    @Column({default: false})
    emailConfirmed: boolean;

    @Column({nullable: true})
    phoneNumber: string;

    @Column({default: false})
    phoneNumberConfirmed: boolean;

    @Column({nullable: false})
    passwordHash: string;

}