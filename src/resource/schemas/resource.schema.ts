import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ResourceDocument = Resource & Document;

@Schema()
export class Resource {
    @Prop()
    name: string;

    @Prop()
    token: string;    
    
    @Prop()
    description: string;

    @Prop()
    type: string;

    @Prop()
    componentid: string;

    @Prop()
    code: string;

    @Prop()
    active: boolean;

}

export const ResourceSchema = SchemaFactory.createForClass( Resource )