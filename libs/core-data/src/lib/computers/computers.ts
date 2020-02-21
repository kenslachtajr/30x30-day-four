export interface Computer {
  id: number,
  make: string,
  name: string,
  ram: number,
  isDesktop: boolean
}

export const emptyComputer: Computer = {
  id: null,
  make: '',
  name: '',
  ram: 0,
  isDesktop: false
}
