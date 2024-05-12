import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' }) // Define column type for name property
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar' })
  position: string;

  @Column({ type: 'int' })
  strength: number;
}
