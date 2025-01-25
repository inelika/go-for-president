function goforpresident(candidate) {
  const { 
    age, 
    citizens, 
    Years, 
    Education, 
    Rights, 
    Experience, 
    language 
  } = candidate;

  if (!citizens) {
    return "Кандидат не является гражданином Республики Казахстан по рождению.";
  }
  if (Years < 15) {
    return "Кандидат не проживал на территории Казахстана последние 15 лет.";
  }
  if (!Education) {
    return "Кандидат не имеет высшего образования.";
  }
  if (age < 40) {
    return "Кандидат слишком молод (возраст должен быть не менее 40 лет).";
  }
  if (!Rights) {
    return "Кандидат не обладает активным избирательным правом.";
  }
  if (Experience < 5) {
    return "Кандидат не имеет необходимого опыта работы на государственной службе или выборных должностях (не менее 5 лет).";
  }
  if (!language) {
    return "Кандидат не владеет свободно государственным языком.";
  }

  return "Кандидат соответствует всем требованиям для подачи заявления на должность президента.";
}

console.log(
  goforpresident({
    age: 42,
    citizens: true,
    Years: 16,
    Education: true,
    Rights: true,
    Experience: 6,
    language: true
  })
);

console.log(
  goforpresident({
    age: 35,
    citizens: true,
    Years: 10,
    Education: true,
    Rights: true,
    Experience: 6,
    language: true
  })
);
