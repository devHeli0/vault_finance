import { Column, Entity, OneToMany, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Accounts } from "./Accounts";
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

    @JoinColumn({name: 'account_id'})
    account: Accounts
}