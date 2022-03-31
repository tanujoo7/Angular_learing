export class CounterService {
  activeToInActive = 0
  InactiveToActive = 0

  returnCountActiveUsers() {
    this.InactiveToActive++
    console.log('Count For Active Users : ' + this.InactiveToActive)
  }

  returnCountInactiveUsers() {
    this.activeToInActive++
    console.log('Count for Inactive Users : ' + this.activeToInActive)
  }
}
