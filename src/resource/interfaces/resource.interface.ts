import { Document } from 'mongoose'
export interface Resource extends Document {
    _id?: number,
    token: string,
    name: string,
    description?: string,
    code: string,
    type: string,
    active: boolean,
    componentid: string
}