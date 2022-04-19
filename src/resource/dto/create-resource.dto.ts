export class CreateResourceDto {
    _id?: number
    token: string
    name: string
    description?: string
    code: string
    type: string
    active: boolean
    componentid: string
}
