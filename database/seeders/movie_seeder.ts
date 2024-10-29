import Movie from '#models/movie'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Movie.createMany([
      {
        title: 'Spirited Away',
        image: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 5m',
        description: 'Film garapan Studio Ghibli ini bercerita tentang seorang anak yang masuk ke dunia lain tanpa sengaja. Dia melihat dua orang tuanya berubah menjadi babi saat makan di tempat tersebut.',
        releaseYear: 2001,
        video: 'https://www.youtube.com/embed/ByXuk9QqQkk?si=djv2TP9LYEzccxgY',
        genreId: 7
      },
      {
        title: 'The Godfather',
        image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 55m',
        description: 'Film yang menceritakan tentang kehidupan mafia di masa lampau yang lekat dengan tindak kriminal, kekerasan, bisnis illegal, penindasan, dan pembunuhan.',
        releaseYear: 1972,
        video: 'https://www.youtube.com/embed/UaVTIH8mujA?si=8wICdZKUOcRO19-t',
        genreId: 1
      },
      {
        title: 'Memories of Murder',
        image: 'https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        duration: '2h 12m',
        description: 'Film yang bercerita tentang kasus pembunuhan berantai di kota Hwaseong.',
        releaseYear: 2003,
        video: 'https://www.youtube.com/embed/0n_HQwQU8ls?si=4s2YgPYvKxxvwOyI',
        genreId: 6
      },
      {
        title: 'Toy Story 4',
        image: 'https://upload.wikimedia.org/wikipedia/id/4/4c/Toy_Story_4_poster.jpg',
        duration: '1h 40m',
        description: 'Film komedi pilihan keluarga terbaik',
        releaseYear: 2019,
        video: 'https://www.youtube.com/embed/wmiIUN-7qhE?si=q0hNFGf5wmzmdT2N',
        genreId: 2
      },
      {
        title: 'Coco',
        image: 'https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_.jpg',
        duration: '1h 45m',
        description: 'COCO bercerita tentang mimpi seorang anak bernama Miguel yang lahir di keluarga pembenci musik. Keluarga itu melarang permainan musik karena masa lalu pahit sang nenek. Namun, hal itu tak menyurutkan minat Miguel untuk jadi musisi. Sejak itu, Miguel telah dianggap sebagai anak yang menyimpan impian terlarang.',
        releaseYear: 2017,
        video: 'https://www.youtube.com/embed/Ga6RYejo6Hk?si=LTpiV3eBmKN-4LdD',
        genreId: 3
      },
      {
        title: 'Spirited Away',
        image: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 5m',
        description: 'Film garapan Studio Ghibli ini bercerita tentang seorang anak yang masuk ke dunia lain tanpa sengaja. Dia melihat dua orang tuanya berubah menjadi babi saat makan di tempat tersebut.',
        releaseYear: 2001,
        video: 'https://www.youtube.com/embed/ByXuk9QqQkk?si=djv2TP9LYEzccxgY',
        genreId: 7
      },
      {
        title: 'The Godfather',
        image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 55m',
        description: 'Film yang menceritakan tentang kehidupan mafia di masa lampau yang lekat dengan tindak kriminal, kekerasan, bisnis illegal, penindasan, dan pembunuhan.',
        releaseYear: 1972,
        video: 'https://www.youtube.com/embed/UaVTIH8mujA?si=8wICdZKUOcRO19-t',
        genreId: 1
      },
      {
        title: 'Memories of Murder',
        image: 'https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        duration: '2h 12m',
        description: 'Film yang bercerita tentang kasus pembunuhan berantai di kota Hwaseong.',
        releaseYear: 2003,
        video: 'https://www.youtube.com/embed/0n_HQwQU8ls?si=4s2YgPYvKxxvwOyI',
        genreId: 6
      },
      {
        title: 'Toy Story 4',
        image: 'https://upload.wikimedia.org/wikipedia/id/4/4c/Toy_Story_4_poster.jpg',
        duration: '1h 40m',
        description: 'Film komedi pilihan keluarga terbaik',
        releaseYear: 2019,
        video: 'https://www.youtube.com/embed/wmiIUN-7qhE?si=q0hNFGf5wmzmdT2N',
        genreId: 2
      },
      {
        title: 'Coco',
        image: 'https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_.jpg',
        duration: '1h 45m',
        description: 'COCO bercerita tentang mimpi seorang anak bernama Miguel yang lahir di keluarga pembenci musik. Keluarga itu melarang permainan musik karena masa lalu pahit sang nenek. Namun, hal itu tak menyurutkan minat Miguel untuk jadi musisi. Sejak itu, Miguel telah dianggap sebagai anak yang menyimpan impian terlarang.',
        releaseYear: 2017,
        video: 'https://www.youtube.com/embed/Ga6RYejo6Hk?si=LTpiV3eBmKN-4LdD',
        genreId: 3
      },
      {
        title: 'Spirited Away',
        image: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 5m',
        description: 'Film garapan Studio Ghibli ini bercerita tentang seorang anak yang masuk ke dunia lain tanpa sengaja. Dia melihat dua orang tuanya berubah menjadi babi saat makan di tempat tersebut.',
        releaseYear: 2001,
        video: 'https://www.youtube.com/embed/ByXuk9QqQkk?si=djv2TP9LYEzccxgY',
        genreId: 7
      },
      {
        title: 'The Godfather',
        image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 55m',
        description: 'Film yang menceritakan tentang kehidupan mafia di masa lampau yang lekat dengan tindak kriminal, kekerasan, bisnis illegal, penindasan, dan pembunuhan.',
        releaseYear: 1972,
        video: 'https://www.youtube.com/embed/UaVTIH8mujA?si=8wICdZKUOcRO19-t',
        genreId: 1
      },
      {
        title: 'Memories of Murder',
        image: 'https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        duration: '2h 12m',
        description: 'Film yang bercerita tentang kasus pembunuhan berantai di kota Hwaseong.',
        releaseYear: 2003,
        video: 'https://www.youtube.com/embed/0n_HQwQU8ls?si=4s2YgPYvKxxvwOyI',
        genreId: 6
      },
      {
        title: 'Toy Story 4',
        image: 'https://upload.wikimedia.org/wikipedia/id/4/4c/Toy_Story_4_poster.jpg',
        duration: '1h 40m',
        description: 'Film komedi pilihan keluarga terbaik',
        releaseYear: 2019,
        video: 'https://www.youtube.com/embed/wmiIUN-7qhE?si=q0hNFGf5wmzmdT2N',
        genreId: 2
      },
      {
        title: 'Coco',
        image: 'https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_.jpg',
        duration: '1h 45m',
        description: 'COCO bercerita tentang mimpi seorang anak bernama Miguel yang lahir di keluarga pembenci musik. Keluarga itu melarang permainan musik karena masa lalu pahit sang nenek. Namun, hal itu tak menyurutkan minat Miguel untuk jadi musisi. Sejak itu, Miguel telah dianggap sebagai anak yang menyimpan impian terlarang.',
        releaseYear: 2017,
        video: 'https://www.youtube.com/embed/Ga6RYejo6Hk?si=LTpiV3eBmKN-4LdD',
        genreId: 3
      },
      {
        title: 'Spirited Away',
        image: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 5m',
        description: 'Film garapan Studio Ghibli ini bercerita tentang seorang anak yang masuk ke dunia lain tanpa sengaja. Dia melihat dua orang tuanya berubah menjadi babi saat makan di tempat tersebut.',
        releaseYear: 2001,
        video: 'https://www.youtube.com/embed/ByXuk9QqQkk?si=djv2TP9LYEzccxgY',
        genreId: 7
      },
      {
        title: 'The Godfather',
        image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 55m',
        description: 'Film yang menceritakan tentang kehidupan mafia di masa lampau yang lekat dengan tindak kriminal, kekerasan, bisnis illegal, penindasan, dan pembunuhan.',
        releaseYear: 1972,
        video: 'https://www.youtube.com/embed/UaVTIH8mujA?si=8wICdZKUOcRO19-t',
        genreId: 1
      },
      {
        title: 'Memories of Murder',
        image: 'https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        duration: '2h 12m',
        description: 'Film yang bercerita tentang kasus pembunuhan berantai di kota Hwaseong.',
        releaseYear: 2003,
        video: 'https://www.youtube.com/embed/0n_HQwQU8ls?si=4s2YgPYvKxxvwOyI',
        genreId: 6
      },
      {
        title: 'Toy Story 4',
        image: 'https://upload.wikimedia.org/wikipedia/id/4/4c/Toy_Story_4_poster.jpg',
        duration: '1h 40m',
        description: 'Film komedi pilihan keluarga terbaik',
        releaseYear: 2019,
        video: 'https://www.youtube.com/embed/wmiIUN-7qhE?si=q0hNFGf5wmzmdT2N',
        genreId: 2
      },
      {
        title: 'Coco',
        image: 'https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_.jpg',
        duration: '1h 45m',
        description: 'COCO bercerita tentang mimpi seorang anak bernama Miguel yang lahir di keluarga pembenci musik. Keluarga itu melarang permainan musik karena masa lalu pahit sang nenek. Namun, hal itu tak menyurutkan minat Miguel untuk jadi musisi. Sejak itu, Miguel telah dianggap sebagai anak yang menyimpan impian terlarang.',
        releaseYear: 2017,
        video: 'https://www.youtube.com/embed/Ga6RYejo6Hk?si=LTpiV3eBmKN-4LdD',
        genreId: 3
      },
      {
        title: 'Spirited Away',
        image: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 5m',
        description: 'Film garapan Studio Ghibli ini bercerita tentang seorang anak yang masuk ke dunia lain tanpa sengaja. Dia melihat dua orang tuanya berubah menjadi babi saat makan di tempat tersebut.',
        releaseYear: 2001,
        video: 'https://www.youtube.com/embed/ByXuk9QqQkk?si=djv2TP9LYEzccxgY',
        genreId: 7
      },
      {
        title: 'The Godfather',
        image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 55m',
        description: 'Film yang menceritakan tentang kehidupan mafia di masa lampau yang lekat dengan tindak kriminal, kekerasan, bisnis illegal, penindasan, dan pembunuhan.',
        releaseYear: 1972,
        video: 'https://www.youtube.com/embed/UaVTIH8mujA?si=8wICdZKUOcRO19-t',
        genreId: 1
      },
      {
        title: 'Memories of Murder',
        image: 'https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        duration: '2h 12m',
        description: 'Film yang bercerita tentang kasus pembunuhan berantai di kota Hwaseong.',
        releaseYear: 2003,
        video: 'https://www.youtube.com/embed/0n_HQwQU8ls?si=4s2YgPYvKxxvwOyI',
        genreId: 6
      },
      {
        title: 'Toy Story 4',
        image: 'https://upload.wikimedia.org/wikipedia/id/4/4c/Toy_Story_4_poster.jpg',
        duration: '1h 40m',
        description: 'Film komedi pilihan keluarga terbaik',
        releaseYear: 2019,
        video: 'https://www.youtube.com/embed/wmiIUN-7qhE?si=q0hNFGf5wmzmdT2N',
        genreId: 2
      },
      {
        title: 'Coco',
        image: 'https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_.jpg',
        duration: '1h 45m',
        description: 'COCO bercerita tentang mimpi seorang anak bernama Miguel yang lahir di keluarga pembenci musik. Keluarga itu melarang permainan musik karena masa lalu pahit sang nenek. Namun, hal itu tak menyurutkan minat Miguel untuk jadi musisi. Sejak itu, Miguel telah dianggap sebagai anak yang menyimpan impian terlarang.',
        releaseYear: 2017,
        video: 'https://www.youtube.com/embed/Ga6RYejo6Hk?si=LTpiV3eBmKN-4LdD',
        genreId: 3
      },
      {
        title: 'Spirited Away',
        image: 'https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 5m',
        description: 'Film garapan Studio Ghibli ini bercerita tentang seorang anak yang masuk ke dunia lain tanpa sengaja. Dia melihat dua orang tuanya berubah menjadi babi saat makan di tempat tersebut.',
        releaseYear: 2001,
        video: 'https://www.youtube.com/embed/ByXuk9QqQkk?si=djv2TP9LYEzccxgY',
        genreId: 7
      },
      {
        title: 'The Godfather',
        image: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg',
        duration: '2h 55m',
        description: 'Film yang menceritakan tentang kehidupan mafia di masa lampau yang lekat dengan tindak kriminal, kekerasan, bisnis illegal, penindasan, dan pembunuhan.',
        releaseYear: 1972,
        video: 'https://www.youtube.com/embed/UaVTIH8mujA?si=8wICdZKUOcRO19-t',
        genreId: 1
      },
      {
        title: 'Memories of Murder',
        image: 'https://m.media-amazon.com/images/M/MV5BYmRjOWE5NmMtYTdkYS00ODFlLWJiMTMtYzE2NDZlZjlkZDQ0XkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg',
        duration: '2h 12m',
        description: 'Film yang bercerita tentang kasus pembunuhan berantai di kota Hwaseong.',
        releaseYear: 2003,
        video: 'https://www.youtube.com/embed/0n_HQwQU8ls?si=4s2YgPYvKxxvwOyI',
        genreId: 6
      },
      {
        title: 'Toy Story 4',
        image: 'https://upload.wikimedia.org/wikipedia/id/4/4c/Toy_Story_4_poster.jpg',
        duration: '1h 40m',
        description: 'Film komedi pilihan keluarga terbaik',
        releaseYear: 2019,
        video: 'https://www.youtube.com/embed/wmiIUN-7qhE?si=q0hNFGf5wmzmdT2N',
        genreId: 2
      },
      {
        title: 'Coco',
        image: 'https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_.jpg',
        duration: '1h 45m',
        description: 'COCO bercerita tentang mimpi seorang anak bernama Miguel yang lahir di keluarga pembenci musik. Keluarga itu melarang permainan musik karena masa lalu pahit sang nenek. Namun, hal itu tak menyurutkan minat Miguel untuk jadi musisi. Sejak itu, Miguel telah dianggap sebagai anak yang menyimpan impian terlarang.',
        releaseYear: 2017,
        video: 'https://www.youtube.com/embed/Ga6RYejo6Hk?si=LTpiV3eBmKN-4LdD',
        genreId: 3
      },
    ])
  }
}