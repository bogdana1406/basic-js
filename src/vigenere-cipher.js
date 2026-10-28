/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  transform(message, key, direction) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upperKey = key.toUpperCase();
    let keyIndex = 0;
    const result = message.toUpperCase().replace(/[A-Z]/g, (letter) => {
      const shift = letters.indexOf(upperKey[keyIndex++ % upperKey.length]);
      return letters[(letters.indexOf(letter) + direction * shift + 26) % 26];
    });
    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.transform(message, key, 1);
  }

  decrypt(message, key) {
    return this.transform(message, key, -1);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
