import {BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, 
                        ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products',{schema: 'ventas'} )
export class ProductEntity{

    @PrimaryGeneratedColumn('sv')
    id:number;
    
    @CreateDateColumn({
       name:'create_date',
       type: 'timestamptz',
       default:()=>'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @UpdateDateColumn({
        name:'create_date',
        type:'timestamptz',
        default:()=>'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name:'create_date',
        type:'timestamptz',
        nullable: true,
    })
    deleteAt: Date;

    //Relationship
    @ManyToOne(()=>CategoryEntity,(category)=>category.products)
    category:CategoryEntity;

    @Column('varchar',{
        name:'title',
        unique:true,
        comment:'titulo del producto',
    })
    title:string;

    @Column('number',{
        name:'price',
        comment:'precio con dos decimales',
    })
    price:number;

    @Column('varchar',{
        name:'description',
        nullable:true,
        comment:'descripcion del producto'
    })
    description:string;

    //complement
    //@Column('boolean',{
      //  name:'state',   
    //})
    //state:boolean;
    //@column('enum',{
      //  name:'langauje',
        //enum:languajeTypeEnum,
    //})
    //languaje:LanguajeTypeEnum;


    //complemento
    @BeforeInsert()
    @Beforeupdate()
    async setTitle(){
        if(!this.title){
        return;
    }
    this.title =this.title.toUpperCase();
    }
        //setEmail(){
        //  if(!this.email){
        //return;
        //}
        //       this.email = this.email.toLowerCase().trim();
         //}
        //  Async hashPassword(){
        //    if(!this.password){
        //          return;
        //    }
        //  this.password = await Bcrypt.hash(this.password, 12);
}