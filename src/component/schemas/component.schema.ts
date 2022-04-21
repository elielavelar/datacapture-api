import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Transform } from 'class-transformer';

export type CompomentType = Component & Document

@Schema()
export class Component {
    @Transform( ({value}) => value.toString() )
    _id: string;

    
}