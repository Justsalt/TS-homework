/* eslint-disable no-empty */
/* eslint-disable no-lone-blocks */
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  const sorted:any[] = [
    { name: 'peach', price: 23 },
    { name: 'lemonade', price: 90 },
    { name: 'lime', price: 432 },
    { name: 'lemonades', price: 1 },
  ];

  sorted.sort((a, b) => a.price - b.price);
  console.log(sorted);
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  Test.assertSimilar(addName({}, 'Brutus', 300), { Brutus: 300 });
  Test.assertSimilar(addName({ piano: 500 }, 'Brutus', 400), { piano: 500, Brutus: 400 });
  Test.assertSimilar(addName({ piano: 500, stereo: 300 }, 'Caligula', 440), { piano: 500, stereo: 300, Caligula: 440 });
}
console.groupEnd();
