
  const getDayInfo = (str) => {
    let dmy = str.split(".");
    let date = new Date(dmy[2], dmy[1] - 1, dmy[0]);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const localDate = date.toLocaleDateString('ru-Ru', options);
    const strCopy = localDate.split(' '); 
    const capitalizeFirstLetter = (strCopy)=> {
      return strCopy.map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();;
      });
    }
    const capitalized = capitalizeFirstLetter(strCopy);
    capitalized[4] = 'Года';
    let copyStr = ' ';
    for (let i = 0; i <= capitalized.length; i += 1) {
      i = capitalized[1]
      if (i <= 7) {
        capitalized[1]= '1 неделя'
      } else if (i > 7 && i <= 14) {
        capitalized[1] = '2 неделя';
      } else if (i > 14 && i <= 21) {
        capitalized[1] = '3 неделя';
      } else if (i > 21 && i <= 28) {
        capitalized[1] = '4 неделя';
      } else if (i > 28) {
        capitalized[1] = '5 неделя';
      }
       copyStr = capitalized.join(' ');
    }
    return copyStr;
  }
  

 