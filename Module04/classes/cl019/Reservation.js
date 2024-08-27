class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;

    this.total = days * Reservation.reservationFee;
  }

  static reservationFee = 150;

  static showFee() {
    console.log(`The reservation fee is: ${Reservation.reservationFee}`)
  }

  static get premiumFee() {
    return Reservation.reservationFee * 1.5
  }
}

Reservation.showFee()

const r1 = new Reservation(3, '201', 5);
console.log(r1.total);

Reservation.reservationFee = 200

const r2 = new Reservation(5, '101A', 14);
console.log(r2.total)

console.log(`The premium fee is: ${Reservation.premiumFee}`);
console.log(`The premium fee is: ${Reservation.premiumFee}`);