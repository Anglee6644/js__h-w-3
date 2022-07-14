var time = +prompt('Введите время в цифрах')

switch(time) {
    case 0:
        alert(12 + ' часа ночи');
        break;
    case 1:
        alert(time + ' час ночи');
        break;
    case 2:
    case 3:
    case 4:
        alert(time + ' часа ночи');
        break;
    case 5:
    case 6:
        alert(time + ' часов ночи');
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert(time + ' часов утра');
        break;
    case 11:
    case 12:
        alert(time + ' часов дня');
        break;
    case 13:
        alert(1 + ' час дня');
        break;
    case 14:
        alert(2 + ' часа дня');
        break; 
    case 15:
        alert(3 + ' часа дня');
        break;
    case 16:
        alert(4 + ' часа дня');
        break;
    case 17:
        alert(5 + ' часов дня');
        break;
     case 18:
        alert(6 + ' часов вечера');
        break;
    case 19:
        alert(7 + ' часов вечера');
        break;
    case 20:
        alert(8 + ' часов вечера');
        break;
    case 21:
        alert(9 + ' часов вечера');
        break;
    case 22:
        alert(10 + ' часов вечера');
        break;
    case 23:
        alert(11 + ' часов вечера');
        break;
    default:
        alert('ошибка  (-_-)')
        break;
}