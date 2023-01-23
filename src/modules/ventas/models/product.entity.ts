import { async } from "rxjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, UpdateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm"; 

@Entity('productos',{schema: 'ventas'} )
export class ProductEntity{
    @PrimaryGeneratedColumn('sv')
    id:number;
    @CreateDateColumn({
        name: 'created_date',
        type: 'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date; 

    @UpdateDateColumn({
        name: 'create_date',
        type: 'timestamptz',
        nullable: true,
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name: 'create_date',
        type: 'timestamptz',
        nullable: true,
    })
    deleteAt: Date;

//relationships
@ManyToOne(()=> CategoryEntity, (category) => category.products)
Category: CategoryEntity;

    @Column('varchar',{
        name: 'title',
        unique: true,
        Comment: 'titulo del proyecto',
})
title:string;

    @Column('number',{
        name: 'price',
        Comment: 'precio del producto'
})
price: number;

    @Column('varchar',{
        name: 'description',
        unique: true,
        Comment: 'precio del producto',
})

description: string;
/*@Column('boolean',{
    name: 'estate',
})
state:boolean:
@Column('enum',{
    name: 'language',
    enum: languageTypeEnum;
//completar
@BeforeInsert () //validacion antes de insertar o actualizar en nuestra base 
@BeforeUpdate()
async setTitle(){
    if(!this.tittle){
        return;
    }
    this.tittle = this.tittle.toUpperCase();
}
setEmail(){
    isFinite(!this.email){
        return;
    }
    this.email = this.email.toLowerCase().trim(); //para que no haya espacios

    async hashPassword(){
        if(!this.password){
            return;
        }
        this.password = Bcrypt.hash(this.password, 12))
    }
}*/

}
