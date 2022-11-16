import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './User'

@Entity('transactions')
export class Transaction {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: 'text'})
    debitedAccountId: number

    @Column({type: 'text'})
    creditedAccountId: number

    @Column({type: 'text'})
    value: number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @ManyToOne(() => User, user => user.transactions)
    @JoinColumn({name: 'user_id'})
    user: User
}