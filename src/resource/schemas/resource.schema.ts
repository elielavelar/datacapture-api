import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Transform } from 'class-transformer';

export type ResourceDocument = Resource & Document;

@Schema()
export class Resource {
    @Transform(({ value })=> value.toString() )
    _id: string;

    @Prop({ type: String, required: true })
    name: string;

    @Prop({ type: String, required: true })
    token: string;    
    
    @Prop({ type: String, required: true })
    type: string;

    @Prop({ type: String, required: true })
    code: string;
    
    @Prop({ type: String, required: false })
    description: string;

    @Prop({ type: String, required: false })
    componentid: string;

    @Prop({ type: Boolean, default: true})
    active: boolean;

}

export const ResourceSchema = SchemaFactory.createForClass( Resource )