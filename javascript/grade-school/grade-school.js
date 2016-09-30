class School{
  constructor(){
    this.school = {};
  }

  add(student, gradeNum){
    if(!this.school[gradeNum]){
      this.school[gradeNum] = [student];
    }else{
      this.school[gradeNum].push(student);
    }

    this.school[gradeNum].sort( (a,b) => {
      return a > b;
    })
  }

  roster(){
    return this.school;
  }

  grade(gradeNum){
    if(this.school[gradeNum]){
      return this.school[gradeNum];
    }else{
      return [];
    }
  
  }
}

module.exports = School;
