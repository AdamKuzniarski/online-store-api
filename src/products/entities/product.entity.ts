import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ length: 125 })
  name: string;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 5 })
  price: number;

  @Column({ length: 200 })
  stock: number;
}
