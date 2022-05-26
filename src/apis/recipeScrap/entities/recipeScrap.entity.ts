import { Field, ObjectType } from "@nestjs/graphql";
import { Recipes } from "src/apis/recipes/entities/recipes.entity";
import { User } from "src/apis/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
@ObjectType()
export class RecipeScrap{
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> String)
    scrap_id: string

    @ManyToOne(() => User, (user) => user.scrapCount)
    @Field(() => User)
    user: User

    @ManyToOne(() => Recipes, (recipes) => recipes.scrapCount)
    @Field(() => Recipes)
    recipes: Recipes

    @Column({ default: false })
    @Field(() => Boolean)
    scraped: Boolean

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}