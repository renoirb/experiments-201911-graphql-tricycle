import casual from 'casual'

export interface List {
  id: string
  name: string
  tasks: Task[]
}

export interface Task {
  id: string
  text: string
  completed: boolean
}

export const createMockList = () => ({
  id: casual.uuid,
  name: casual.name,
  tasks: [],
})

export const createMockTask = () => ({
  id: casual.uuid,
  text: casual.title,
  completed: casual.boolean,
})
