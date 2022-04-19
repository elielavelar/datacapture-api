import { Document } from 'mongoose'
export interface Resource extends Document {
    id?: number,
    token: string,
    name: string,
    description?: string,
    code: string,
    type: string,
    active: boolean,
    componentid: string
}