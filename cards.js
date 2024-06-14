document.addEventListener("DOMContentLoaded", function () {
  let cardsInformations = [
    {
      id: 1,
      image: "./images/apartment/01/011.png",
      image1: "/images/apartment/01/012.png",
      image2: "/images/apartment/01/013.png",
      image3: "/images/apartment/01/014.png",
      image4: "/images/apartment/01/015.png",
      image5: "/images/apartment/01/016.png",
      buy: "Alış",
      place: "Bakı",
      prices: 365000,
      price: "365 000 AZN",
      categoria: "Yeni Tikili",
      field: "90 ㎡",
      extract: "Kupça var",
      floor: "17/9",
      room: "2 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/NJboWwRGvxa1pW8GA",
      address: "28. May. m/s yaxın VİP. Bina",
      description: "2 otaqlı,90 ㎡, 17/9 mərtəbə",
      aboutApartment: "Tamirden sona yasayis olmayib.",
      salerName: "Emin",
      phoneNumber: "055 555 55 55",
      dates: "04.11.2020",
      date: "11.04.2020",
    },
    {
      id: 2,
      image: "./images/apartment/02/021.png",
      image1: "/images/apartment/02/022.png",
      image2: "/images/apartment/02/023.png",
      image3: "/images/apartment/02/024.png",
      image4: "/images/apartment/02/025.png",
      image5: "/images/apartment/02/026.png",
      buy: "Alış",
      place: "Bakı",
      prices: 157300,
      price: "157 300 AZN",
      categoria: "Yeni Tikili",
      field: "71.5 ㎡",
      extract: "Kupça var",
      floor: "16/9",
      room: "2 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/nKvD5p6R7Dnc89PA8",
      address: "Heydər Əliyev prospekti 189",
      description: "2 otaqlı,71.5 ㎡, 16/9 mərtəbə",
      aboutApartment: "Təcili satılır",
      salerName: "Eldar",
      phoneNumber: "055 555 55 55",
      dates: "04.22.2020",
      date: "22.04.2020",
    },
    {
      id: 3,
      image: "./images/apartment/03/031.png",
      image1: "/images/apartment/03/032.png",
      image2: "/images/apartment/03/033.png",
      image3: "/images/apartment/03/034.png",
      image4: "/images/apartment/03/035.png",
      image5: "/images/apartment/03/036.png",
      buy: "Alış",
      place: "Bakı",
      prices: 550000,
      price: "550 000 AZN",
      categoria: "Yeni Tikili",
      field: "175 ㎡",
      extract: "Kupça var",
      floor: "19/14",
      room: "4 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/kCUiqfTbwZy6p7Dv6",
      address: "Elmlər Akademiyası",
      description: "4 otaqlı,175 ㎡, 19/14 mərtəbə",
      aboutApartment: "Mənzil tam Əşyalı satılır.",
      salerName: "Sahib",
      phoneNumber: "055 555 55 55",
      dates: "04.13.2020",
      date: "13.04.2020",
    },
    {
      id: 4,
      image: "./images/apartment/04/041.png",
      image1: "/images/apartment/04/042.png",
      image2: "/images/apartment/04/043.png",
      image3: "/images/apartment/04/044.png",
      image4: "/images/apartment/04/045.png",
      image5: "/images/apartment/04/046.png",
      buy: "Alış",
      place: "Bakı",
      prices: 480000,
      price: "480 000 AZN",
      categoria: "Yeni Tikili",
      field: "132 ㎡",
      extract: "Müqavilə",
      floor: "17/8",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/N8pJQTGZS2etmDXp8",
      address: "28. May m/s yanı",
      description: "3 otaqlı,132 ㎡, 17/8 mərtəbə",
      aboutApartment:
        "Mənzil super təmirli Dəniz Ponaramlı Skvaznoyndur. Mənzildə 2 s/q + çamaşırxana var.",
      salerName: "Sabir",
      phoneNumber: "055 555 55 55",
      dates: "03.30.2020",
      date: "30.03.2020",
    },
    {
      id: 5,
      image: "./images/apartment/05/051.png",
      image1: "/images/apartment/05/052.png",
      image2: "/images/apartment/05/053.png",
      image3: "/images/apartment/05/054.png",
      image4: "/images/apartment/05/055.png",
      image5: "/images/apartment/05/056.png",
      buy: "Alış",
      place: "Bakı",
      prices: 450000,
      price: "450 000 AZN",
      categoria: "Həyət evi",
      field: "380 ㎡",
      extract: "Kupça var",
      floor: "2",
      room: "6 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/rnkbsuFVyz473gps9",
      address: "Fatmayı qes. 12 SOT",
      description: "6 otaqlı,380 ㎡, 2 mərtəbə",
      aboutApartment:
        "Bağ evi şəxsi istfade üçün inşa edilib sənəd. Kupca həyətində Filterli aşma hovuz maqal parnoy coxlu sayda meyve dekorativ ağaclar var",
      salerName: "Akif",
      phoneNumber: "055 555 55 55",
      dates: "03.21.2020",
      date: "21.03.2020",
    },
    {
      id: 6,
      image: "./images/apartment/06/061.png",
      image1: "/images/apartment/06/062.png",
      image2: "/images/apartment/06/063.png",
      image3: "/images/apartment/06/064.png",
      image4: "/images/apartment/06/065.png",
      image5: "/images/apartment/06/066.png",
      buy: "Alış",
      place: "Bakı",
      prices: 440000,
      price: "440 000 AZN",
      categoria: "Həyət evi",
      field: "300 ㎡",
      extract: "Kupça var",
      floor: "2",
      room: "5 otaqlı və daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/wZeydshMMPyZ9dPx8",
      address: "Badmdar qes 2 Massiv 5. SOT",
      description: "2 otaqlı,300 ㎡, 2 mərtəbə",
      aboutApartment:
        "Villa da Təmir zamnı bahalı matrelardan istifadə edilib 6 otaq 5 Yataq 1 zal 3 s/q var Həyetində Filterli Hovuz 1 avto Qaraj ve.s",
      salerName: "Azad",
      phoneNumber: "055 555 55 55",
      dates: "04.11.2020",
      date: "11.04.2020",
    },
    {
      id: 7,
      image: "./images/apartment/07/071.png",
      image1: "/images/apartment/07/072.png",
      image2: "/images/apartment/07/073.png",
      image3: "/images/apartment/07/074.png",
      image4: "/images/apartment/07/075.png",
      image5: "/images/apartment/07/076.png",
      buy: "Alış",
      place: "Bakı",
      prices: 285000,
      price: "285 000 AZN",
      categoria: "Köhnə Tikili",
      field: "84 ㎡",
      extract: "Kupça var",
      floor: "18/7",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/wZeydshMMPyZ9dPx8",
      address: "Elmlər. Ak Qurtqaşınlı küç",
      description: "3 otaqlı,84 ㎡, 18/7 mərtəbə",
      aboutApartment: "Qiymət : 285.000 Azn (. Əşyasız)",
      salerName: "Xudaverdi",
      phoneNumber: "055 555 55 55",
      dates: "04.01.2020",
      date: "01.04.2020",
    },
    {
      id: 8,
      image: "./images/apartment/08/081.png",
      image1: "/images/apartment/08/082.png",
      image2: "/images/apartment/08/083.png",
      image3: "/images/apartment/08/084.png",
      image4: "/images/apartment/08/085.png",
      image5: "/images/apartment/08/086.png",
      buy: "Alış",
      place: "Bakı",
      prices: 382000,
      price: "382 000 AZN",
      categoria: "Yeni Tikili",
      field: "103 ㎡",
      extract: "Kupça var",
      floor: "27/25",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/wZeydshMMPyZ9dPx8",
      address: "Tblisi pr Grad Həyat ViP. Bina",
      description: "3 otaqlı,103 ㎡, 27/25 mərtəbə",
      aboutApartment: "Qiymət : 382.000 Azn (. Əşyasız)",
      salerName: "Elnur",
      phoneNumber: "055 555 55 55",
      dates: "04.17.2020",
      date: "17.04.2020",
    },
    {
      id: 9,
      image: "./images/apartment/09/091.png",
      image1: "/images/apartment/09/092.png",
      image2: "/images/apartment/09/093.png",
      image3: "/images/apartment/09/094.png",
      image4: "/images/apartment/09/095.png",
      image5: "/images/apartment/09/096.png",
      buy: "Alış",
      place: "Bakı",
      prices: 222000,
      price: "222 000 AZN",
      categoria: "Həyət evi",
      field: "400 ㎡",
      extract: "Kupça var",
      floor: "3",
      room: "5 otaqlı və daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/wZeydshMMPyZ9dPx8",
      address: "Tblisi pr Grad Həyat ViP. Bina",
      description: "7 otaqlı,400 ㎡, 3 mərtəbə",
      aboutApartment: "Qiymət : 222.000 Azn",
      salerName: "Nazim",
      phoneNumber: "055 555 55 55",
      dates: "04.12.2020",
      date: "12.04.2020",
    },
    {
      id: 10,
      image: "./images/apartment/10/101.png",
      image1: "/images/apartment/10/102.png",
      image2: "/images/apartment/10/103.png",
      image3: "/images/apartment/10/104.png",
      image4: "/images/apartment/10/105.png",
      image5: "/images/apartment/10/106.png",
      buy: "Alış",
      place: "Bakı",
      prices: 550000,
      price: "550 000 AZN",
      categoria: "Mənzil",
      field: "181 ㎡",
      extract: "Kupça var",
      floor: "16/4",
      room: "4 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/wZeydshMMPyZ9dPx8",
      address: "Xətai ray m/s. yaxın",
      description: "4 otaqlı,181 ㎡, 16/4 mərtəbə",
      aboutApartment: "Qiymət : 550.000 Azn",
      salerName: "Nadir",
      phoneNumber: "055 555 55 55",
      dates: "04.18.2020",
      date: "18.04.2020",
    },
    {
      id: 11,
      image: "./images/apartment/11/111.png",
      image1: "/images/apartment/11/112.png",
      image2: "/images/apartment/11/113.png",
      image3: "/images/apartment/11/114.png",
      image4: "/images/apartment/11/115.png",
      image5: "/images/apartment/11/116.png",
      buy: "Alış",
      place: "Bakı",
      prices: 450000,
      price: "450 000 AZN",
      categoria: "Mənzil",
      field: "126 ㎡",
      extract: "Müqavilə",
      floor: "19/15",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/2X88FACEpRaJ2Vxr8",
      address: "Nərimanov ray MetroPark",
      description: "3 otaqlı,126 ㎡, 19/15 mərtəbə",
      aboutApartment: "Qiymət : 450.000 Azn",
      salerName: "Nadim",
      phoneNumber: "055 555 55 55",
      dates: "04.02.2020",
      date: "02.04.2020",
    },
    {
      id: 12,
      image: "./images/apartment/12/121.png",
      image1: "/images/apartment/12/122.png",
      image2: "/images/apartment/12/123.png",
      image3: "/images/apartment/12/124.png",
      image4: "/images/apartment/12/125.png",
      image5: "/images/apartment/12/126.png",
      buy: "Alış",
      place: "Bakı",
      prices: 430000,
      price: "430 000 AZN",
      categoria: "Mənzil",
      field: "145 ㎡",
      extract: "Müqavilə",
      floor: "19/4",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/ukLQpJwb7doKVMnk8",
      address: "Elmlər. Ak Mirvari. Park",
      description: "3 otaqlı,145 ㎡, 19/4 mərtəbə",
      aboutApartment: "Qiymət : 430.000 Azn",
      salerName: "Afiq",
      phoneNumber: "055 555 55 55",
      dates: "04.28.2020",
      date: "28.04.2020",
    },
    {
      id: 13,
      image: "./images/apartment/13/131.png",
      image1: "/images/apartment/13/132.png",
      image2: "/images/apartment/13/133.png",
      image3: "/images/apartment/13/134.png",
      image4: "/images/apartment/13/135.png",
      image5: "/images/apartment/13/136.png",
      buy: "Alış",
      place: "Bakı",
      prices: 415000,
      price: "415 000 AZN",
      categoria: "Ofis",
      field: "300 ㎡",
      extract: "Kupça var",
      floor: "18/17",
      room: "5 otaqlı və daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/ov2NhnQRs6gvsJay5",
      address: "Elmlər. Ak Renesas Palace",
      description: "5 otaqlı,300 ㎡, 18/17 mərtəbə",
      aboutApartment: "Qiymət : 415.000 Azn",
      salerName: "Qorxmaz",
      phoneNumber: "055 555 55 55",
      dates: "04.10.2020",
      date: "10.04.2020",
    },
    {
      id: 14,
      image: "./images/apartment/14/141.png",
      image1: "/images/apartment/14/142.png",
      image2: "/images/apartment/14/143.png",
      image3: "/images/apartment/14/144.png",
      image4: "/images/apartment/14/145.png",
      image5: "/images/apartment/14/146.png",
      buy: "Alış",
      place: "Bakı",
      prices: 620000,
      price: "620 000 AZN",
      categoria: "Həyət evi",
      field: "650 ㎡",
      extract: "Kupça var",
      floor: "3",
      room: "5 otaqlı daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/5Bv2tXzQLj14UNwRA",
      address: "Bakıxanov qes 7. SOT",
      description: "6 otaqlı,650 ㎡, 3 mərtəbə",
      aboutApartment: "Qiymət : 620.000 Azn",
      salerName: "Rafiq",
      phoneNumber: "055 555 55 55",
      dates: "02.22.2020",
      date: "22.02.2020",
    },
    {
      id: 15,
      image: "./images/apartment/15/151.png",
      image1: "/images/apartment/15/152.png",
      image2: "/images/apartment/15/153.png",
      image3: "/images/apartment/15/154.png",
      image4: "/images/apartment/15/155.png",
      image5: "/images/apartment/15/156.png",
      buy: "Alış",
      place: "Bakı",
      prices: 920000,
      price: "920 000 AZN",
      categoria: "Həyət evi",
      field: "650 ㎡",
      extract: "Kupça var",
      floor: "2",
      room: "5 otaqlı və daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/3pFFRfXdJh2tXhjt6",
      address: "Qarayev m/s yaxın 7. SOT",
      description: "7 otaqlı,650 ㎡, 2 mərtəbə",
      aboutApartment: "Qiymət : 920.000 Azn",
      salerName: "Rahil",
      phoneNumber: "055 555 55 55",
      dates: "02.21.2020",
      date: "21.02.2020",
    },
    {
      id: 16,
      image: "./images/apartment/16/161.png",
      image1: "/images/apartment/16/162.png",
      image2: "/images/apartment/16/163.png",
      image3: "/images/apartment/16/164.png",
      image4: "/images/apartment/16/165.png",
      image5: "/images/apartment/16/166.png",
      buy: "Alış",
      place: "Bakı",
      prices: 380000,
      price: "380 000 AZN",
      categoria: "Ofis",
      field: "138 ㎡",
      extract: "Kupça var",
      floor: "16/15",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/3pFFRfXdJh2tXhjt6",
      address: "Qarayev m/s yaxın 7. SOT",
      description: "3 otaqlı,138 ㎡, 16/15 mərtəbə",
      aboutApartment:
        "Qeyd : Mənzildə Qaz, su, işıq daimidir, istilik sistemi Kombidir",
      salerName: "Rahib",
      phoneNumber: "055 555 55 55",
      dates: "04.13.2020",
      date: "13.04.2020",
    },
    {
      id: 17,
      image: "./images/apartment/17/171.png",
      image1: "/images/apartment/17/172.png",
      image2: "/images/apartment/17/173.png",
      buy: "Alış",
      place: "Bakı",
      prices: 48000,
      price: "48 000 AZN",
      categoria: "Qaraj",
      field: "28 ㎡",
      extract: "Kupça var",
      floor: "1",
      room: "1 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/swGCQ9Si2ipnJZVu6",
      address: "Xətai rayonu",
      description: "28 ㎡, 1 mərtəbə",
      aboutApartment:
        "Park Azure, Azure Business Center, Xətai m. istiqamətində yaşayan və çAlışan sakinlər üçün çox əlverişlidir.",
      salerName: "Zakir",
      phoneNumber: "055 555 55 55",
      dates: "04.20.2020",
      date: "20.04.2020",
    },
    {
      id: 18,
      image: "./images/apartment/18/181.png",
      image1: "/images/apartment/18/182.png",
      buy: "Alış",
      place: "Bakı",
      prices: 4500,
      price: "4500 AZN",
      categoria: "Qaraj",
      field: "15 ㎡",
      extract: "Kupça yoxdur",
      floor: "1",
      room: "1 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/fxPrJRU5YYLziw1UA",
      address: "Qaradağ rayon Sahil qəsəbəsi",
      description: "15 ㎡, 1 mərtəbə",
      aboutApartment: "Cip masini yerlesir icine",
      salerName: "Zakir",
      phoneNumber: "055 555 55 55",
      dates: "04.01.2020",
      date: "01.04.2020",
    },
    {
      id: 19,
      image: "./images/apartment/19/191.png",
      image1: "/images/apartment/19/192.png",
      image2: "/images/apartment/19/193.png",
      buy: "Alış",
      place: "Bakı",
      prices: 4000,
      price: "4000 AZN",
      categoria: "Torpaq",
      field: "10 sot",
      extract: "Çıxarışı var",
      floor: "0",
      room: "0",
      repair: "-",
      location: "https://maps.app.goo.gl/ecBGnNGzoEXKcZtf6",
      address: "Saray qəsəbəsi",
      description: "10 sot, çıxarışlı",
      aboutApartment:
        "Bakı şəhəri, Abşeron rayonu, Saray qəsəbəsində 3 nömrəli məktəbin yanında və yeni Azpetrola yaxın məsafədə, iki ayrı-ayrı küçədən girişi olan 2 sotdan başlayaraq istənilən sotda torpaq sahələri satılır. Real alıcıya endirim olacaq. Qaz, işıq, su və kanalizasiya sistemi var. Qiymət: 1sot = 4.000 Azn",
      salerName: "Elmar",
      phoneNumber: "055 555 55 55",
      dates: "03.03.2020",
      date: "03.03.2020",
    },
    {
      id: 20,
      image: "./images/apartment/20/201.png",
      image1: "/images/apartment/20/202.png",
      image2: "/images/apartment/20/203.png",
      buy: "Alış",
      place: "Bakı",
      prices: 4000,
      price: "4000 AZN",
      categoria: "Torpaq",
      field: "12 sot",
      extract: "Çıxarışı var",
      floor: "0",
      room: "0",
      repair: "-",
      location: "https://maps.app.goo.gl/ecBGnNGzoEXKcZtf6",
      address: "Masazır qəsəbəsi",
      description: "12 sot, çıxarışlı",
      aboutApartment:
        "Abşeron rayonu, Masazır qəsəbəsində 569 və 535 nömrəli avtobus dayanacaqlarına 600-800 metr, yeni Rahat marketə 1 km məsafədə yerləşən 2 sotdan başlayaraq istənilən sotda torpaq sahələri satılır.Qiyməti: 1sot = 4.000 Azn",
      salerName: "Elşən",
      phoneNumber: "055 555 55 55",
      dates: "02.02.2020",
      date: "02.02.2020",
    },
    {
      id: 21,
      image: "./images/apartment/21/211.png",
      image1: "/images/apartment/21/212.png",
      image2: "/images/apartment/21/213.png",
      image3: "/images/apartment/21/214.png",
      image4: "/images/apartment/21/215.png",
      image5: "/images/apartment/21/216.png",
      buy: "Alış",
      place: "Bakı",
      prices: 13000,
      price: "13000 AZN",
      categoria: "Torpaq",
      field: "4 sot",
      extract: "Çıxarışı var",
      floor: "0",
      room: "0",
      repair: "-",
      location: "https://maps.app.goo.gl/B5xWmYSY86A6aLSE8",
      address: "Abşeron rayonu, Nübar qəs",
      description: "4 sot, çıxarışlı",
      aboutApartment:
        "Magistral yola yaxın məsafədə, Hekeri restoranı ilə üzbəüz yerləşən 4 sot torpağın içərisində yarı tikilmiş 2 metr hündürlüyündə 3 otaq və 1 mətbəxdən ibarət olan kürsülü ev satılır. həyətində 1000-ə yaxın daş var. Bütün komunikasiya xidmətləri yanından keçir.",
      salerName: "Elşad",
      phoneNumber: "055 555 55 55",
      dates: "01.21.2020",
      date: "21.01.2020",
    },
    {
      id: 22,
      image: "./images/apartment/22/221.png",
      image1: "/images/apartment/22/222.png",
      image2: "/images/apartment/22/223.png",
      image3: "/images/apartment/22/224.png",
      image4: "/images/apartment/22/225.png",
      image5: "/images/apartment/22/226.png",
      buy: "Alış",
      place: "İsmayıllı",
      prices: 1200,
      price: "1200 AZN",
      categoria: "Torpaq",
      field: "15 sot",
      extract: "Çıxarışı var",
      floor: "0",
      room: "0",
      repair: "-",
      location: "https://maps.app.goo.gl/B5xWmYSY86A6aLSE8",
      address: "İsmayıllı rayonu, Göytəpə kəndi",
      description: "15 sot, çıxarışlı",
      aboutApartment:
        "İsmayıllı rayonu, Göytəpə kəndində İsmayıllı rayon mərkəzinə və İvanovka qəsəbəsinə yaxın məsafədə yerləşən 15 sot torpaq sahəsi satılır. Yolu asfaltdır, qaz, işıq, su və meyvə ağacları var. Bölüb satmaq mümkündür.Qiymət: 1sot = 1200 Azn",
      salerName: "Samir",
      phoneNumber: "055 555 55 55",
      dates: "01.29.2020",
      date: "29.01.2020",
    },
    {
      id: 23,
      image: "./images/apartment/23/231.png",
      image1: "/images/apartment/23/232.png",
      image2: "/images/apartment/23/233.png",
      image3: "/images/apartment/23/234.png",
      image4: "/images/apartment/23/235.png",
      image5: "/images/apartment/23/236.png",
      buy: "Alış",
      place: "Beyləqan",
      prices: 50000,
      price: "50 000 AZN",
      categoria: "Torpaq",
      field: "10 sot",
      extract: "Çıxarışı var",
      floor: "2",
      room: "2 otaqlı",
      repair: "Təmirsiz",
      location: "https://maps.app.goo.gl/B5xWmYSY86A6aLSE8",
      address: "Beyləqan rayonu,Dünyamallar k",
      description: "10 sot, çıxarışlı",
      aboutApartment:
        "Təcili satıldığı üçün qiymətdə 10 min endirim edildi❗Asfaltlı yoldan ikinci sırada yerləşən 10 sot torpağın içərisində tikilmiş 2 mərtəbəli təmirsiz həyət evi satılır. Evin sahəsi 350 kv.metrdir, yerdən 5 daş hündürlükdə qoşa daşla tikilib, arakəsmə monalitdir, damı vurulub və pəncərələr qoyulub. Həyətində 1 otaqlı təmirli ev və sanitar qovşağı var. Hər növ meyvə ağacları var. Bu ərazidə torpağın sotu 2-5 min arasıdır. Təcili olduğu üçün bu qiymətə satılır.Sənəd: Çıxarış (Kupça)Qiymət: 50.000 Azn. Real alıcıya endirim olacaq .",
      salerName: "Sənan",
      phoneNumber: "055 555 55 55",
      dates: "03.29.2020",
      date: "29.03.2020",
    },
    {
      id: 24,
      image: "./images/apartment/24/241.png",
      image1: "/images/apartment/24/242.png",
      image2: "/images/apartment/24/243.png",
      image3: "/images/apartment/24/244.png",
      image4: "/images/apartment/24/245.png",
      image5: "/images/apartment/24/246.png",
      buy: "Alış",
      place: "Şamaxı",
      prices: 24000,
      price: "24 000 AZN",
      categoria: "Torpaq",
      field: "12 sot",
      extract: "Bələdiyyə",
      floor: "0",
      room: "0",
      repair: "-",
      location: "https://maps.app.goo.gl/j3eJaX3iaLArUn3s9",
      address: "Şamaxı rayonu",
      description: "12 sot, çıxarışlı",
      aboutApartment:
        "Şamaxı rayonu, Qaleybuğurt yolunda 12 sot torpaq sahəsi satılır.",
      salerName: "Taleh",
      phoneNumber: "055 555 55 55",
      dates: "03.27.2020",
      date: "27.03.2020",
    },
    {
      id: 25,
      image: "./images/apartment/25/251.png",
      image1: "/images/apartment/25/252.png",
      image2: "/images/apartment/25/253.png",
      image3: "/images/apartment/25/254.png",
      image4: "/images/apartment/25/255.png",
      image5: "/images/apartment/25/256.png",
      buy: "Alış",
      place: "Abşeron",
      prices: 130000,
      price: "130 000 AZN",
      categoria: "Obyekt",
      field: "25 ㎡",
      extract: "Kupça var",
      floor: "1",
      room: "1 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/j3eJaX3iaLArUn3s9",
      address: "Abşeron rayonu",
      description: "1 otaqlı,25 ㎡, 9/1 mərtəbə",
      aboutApartment:
        "Qiymət düşdü təcili satılır. Hal hazırda obyekt bazarında bu qiymətə belə bir obyekt yoxdur satışda. Qara Qarayev prospektində 8 km bazarın yanında 9 mərtəbə bina altı 25 kv obyekt satılır. Uzun illərdir icarədədir. Sənəd qeyri yaşayış çıxarışdır.",
      salerName: "Talıb",
      phoneNumber: "055 555 55 55",
      dates: "04.22.2020",
      date: "22.04.2020",
    },
    {
      id: 26,
      image: "./images/apartment/26/261.png",
      image1: "/images/apartment/26/262.png",
      image2: "/images/apartment/26/263.png",
      image3: "/images/apartment/26/264.png",
      image4: "/images/apartment/26/265.png",
      buy: "Alış",
      place: "Ağcabədi",
      prices: 40000,
      price: "40 000 AZN",
      categoria: "Obyekt",
      field: "41 ㎡",
      extract: "Kupça var",
      floor: "1",
      room: "1 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/9ZEfMMEqZbngRZT98",
      address: "Ağcabədi rayonu",
      description: "1 otaqlı,41 ㎡, 5/1 mərtəbə",
      aboutApartment: "41 kv obyekt satılır. Sənəd qeyri yaşayış çıxarışdır.",
      salerName: "Yaqub",
      phoneNumber: "055 555 55 55",
      dates: "03.21.2020",
      date: "21.03.2020",
    },
    {
      id: 27,
      image: "./images/apartment/27/271.png",
      image1: "/images/apartment/27/272.png",
      image2: "/images/apartment/27/273.png",
      image3: "/images/apartment/27/274.png",
      image4: "/images/apartment/27/275.png",
      image5: "/images/apartment/27/276.png",
      buy: "Alış",
      place: "Bərdə",
      prices: 50000,
      price: "50 000 AZN",
      categoria: "Obyekt",
      field: "300 ㎡",
      extract: "Kupça var",
      floor: "1",
      room: "5 otaqlı və daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/9CTwtR3wjseZ2dhe7",
      address: "Bərdə rayonu",
      description: "5 otaqlı,300 ㎡, 9/1 mərtəbə",
      aboutApartment: "300 kv Kupcalı obyekt satılır.",
      salerName: "Yavər",
      phoneNumber: "055 555 55 55",
      dates: "02.19.2020",
      date: "19.02.2020",
    },
    {
      id: 28,
      image: "./images/apartment/28/281.png",
      image1: "/images/apartment/28/282.png",
      image2: "/images/apartment/28/283.png",
      image3: "/images/apartment/28/284.png",
      image4: "/images/apartment/28/285.png",
      image5: "/images/apartment/28/286.png",
      buy: "Alış",
      place: "Cəlilabad",
      prices: 100000,
      price: "100 000 AZN",
      categoria: "Yeni Tikili",
      field: "90 ㎡",
      extract: "Kupça var",
      floor: "17/9",
      room: "2 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/nt8yJ6C7uTo9aX7q8",
      address: "Cəlilabad rayonu",
      description: "2 otaqlı,90 ㎡, 17/9 mərtəbə",
      aboutApartment: "Təmirdən sonra yaşayış olmayıb.",
      salerName: "Salman",
      phoneNumber: "055 555 55 55",
      dates: "03.25.2020",
      date: "25.03.2020",
    },
    {
      id: 29,
      image: "./images/apartment/29/291.png",
      image1: "/images/apartment/29/292.png",
      image2: "/images/apartment/29/293.png",
      image3: "/images/apartment/29/294.png",
      image4: "/images/apartment/29/295.png",
      image5: "/images/apartment/29/296.png",
      buy: "Alış",
      place: "Gədəbəy",
      prices: 130000,
      price: "130 000 AZN",
      categoria: "Həyət evi",
      field: "190 ㎡",
      extract: "Kupça var",
      floor: "12/4",
      room: "5 otaqlı və daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/Z9kxhxYrCmFALujf7",
      address: "Gədəbəy rayonu",
      description: "5 otaqlı,190 ㎡, 12/4 mərtəbə",
      aboutApartment: "Təmirdən sonra yaşayış olmayıb.",
      salerName: "Nihat",
      phoneNumber: "055 555 55 55",
      dates: "04.26.2020",
      date: "26.04.2020",
    },
    {
      id: 30,
      image: "./images/apartment/30/301.png",
      image1: "/images/apartment/30/302.png",
      image2: "/images/apartment/30/303.png",
      image3: "/images/apartment/30/304.png",
      image4: "/images/apartment/30/305.png",
      image5: "/images/apartment/30/306.png",
      buy: "Alış",
      place: "Gəncə",
      prices: 170000,
      price: "170 000 AZN",
      categoria: "Köhnə Tikili",
      field: "205 ㎡",
      extract: "Kupça var",
      floor: "11/4",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/Z9kxhxYrCmFALujf7",
      address: "Gəncə rayonu",
      description: "3 otaqlı,205 ㎡, 11/4 mərtəbə",
      aboutApartment:
        "Əşyalar qiymətə daxildir. Mənzilin 3 sanuzeli, 1. eyvanı var.",
      salerName: "Rasim",
      phoneNumber: "055 555 55 55",
      dates: "03.11.2020",
      date: "11.03.2020",
    },
    {
      id: 31,
      image: "./images/apartment/31/311.png",
      image1: "/images/apartment/31/312.png",
      image2: "/images/apartment/31/313.png",
      image3: "/images/apartment/31/314.png",
      image4: "/images/apartment/31/315.png",
      image5: "/images/apartment/31/316.png",
      buy: "Alış",
      place: "Xaçmaz",
      prices: 100000,
      price: "100 000 AZN",
      categoria: "Yeni Tikili",
      field: "140 ㎡",
      extract: "Kupça var",
      floor: "9/3",
      room: "4 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/Z9kxhxYrCmFALujf7",
      address: "Xaçmaz rayonu",
      description: "4 otaqlı,140 ㎡, 9/3 mərtəbə",
      aboutApartment:
        "Mənzildə Qaz, su, işıq daimidir, istilik sistemi Kombidir.",
      salerName: "Rafael",
      phoneNumber: "055 555 55 55",
      dates: "02.19.2020",
      date: "19.02.2020",
      agencied: true,
      agency: "Agentlik",
    },
    {
      id: 32,
      image: "./images/apartment/32/321.png",
      image1: "/images/apartment/32/322.png",
      image2: "/images/apartment/32/323.png",
      image3: "/images/apartment/32/324.png",
      image4: "/images/apartment/32/325.png",
      image5: "/images/apartment/32/326.png",
      buy: "Alış",
      place: "Lerik",
      prices: 132000,
      price: "132 000 AZN",
      categoria: "Həyət evi",
      field: "240 ㎡",
      extract: "Kupça var",
      floor: "2",
      room: "5 otaqlı və daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/Z9kxhxYrCmFALujf7",
      address: "Lerik rayonu",
      description: "5 otaqlı,240 ㎡, 2 mərtəbə",
      aboutApartment: "istilik sistemi Kombidir.",
      salerName: "Feqan",
      phoneNumber: "055 555 55 55",
      dates: "01.22.2020",
      date: "22.01.2020",
      agencied: true,
      agency: "Agentlik",
    },
    {
      id: 33,
      image: "./images/apartment/33/331.png",
      image1: "/images/apartment/33/332.png",
      image2: "/images/apartment/33/333.png",
      image3: "/images/apartment/33/334.png",
      image4: "/images/apartment/33/335.png",
      image5: "/images/apartment/33/336.png",
      buy: "Alış",
      place: "Lənkəran",
      prices: 98000,
      price: "98 000 AZN",
      categoria: "Yeni Tikili",
      field: "100 ㎡",
      extract: "Kupça var",
      floor: "9/2",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/Z9kxhxYrCmFALujf7",
      address: "Lənkəran rayonu",
      description: "3 otaqlı,100 ㎡, 9/2 mərtəbə",
      aboutApartment:
        "Mənzil super təmirli və əşyalıdır mənzildə 3 s/q ( qordirob və yelcəkəndir )",
      salerName: "Qabil",
      phoneNumber: "055 555 55 55",
      dates: "04.27.2020",
      date: "27.04.2020",
      agencied: true,
      agency: "Agentlik",
    },
    {
      id: 34,
      image: "./images/apartment/34/341.png",
      image1: "/images/apartment/34/342.png",
      image2: "/images/apartment/34/343.png",
      image3: "/images/apartment/34/344.png",
      image4: "/images/apartment/34/345.png",
      image5: "/images/apartment/34/346.png",
      buy: "Alış",
      place: "Naxçıvan",
      prices: 111000,
      price: "111 000 AZN",
      categoria: "Yeni Tikili",
      field: "120 ㎡",
      extract: "Kupça var",
      floor: "11/5",
      room: "4 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/Z9kxhxYrCmFALujf7",
      address: "Naxçıvan MR",
      description: "4 otaqlı,120 ㎡, 11/2 mərtəbə",
      aboutApartment: "Əşyalar qiymətə daxildir.",
      salerName: "Ruslan",
      phoneNumber: "055 555 55 55",
      dates: "02.04.2020",
      date: "04.02.2020",
      agencied: true,
      agency: "Agentlik",
    },
    {
      id: 35,
      image: "./images/apartment/35/351.png",
      image1: "/images/apartment/35/352.png",
      image2: "/images/apartment/35/353.png",
      image3: "/images/apartment/35/354.png",
      image4: "/images/apartment/35/355.png",
      image5: "/images/apartment/35/356.png",
      buy: "Alış",
      place: "Bakı",
      prices: 349000,
      price: "349 000 AZN",
      categoria: "Həyət evi",
      field: "300 ㎡",
      extract: "Kupça var",
      floor: "2",
      room: "5 otaqlı və daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/Z9kxhxYrCmFALujf7",
      address: "Nərimanov rayonu",
      description: "5 otaqlı,300 ㎡, 2 mərtəbə",
      aboutApartment: "349.000. Azn. Əşyalı",
      salerName: "Akim",
      phoneNumber: "055 555 55 55",
      dates: "11.05.2020",
      date: "05.11.2020",
      agencied: true,
      agency: "Agentlik",
    },
    {
      id: 36,
      image: "./images/apartment/36/361.png",
      image1: "/images/apartment/36/362.png",
      image2: "/images/apartment/36/363.png",
      image3: "/images/apartment/36/364.png",
      image4: "/images/apartment/36/365.png",
      image5: "/images/apartment/36/366.png",
      buy: "Alış",
      place: "Bakı",
      prices: 310000,
      price: "310 000 AZN",
      categoria: "Yeni Tikili",
      field: "140 ㎡",
      extract: "Kupça var",
      floor: "17/7",
      room: "5 otaqlı və daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/gqVGKLvbPgAoo1pE8",
      address: "8 Noyabr Metrosunun düz çıxışı",
      description: "5 otaqlı,140 ㎡, 17/7 mərtəbə",
      aboutApartment: "310.000. Azn. Əşyalı",
      salerName: "Abbas",
      phoneNumber: "055 555 55 55",
      dates: "01.05.2020",
      date: "05.01.2020",
      agencied: true,
      agency: "Agentlik",
    },
    {
      id: 37,
      image: "./images/apartment/37/371.png",
      image1: "/images/apartment/37/372.png",
      image2: "/images/apartment/37/373.png",
      image3: "/images/apartment/37/374.png",
      image4: "/images/apartment/37/375.png",
      image5: "/images/apartment/37/376.png",
      buy: "Alış",
      place: "Bakı",
      prices: 600000,
      price: "600 000 AZN",
      categoria: "Yeni Tikili",
      field: "180 ㎡",
      extract: "Kupça var",
      floor: "17/6",
      room: "4 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/dFbXR9s8Y3zN6KYy6",
      address: "Azadlıq pr Nəsimi bazarın yanı",
      description: "4 otaqlı,180 ㎡, 17/6 mərtəbə",
      aboutApartment: "600.000. Azn. Əşyalı",
      salerName: "Elnar",
      phoneNumber: "055 555 55 55",
      dates: "01.04.2020",
      date: "04.01.2020",
      agencied: true,
      agency: "Agentlik",
    },
  ];
  cardsInformations.sort((a, b) => {
    let d1 = new Date(a.dates);
    let d2 = new Date(b.dates);
    return d2 - d1;
  });
  const rentCar = [
    {
      id: 1,
      image: "./images/apartment/rent1/rent011.png",
      image1: "/images/apartment/rent1/rent012.png",
      image2: "/images/apartment/rent1/rent013.png",
      image3: "/images/apartment/rent1/rent014.png",
      image4: "/images/apartment/rent1/rent015.png",
      image5: "/images/apartment/rent1/rent016.png",
      buy: "kirayə",
      place: "Bakı",
      prices: 500,
      price: "500 AZN/aylıq",
      categoria: "Yeni Tikili",
      field: "100 ㎡",
      extract: "Kupça var",
      floor: "12/5",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/SzJ5Qo6HHavzUu95A",
      address: "Nərimanov ray m/s yaxın",
      description: "3 otaqlı,100 ㎡, 12/5 mərtəbə",
      aboutApartment: "aylıq 500 Azn. Əşyalı",
      salerName: "Sardar",
      phoneNumber: "055 555 55 55",
      dates: "05.08.2020",
      date: "08.05.2020",
      rent: true,
      rentCar: "Kirayə",
    },
    {
      id: 2,
      image: "./images/apartment/rent2/rent021.png",
      image1: "/images/apartment/rent2/rent022.png",
      image2: "/images/apartment/rent2/rent023.png",
      image3: "/images/apartment/rent2/rent024.png",
      image4: "/images/apartment/rent2/rent025.png",
      image5: "/images/apartment/rent2/rent026.png",
      buy: "kirayə",
      place: "Bakı",
      prices: 1500,
      price: "1500 AZN/aylıq",
      categoria: "Həyət evi",
      field: "300 ㎡",
      extract: "Kupça var",
      floor: "2",
      room: "5 otaqlı və daha çox",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/gsvxwcrxa4b8wixj9",
      address: "Mərdəkan Qəsəbəsi Əncirlik",
      description: "7 otaqlı,300 ㎡, 2 mərtəbə",
      aboutApartment: "aylıq 1500 Azn. Əşyalı",
      salerName: "Kamil",
      phoneNumber: "055 555 55 55",
      dates: "04.12.2020",
      date: "12.04.2020",
      rent: true,
      rentCar: "Kirayə",
    },
    {
      id: 3,
      image: "./images/apartment/rent3/rent031.png",
      image1: "/images/apartment/rent3/rent032.png",
      image2: "/images/apartment/rent3/rent033.png",
      image3: "/images/apartment/rent3/rent034.png",
      image4: "/images/apartment/rent3/rent035.png",
      image5: "/images/apartment/rent3/rent036.png",
      buy: "kirayə",
      place: "Bakı",
      prices: 700,
      price: "700 AZN/aylıq",
      categoria: "Yeni Tikili",
      field: "100 ㎡",
      extract: "Kupça var",
      floor: "12/8",
      room: "2 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/gsvxwcrxa4b8wixj9",
      address: "Mərdəkan Qoşa /Qala res yanı",
      description: "2 otaqlı,100 ㎡, 12/8 mərtəbə",
      aboutApartment: "aylıq 700 Azn. Əşyalı",
      salerName: "Nicat",
      phoneNumber: "055 555 55 55",
      dates: "04.22.2020",
      date: "22.04.2020",
      rent: true,
      rentCar: "Kirayə",
    },
    {
      id: 4,
      image: "./images/apartment/rent4/rent041.png",
      image1: "/images/apartment/rent4/rent042.png",
      image2: "/images/apartment/rent4/rent043.png",
      image3: "/images/apartment/rent4/rent044.png",
      image4: "/images/apartment/rent4/rent045.png",
      image5: "/images/apartment/rent4/rent046.png",
      buy: "kirayə",
      place: "Bakı",
      prices: 550,
      price: "550 AZN/aylıq",
      categoria: "Köhnə Tikili",
      field: "90 ㎡",
      extract: "Kupça var",
      floor: "9/3",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/h3qpE1aW16VEQswJ8",
      address: "İnşaatçılar m/s. üstü",
      description: "3 otaqlı,90 ㎡, 9/3 mərtəbə",
      aboutApartment: "aylıq 550 Azn. Əşyalı",
      salerName: "Yusif",
      phoneNumber: "055 555 55 55",
      dates: "02.28.2020",
      date: "28.02.2020",
      rent: true,
      rentCar: "Kirayə",
    },
    {
      id: 5,
      image: "./images/apartment/rent5/rent051.png",
      image1: "/images/apartment/rent5/rent052.png",
      image2: "/images/apartment/rent5/rent053.png",
      image3: "/images/apartment/rent5/rent054.png",
      image4: "/images/apartment/rent5/rent055.png",
      image5: "/images/apartment/rent5/rent056.png",
      buy: "kirayə",
      place: "Bakı",
      prices: 750,
      price: "750 AZN/aylıq",
      categoria: "Mənzil",
      field: "110 ㎡",
      extract: "Kupça var",
      floor: "12/5",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/h3qpE1aW16VEQswJ8",
      address: "Nərimanov ray Təbriz küç",
      description: "3 otaqlı,110 ㎡, 12/5 mərtəbə",
      aboutApartment: "aylıq 750 Azn. Əşyalı",
      salerName: "Orxan",
      phoneNumber: "055 555 55 55",
      dates: "02.28.2020",
      date: "28.02.2020",
      rent: true,
      rentCar: "Kirayə",
    },
    {
      id: 6,
      image: "./images/apartment/rent6/rent061.png",
      image1: "/images/apartment/rent6/rent062.png",
      image2: "/images/apartment/rent6/rent063.png",
      image3: "/images/apartment/rent6/rent064.png",
      image4: "/images/apartment/rent6/rent065.png",
      image5: "/images/apartment/rent6/rent066.png",
      buy: "kirayə",
      place: "Bakı",
      prices: 620,
      price: "620 AZN/aylıq",
      categoria: "Yeni Tikili",
      field: "120 ㎡",
      extract: "Kupça var",
      floor: "18/11",
      room: "4 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/h3qpE1aW16VEQswJ8",
      address: "Azadlıq pr. 28. May m/s yaxın",
      description: "4 otaqlı,120 ㎡, 18/11 mərtəbə",
      aboutApartment: "aylıq 620 Azn. Əşyalı",
      salerName: "Məhəmməd",
      phoneNumber: "055 555 55 55",
      dates: "03.17.2020",
      date: "17.03.2020",
      rent: true,
      rentCar: "Kirayə",
    },
    {
      id: 7,
      image: "./images/apartment/rent7/rent071.png",
      image1: "/images/apartment/rent7/rent072.png",
      image2: "/images/apartment/rent7/rent073.png",
      image3: "/images/apartment/rent7/rent074.png",
      image4: "/images/apartment/rent7/rent075.png",
      image5: "/images/apartment/rent7/rent076.png",
      buy: "kirayə",
      place: "Bakı",
      prices: 700,
      price: "700 AZN/aylıq",
      categoria: "Həyət evi",
      field: "140 ㎡",
      extract: "Kupça var",
      floor: "2",
      room: "3 otaqlı",
      repair: "Təmirli",
      location: "https://maps.app.goo.gl/h3qpE1aW16VEQswJ8",
      address: "Mərdəkan qəsəbəsi",
      description: "3 otaqlı,140 ㎡, 2 mərtəbə",
      aboutApartment: "aylıq 700 Azn. Əşyalı",
      salerName: "Əhməd",
      phoneNumber: "055 555 55 55",
      dates: "05.10.2020",
      date: "10.05.2020",
      rent: true,
      rentCar: "Kirayə",
    },
  ];

  rentCar.sort((a, b) => {
    let d1 = new Date(a.dates);
    let d2 = new Date(b.dates);
    return d2 - d1;
  });

  // ------------------------cards--------------------
  const cardsElement = document.querySelector(".cards-element");
  const paginationControls = document.getElementById("pagination-controls");

  let isCardClicked = false;
  let isCrashedCardClicked = false;
  let isRentCardClicked = false;
  const recordsPerPage = 20;
  const numberOfPages = Math.ceil(cardsInformations.length / recordsPerPage);

  const currentDate = new Date();

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function renderCards(page) {
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const itemsToShow = cardsInformations.slice(startIndex, endIndex);

    cardsElement.innerHTML = "";

    if (isCardClicked) {
      // ------------------all-cards------------------
      const shuffledCards = shuffle([...cardsInformations]);
      shuffledCards.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
        <div class="card-image">
          <img src="${card.image}" alt="image ${card.id}" />
          <p class="card-agency" ${
            card.agency ? "" : 'style="display: none;"'
          }>${card.agency || ""}</p>
        </div>
        <div class="card-text">
          <h3>${card.price}</h3>
          <div class="card-marka-model">
            <p>${card.address}</p>
          </div>
          <p>${card.description}</p>
          <span class="card-date">${card.date}</span>
        </div>
      `;
        cardsElement.appendChild(cardElement);
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "apartment.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    } else if (isCrashedCardClicked) {
      // ------------------agency-cards------------------
      const agenciedCards = cardsInformations.filter(
        (card) => card.agencied === true
      );
      agenciedCards.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
          <div class="card-image">
            <img src="${card.image}" alt="image ${card.id}" />
            <p class="card-agency">${card.agency}</p>
          </div>
          <div class="card-text">
            <h3>${card.price}</h3>
            <div class="card-marka-model">
              <p>${card.address}</p>
            </div>
            <p>${card.description}</p>
            <span class="card-date">${card.date}</span>
          </div>
        `;
        cardsElement.appendChild(cardElement);
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "apartment.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    } else if (isRentCardClicked) {
      // ------------------rent-cards------------------
      rentCar.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
          <div class="card-image">
            <img src="${card.image}" alt="image ${card.id}" />
            <p class="card-rent">${card.rentCar}</p>
          </div>
          <div class="card-text">
            <h3>${card.price}</h3>
            <div class="card-marka-model">
              <p>${card.address}</p>
            </div>
            <p>${card.description}</p>
            <span class="card-date">${card.date}</span>
          </div>
        `;
        cardsElement.appendChild(cardElement);
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "apartment.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    } else {
      // ------------------------------------
      itemsToShow.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
        <div class="card-image">
          <img data=${card.id}  src="${card.image}" alt="image ${card.id}" />
          <p class="card-agency" ${
            card.agency ? "" : 'style="display: none;"'
          }>${card.agency || ""}</p>
        </div>
        <div class="card-text">
          <h3>${card.price}</h3>
          <div class="card-marka-model">
            <p>${card.address}</p>
          </div>
          <p>${card.description}</p>
          <span class="card-date">${card.date}</span>
        </div>
      `;
        cardsElement.appendChild(cardElement);
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "apartment.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    }
  }

  function renderPagination(currentPage) {
    paginationControls.innerHTML = "";

    for (let i = 1; i <= numberOfPages; i++) {
      const pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "page-number";
      if (i === currentPage) {
        pageLink.style.backgroundColor = "#25c0a6";
      }
      pageLink.addEventListener("click", () => {
        renderCards(i);
        renderPagination(i);
      });
      paginationControls.appendChild(pageLink);
    }
  }

  renderCards(1);
  renderPagination(1);

  // ------------------------all-cards--------------------
  const filterElement = document.querySelector(".filter-container");
  const sliderElement = document.querySelector(".slider-container");
  const activeAllCArd = document.querySelector(".active-all-card");
  const activeCrashCArd = document.querySelector(".active-agency-card");
  const activeRentCArd = document.querySelector(".active-rent-card");
  const hamburgerClosed = document.querySelector(".mobile-list");

  document.querySelectorAll(".all-cards").forEach((card) => {
    card.addEventListener("click", () => {
      filterElement.style.display = "none";
      sliderElement.style.display = "none";
      paginationControls.style.display = "none";
      isCardClicked = true;
      isCrashedCardClicked = false;
      isRentCardClicked = false;
      renderCards(1);
      activeAllCArd.style.setProperty("--zero", "100%");
      activeCrashCArd.style.setProperty("--zero", "0%");
      activeRentCArd.style.setProperty("--zero", "0%");
      hamburgerClosed.style.display = "none";
      document.body.style.overflow = "unset";
    });
  });

  // ------------------------agency-cards--------------------
  document.querySelectorAll(".agency-cards").forEach((agencyCard) => {
    agencyCard.addEventListener("click", () => {
      filterElement.style.display = "none";
      sliderElement.style.display = "none";
      paginationControls.style.display = "none";
      isCardClicked = false;
      isCrashedCardClicked = true;
      isRentCardClicked = false;
      renderCards(1);
      activeAllCArd.style.setProperty("--zero", "0%");
      activeCrashCArd.style.setProperty("--zero", "100%");
      activeRentCArd.style.setProperty("--zero", "0%");
      hamburgerClosed.style.display = "none";
      document.body.style.overflow = "unset";
    });
  });
  // ------------------rent-cards-----------
  document.querySelectorAll(".rent-cards").forEach((rentCard) => {
    rentCard.addEventListener("click", () => {
      filterElement.style.display = "none";
      sliderElement.style.display = "none";
      paginationControls.style.display = "none";
      isCardClicked = false;
      isCrashedCardClicked = false;
      isRentCardClicked = true;
      renderCards(1);
      activeAllCArd.style.setProperty("--zero", "0%");
      activeCrashCArd.style.setProperty("--zero", "0%");
      activeRentCArd.style.setProperty("--zero", "100%");
      hamburgerClosed.style.display = "none";
      document.body.style.overflow = "unset";
    });
  });

  // ---------------refresh-page---------------
  const logoImage = document.querySelector(".logo-element-in-mobile img");
  logoImage.addEventListener("click", () => {
    location.reload();
  });
  const logoMobile = document.querySelector(".logo-mobile img");
  logoMobile.addEventListener("click", () => {
    hamburgerClosed.style.display = "none";
    document.body.style.overflow = "unset";
  });
  // ------------------------select--------------------
  const transactionType = ["Seç", "Alış"];
  const apartmentType = [
    "Seç",
    "Mənzil",
    "Yeni Tikili",
    "Köhnə Tikili",
    "Həyət evi",
    "Ofis",
    "Qaraj",
    "Torpaq",
    "Obyekt",
  ];
  const roomNumber = [
    "Seç",
    "1 otaqlı",
    "2 otaqlı",
    "3 otaqlı",
    "4 otaqlı",
    "5 otaqlı və daha çox",
  ];
  const place = [
    "Seç",
    "Ağcabədi",
    "Abşeron",
    "Bakı",
    "Bərdə",
    "Beyləqan",
    "Cəlilabad",
    "İsmayıllı",
    "Gədəbəy",
    "Gəncə",
    "Xaçmaz",
    "Lerik",
    "Lənkəran",
    "Naxçıvan",
    "Şamaxı",
  ];

  const populateSelect = (element, options) => {
    element.innerHTML = "";
    options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      element.appendChild(opt);
    });
  };

  const buyElement = document.querySelector("#buy");
  const apartmentElement = document.querySelector("#apartment");
  const roomElement = document.querySelector("#room");
  const locationElement = document.querySelector("#location");

  populateSelect(buyElement, transactionType);
  populateSelect(apartmentElement, apartmentType);
  populateSelect(roomElement, roomNumber);
  populateSelect(locationElement, place);

  apartmentElement.disabled = true;
  roomElement.disabled = true;
  locationElement.disabled = true;

  buyElement.addEventListener("change", () => {
    if (buyElement.value === "Seç") {
      apartmentElement.disabled = true;
      roomElement.disabled = true;
      locationElement.disabled = true;
    } else {
      apartmentElement.disabled = false;
      roomElement.disabled = false;
      locationElement.disabled = false;
    }
  });

  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const priceMin =
      parseInt(document.querySelector("#priceMin").value, 10) || 0;
    const priceMax =
      parseInt(document.querySelector("#priceMax").value, 10) ||
      Number.MAX_SAFE_INTEGER;
    const selectedBuy = buyElement.value;
    const selectedApartment = apartmentElement.value;
    const selectedRoom = roomElement.value;
    const selectedLocation = locationElement.value;

    const filteredCards = cardsInformations.filter((card) => {
      const cardPrice = parseInt(card.price, 10);
      return (
        cardPrice >= priceMin &&
        cardPrice <= priceMax &&
        (selectedBuy === "Seç" || card.buy === selectedBuy) &&
        (selectedApartment === "Seç" || card.categoria === selectedApartment) &&
        (selectedRoom === "Seç" || card.room === selectedRoom) &&
        (selectedLocation === "Seç" || card.place === selectedLocation)
      );
    });

    const selectedContainer = document.querySelector(".selected-container");
    const cardsElement = document.querySelector(".cards-element");
    selectedContainer.innerHTML = "";

    if (filteredCards.length > 0) {
      filteredCards.forEach((card) => {
        const selectedLi = document.createElement("li");
        selectedLi.innerHTML = `
        <div class="card-image">
          <img src="${card.image}" alt="image ${card.id}" />
          <p class="card-agency" ${
            card.agency ? "" : 'style="display: none;"'
          }>${card.agency || ""}</p>
        </div>
        <div class="card-text">
          <h3>${card.price}</h3>
          <div class="card-marka-model">
            <p>${card.address}</p>
          </div>
          <p>${card.description}</p>
          <span class="card-date">${card.date}</span>
        </div>
      `;
        selectedLi.addEventListener("click", () => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "apartment.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
        selectedContainer.appendChild(selectedLi);
      });
      cardsElement.style.display = "none";
      selectedContainer.style.display = "flex";
    } else {
      cardsElement.style.display = "flex";
      selectedContainer.style.display = "none";
    }
  });
});
// ---------------------login-----------------
const main = document.querySelector("main");
const filters = document.querySelector(".apartment-sale");
filters.style.display = "none";
document.querySelector(".login").addEventListener("click", () => {
  if ((filters.style.display = "none")) {
    filters.style.display = "flex";
    document.querySelector(".cards-container").style.display = "none";
    document.getElementById("pagination-controls").style.display = "none";
    document.querySelector(".input-elements").style.display = "none";
    document.querySelector(".filter-elements").style.backgroundColor = "white";
    main.style.height = "80vh";
  } else {
    filters.style.display = "none";
    document.querySelector(".cards-container").style.display = "flex";
    document.getElementById("pagination-controls").style.display = "flex";
    document.querySelector(".input-elements").style.display = "flex";
    document.querySelector(".filter-elements").style.backgroundColor =
      "#7373ec";
  }
});
document.querySelector(".back-button").addEventListener("click", (e) => {
  e.preventDefault();
  filters.style.display = "none";
  document.querySelector(".cards-container").style.display = "flex";
  document.getElementById("pagination-controls").style.display = "flex";
  document.querySelector(".input-elements").style.display = "flex";
  main.style.height = "unset";
  if (innerWidth < 1024) {
    document.querySelector(".filter-elements").style.backgroundColor =
      "#7373ec";
  }
});

document.querySelector(".login-in-mobile").addEventListener("click", () => {
  if ((filters.style.display = "none")) {
    filters.style.display = "flex";
    document.querySelector(".cards-container").style.display = "none";
    document.getElementById("pagination-controls").style.display = "none";
    document.querySelector(".input-elements").style.display = "none";
    document.querySelector(".filter-elements").style.backgroundColor = "white";
    main.style.height = "120vh";
  } else {
    filters.style.display = "none";
    document.querySelector(".cards-container").style.display = "flex";
    document.getElementById("pagination-controls").style.display = "flex";
    document.querySelector(".input-elements").style.display = "flex";
    document.querySelector(".filter-elements").style.backgroundColor =
      "#7373ec";
  }
});
