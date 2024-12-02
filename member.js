function skillsMember() {
  const member = {
    name: 'John',
    age: 35,
    skills: ['HTML', 'CSS', 'JS'],
    // Method
    showSkills() {
      this.skills.forEach((skill) => {
        console.log(`${this.name} knows ${skill}`);
      });
    },
  };

  return member;
}