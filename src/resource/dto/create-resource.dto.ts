export class CreateResourceDto {
  _id?: string;
  token: string;
  name: string;
  active: boolean;
  code: string;
  type: string;
  description?: string;
  componentId: string;
}
