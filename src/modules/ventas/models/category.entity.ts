import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('category', {schema:'ventas'} )
export class CategoryEntity{
@PrimaryGeneratedColumn('sv')
id:string;
//Crear
@CreateDateColumn({
   name:'created_date',
   type:'timestamptz',
   default:() => 'CURRENT_TIMESTAMP',
 })
 createdAt: Date;
 //Actualizar
@UpdateDateColumn({
 name:'updated_date',
 type:'timestamptz',
 default:() => 'CURRENT_TIMESTAMP',
})
updatedAt: Date;
//Borrar
@DeleteDateColumn({
 name:'deleted_date',
 type:'timestamptz',
 default:() => 'CURRENT_TIMESTAMP',
})
deletedAt: Date;
//Relaciones
@OneToMany(() => ProductEntity, (product) => product.category)
  children: ProductEntity[];
//Columna de Titulo
@Column('varchar', {
    name:'title',
    unique:true,
    comment:'Titulo del producto',
  })
  title: string;
  //Columna de Descripción
  @Column('varchar', {
    name:'description',
    nullable:true,
    comment:'Descripción del producto',
  })
  description: string;
}
