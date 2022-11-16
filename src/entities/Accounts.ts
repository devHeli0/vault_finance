import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('accounts')
export class Accounts {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    balance: string

    @Column({type: 'text'})
    password: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;
}