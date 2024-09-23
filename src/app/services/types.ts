interface UserAdress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: { lat: string, lng: string }
}

export interface User {
  id: string
  name: string
  email: string
  address: UserAdress
  phone: string
  website: string
  company: any
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}
