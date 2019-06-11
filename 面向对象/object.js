var person = {
  // name:'yonghua'
}
Object.defineProperty(person, "name", {
  writable: false,
  value:'yonghua'
})

person.name = "yonghuasun"
console.log(person)