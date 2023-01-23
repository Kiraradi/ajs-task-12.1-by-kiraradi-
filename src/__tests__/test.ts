import Movie from "../Movie";
import Cart from "../Cart";

test('test 1', () => { 
    const desuNoto = new Movie('Тутрадь Смерти', 'Desu noto', 2006, 'Japan', 'Take down Yotsuba!', ['anome','fantasy', 'thriller', 'drama', 'crime', 'detective'],814, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0368a21d-64dd-4340-b097-205dc9512ba4/300x450',1,1200,'Movie');
    
    const rightAnswer = {
        localizedName: 'Тутрадь Смерти',
        originalName: 'Desu noto',
        year: 2006,
        country: 'Japan',
        slogan: 'Take down Yotsuba!',
        genre: [ 'anome', 'fantasy', 'thriller', 'drama', 'crime', 'detective' ],
        timeInMinutes: 814,
        poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0368a21d-64dd-4340-b097-205dc9512ba4/300x450',
        id: 1,
        price: 1200,
        category: 'Movie'
      }
    expect(desuNoto).toEqual(rightAnswer);
 })

 test('test 2', () => {
    const desuNoto = new Movie('Тутрадь Смерти', 'Desu noto', 2006, 'Japan', 'Take down Yotsuba!', ['anome','fantasy', 'thriller', 'drama', 'crime', 'detective'],814, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0368a21d-64dd-4340-b097-205dc9512ba4/300x450',1,1200,'Movie');
    const desuNotoTwo = new Movie('Тутрадь Смерти', 'Desu noto', 2006, 'Japan', 'Take down Yotsuba!', ['anome','fantasy', 'thriller', 'drama', 'crime', 'detective'],814, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0368a21d-64dd-4340-b097-205dc9512ba4/300x450',2,2500,'Movie');
    
    const cart = new Cart();
    cart.add(desuNoto);
    cart.add(desuNotoTwo);
    expect(cart.totalAmount()).toBe(3700);
 })

 test('test 3', () => {
  const desuNoto = new Movie('Тутрадь Смерти', 'Desu noto', 2006, 'Japan', 'Take down Yotsuba!', ['anome','fantasy', 'thriller', 'drama', 'crime', 'detective'],814, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0368a21d-64dd-4340-b097-205dc9512ba4/300x450',1,1200,'Movie');
  const desuNotoTwo = new Movie('Тутрадь Смерти', 'Desu noto', 2006, 'Japan', 'Take down Yotsuba!', ['anome','fantasy', 'thriller', 'drama', 'crime', 'detective'],814, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0368a21d-64dd-4340-b097-205dc9512ba4/300x450',2,2500,'Movie');

    const rightAnswer = [
      {
        localizedName: 'Тутрадь Смерти',
        originalName: 'Desu noto',
        year: 2006,
        country: 'Japan',
        slogan: 'Take down Yotsuba!',
        genre: [ 'anome', 'fantasy', 'thriller', 'drama', 'crime', 'detective' ],
        timeInMinutes: 814,
        poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0368a21d-64dd-4340-b097-205dc9512ba4/300x450',
        id: 2,
        price: 2500,
        category: 'Movie'
      }
    ]
       

      const cart = new Cart();
      cart.add(desuNoto);
      cart.add(desuNotoTwo);
      cart.deleteAnItem(1)
      expect(cart.items).toEqual(rightAnswer);
 })

 test('test 4', () => {
  const desuNoto = new Movie('Тутрадь Смерти', 'Desu noto', 2006, 'Japan', 'Take down Yotsuba!', ['anome','fantasy', 'thriller', 'drama', 'crime', 'detective'],814, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0368a21d-64dd-4340-b097-205dc9512ba4/300x450',1,1200,'Movie');
  const desuNotoTwo = new Movie('Тутрадь Смерти', 'Desu noto', 2006, 'Japan', 'Take down Yotsuba!', ['anome','fantasy', 'thriller', 'drama', 'crime', 'detective'],814, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0368a21d-64dd-4340-b097-205dc9512ba4/300x450',2,2500,'Movie');
  
  const cart = new Cart();
  cart.add(desuNoto);
  cart.add(desuNotoTwo);
  expect(cart.discountedAmount(500)).toBe(3200);
})

test('test 4', () => {
  const cart = new Cart();
  expect(cart.totalAmount()).toBe(0);
})