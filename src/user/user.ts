import 'reflect-metadata';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from './user.interface';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  kana: string;

  @PrimaryColumn()
  email: string;

  @Column()
  postcode: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
