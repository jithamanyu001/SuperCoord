import { Field, ID } from "type-graphql";
import { BaseEntity, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm";
@Entity()
export class User extends BaseEntity{
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    userName: string;

    @Field()
    @Column("text",{unique:true})
    email: string;

    @Field()
    @Column()
    password: string;
    
}