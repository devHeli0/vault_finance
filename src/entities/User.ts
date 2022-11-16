import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from './Transactions'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: 'text'})
    username: string

    @Column({type: 'text'})
    password: string

    @OneToMany(() => Transaction, transaction => transaction.user)
    transactions: Transaction[]
}