export interface User {
  id: number,
  birthDate: string,
  firstName: string,
  lastName: string,
  gender: string,
  created: string
}

export interface Items {
  items : User[],
  page: number,
  size: number,
  total: number
}