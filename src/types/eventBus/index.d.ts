export type CategoryIdType = string
export type ShowSearchType = boolean
// TODO need to type this
export type Subject = any
// Receiver can receive subject with related topic
// export interface Receiver {
//   receive(topic: string, subject: Subject): void
// }
export type Receiver = (subject: Subject) => void

// Main event bus interface
export interface EventBus {
  subscribe(topic: string, receiver: Receiver): void
  unsubscribe(topic: string): void

  publish(topic: string, subject: Subject): Promise<void>
}
