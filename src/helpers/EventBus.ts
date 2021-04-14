import { EventBusInterface, Receiver, Subject } from '@/types/eventBus'

class EventBus implements EventBusInterface {
  receivers: {
    [key: string]: Receiver[]
  } = {}
  public async publish(topic: string, subject: Subject): Promise<void> {
    const receivers = this.getTopicReceivers(topic)
    receivers.map(
      receiver => new Promise(resolve => resolve(receiver(subject)))
    )
  }
  private getTopicReceivers(topic: string): Receiver[] {
    if (!this.receivers[topic]) {
      return []
    }
    return this.receivers[topic]
  }
  // private retryPublish(
  //   topic: string,
  //   subject: Subject,
  //   receiver: Receiver
  // ): void {
  //   receiver(subject)
  // }

  public subscribe(topic: string, receiver: Receiver): void {
    if (!this.receivers[topic]) {
      this.receivers[topic] = []
    }
    this.receivers[topic].push(receiver)
  }
  public unsubscribe(topic: string): void {
    // public unsubscribe(topic: string): void {
    if (!this.receivers[topic]) {
      return
    }
    // this.receivers[topic] = this.receivers[topic].filter(
    //   item => item !== receiver
    // )
    this.receivers[topic] = []
  }
}

// class SmsNotificationService implements Receiver {
//   receive(topic: string, subject: Subject): void {
//     console.log('Sms event received', topic, subject)
//   }
// }
//
// class CustomReceiver implements Receiver {
//   receive(topic: string, subject: Subject): void {
//     console.log('Event received', topic, subject)
//   }
// }
//
// class EmailNotificationService implements Receiver {
//   receive(topic: string, subject: Subject): void {
//     console.log('Email event received', topic, subject)
//   }
// }

export const eventBus = new EventBus()
// export const customReceiver = new CustomReceiver()
// const emailService = new EmailNotificationService()

// eventBus.subscribe('notification', smsService)
// eventBus.subscribe('notification', emailService)
//
// eventBus.publish('notification', 'name')
//
// eventBus.unsubscribe('notification', smsService)
// eventBus.publish('notification', 'name 2')

// // /* eslint-disable */
// class EventBus {
//   events: any
//   constructor() {
//     this.events = {}
//   }
//
//   on(eventName: string, fn: any): void {
//     console.log(fn)
//     this.events[eventName] = this.events[eventName] || []
//     this.events[eventName].push(fn)
//   }
//
//   // off(eventName, fn) {
//   //   if (this.events[eventName]) {
//   //     for (let i = 0; i < this.events[eventName].length; i++) {
//   //       if (this.events[eventName][i] === fn) {
//   //         this.events[eventName].splice(i, 1)
//   //         break
//   //       }
//   //     }
//   //   }
//   // }
//   emit(eventName: string, data: any): void {
//     if (this.events[eventName]) {
//       this.events[eventName].forEach(function(fn: any) {
//         fn(data)
//       })
//     }
//   }
// }
//
// export default new EventBus()
