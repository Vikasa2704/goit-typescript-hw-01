// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

//Для generics потрібно додавати `extends object` , також не забувайте вказати тип даних який повертає функція



function merge <T extends object, U extends object>(objA: T, objB: U): T & U {
      return Object.assign( {}, objA, objB);
    }
    