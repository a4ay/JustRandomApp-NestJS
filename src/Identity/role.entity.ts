import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Role {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false, unique: true})
    name: string;

    @Column({nullable: false, unique: true})
    standardizeName: string;

    @ManyToMany((type) => User, (user) => user.roles)
    users: User[]
    
}