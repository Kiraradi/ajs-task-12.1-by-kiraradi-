import Movie from "../Movie";

test('test 1', () => { 
    const desuNoto = new Movie('Тутрадь Смерти', 'Desu noto', 2006, 'Japan', 'Take down Yotsuba!', ['anome','fantasy', 'thriller', 'drama', 'crime', 'detective'],814, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/0368a21d-64dd-4340-b097-205dc9512ba4/300x450',1,1200,'Movie');
    //console.log(desuNoto);
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