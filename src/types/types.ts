export interface CardProps {
  photo: string,
  phone: string,
  email: string,
  position:string,
  name: string,
  id: number,
}
export interface ButtonProps {
  text:string,
  anchor?: string,
  func?: () => void,
  stateBtn?: string | null,
}
export interface DataForm {
  name:string,
  email: string,
  phone: string,
  position_id: string,
  photo: FileList,
}

export interface PositionUser {
  id: string,
  name: string,
}
