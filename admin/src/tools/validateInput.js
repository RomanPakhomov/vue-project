export default function(value, rules){
  let validateMessage = null;
  let valid = true;

  let reg = null;
  let reg2 = null;

  rules.forEach(rule => {
    switch (rule) {
      case 'mail':
        reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(value) == false) {
          validateMessage = 'Не верный формат e-mail';
          valid = false;
        }
        break;
      case 'snake-case':
        reg = /([a-z,-])/;
        reg2 = /(^\S*$)/;
        const str = value.toLowerCase();
        if(!reg.test(value) || (str != value) || !reg2.test(value)) {
          validateMessage = 'Значение должно быть в формате (example-snake-case)';
          valid = false;
        }
        break;
      case 'required':
        if(!value){
          validateMessage = 'Пожалуйста заполните поле';
          valid = false;
        }
        break;
    }
  });

  return {
    valid,
    validateMessage
  }
}