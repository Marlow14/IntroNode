function Band(name, members) {
    this.name = name;
    this.members = members;
}

Band.prototype.memberCount = function() {
    return this.members.length;
};
Band.prototype.hasMember = function(name) {
    return this.members.includes(name);
  };
const beatles = new Band('The Beatles', ['John', 'Paul', 'George', 'Ringo', 'Chris Marlow', 7]);

console.log(`beatles member count`, beatles.memberCount());
console.log(`Chris  Marlow was a Beatle?`, beatles.hasMember('Chris Marlow'));
