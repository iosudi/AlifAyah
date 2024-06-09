import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any | undefined;
  teachers: any | undefined;
  reviews: any | undefined;

  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.products = [
      {
        image:
          'https://s3-alpha-sig.figma.com/img/a6e2/9d68/131da1fc586a4fc1e65c68fc8cb1249d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RT2rV46L9XTxF-5yOoKHa5~DuSUjACqLoGVOr2Xw9guYIbq4kMZEHSBc5CoOjf~6u24JULAtA6xMgbxwjpumcg7mXT4gfzPev~wYyzcftBk3KV5bd2zxrBjdrPacOrLunaJFJZH3LoASABrku0hqMPoB7~yH458i4d7182zx4OlX~FoCFaR-fKHh2xizRT~95iQi24QAJ5DA0JUMRlCxcz8E6Qeh5B3fdCaeKZUt9SDLZHD2lK9U87kaN4ztIgBFnscw3g6vELzmEU3Gjfir8ZMneLBfUAAhzXI82vgbQxj8kywOx8NlD~-u162Jj3azwhJJ4LmSLan58C-pchU6FA__',
        name: 'Arabic Course ',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry and typing. ',
        rating: '4.6',
        price: 20,
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/a6e2/9d68/131da1fc586a4fc1e65c68fc8cb1249d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RT2rV46L9XTxF-5yOoKHa5~DuSUjACqLoGVOr2Xw9guYIbq4kMZEHSBc5CoOjf~6u24JULAtA6xMgbxwjpumcg7mXT4gfzPev~wYyzcftBk3KV5bd2zxrBjdrPacOrLunaJFJZH3LoASABrku0hqMPoB7~yH458i4d7182zx4OlX~FoCFaR-fKHh2xizRT~95iQi24QAJ5DA0JUMRlCxcz8E6Qeh5B3fdCaeKZUt9SDLZHD2lK9U87kaN4ztIgBFnscw3g6vELzmEU3Gjfir8ZMneLBfUAAhzXI82vgbQxj8kywOx8NlD~-u162Jj3azwhJJ4LmSLan58C-pchU6FA__',
        name: 'Arabic Course ',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry and typing. ',
        rating: '4.6',
        price: 20,
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/a6e2/9d68/131da1fc586a4fc1e65c68fc8cb1249d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RT2rV46L9XTxF-5yOoKHa5~DuSUjACqLoGVOr2Xw9guYIbq4kMZEHSBc5CoOjf~6u24JULAtA6xMgbxwjpumcg7mXT4gfzPev~wYyzcftBk3KV5bd2zxrBjdrPacOrLunaJFJZH3LoASABrku0hqMPoB7~yH458i4d7182zx4OlX~FoCFaR-fKHh2xizRT~95iQi24QAJ5DA0JUMRlCxcz8E6Qeh5B3fdCaeKZUt9SDLZHD2lK9U87kaN4ztIgBFnscw3g6vELzmEU3Gjfir8ZMneLBfUAAhzXI82vgbQxj8kywOx8NlD~-u162Jj3azwhJJ4LmSLan58C-pchU6FA__',
        name: 'Arabic Course ',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry and typing. ',
        rating: '4.6',
        price: 20,
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/a6e2/9d68/131da1fc586a4fc1e65c68fc8cb1249d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RT2rV46L9XTxF-5yOoKHa5~DuSUjACqLoGVOr2Xw9guYIbq4kMZEHSBc5CoOjf~6u24JULAtA6xMgbxwjpumcg7mXT4gfzPev~wYyzcftBk3KV5bd2zxrBjdrPacOrLunaJFJZH3LoASABrku0hqMPoB7~yH458i4d7182zx4OlX~FoCFaR-fKHh2xizRT~95iQi24QAJ5DA0JUMRlCxcz8E6Qeh5B3fdCaeKZUt9SDLZHD2lK9U87kaN4ztIgBFnscw3g6vELzmEU3Gjfir8ZMneLBfUAAhzXI82vgbQxj8kywOx8NlD~-u162Jj3azwhJJ4LmSLan58C-pchU6FA__',
        name: 'Arabic Course ',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry and typing. ',
        rating: '4.6',
        price: 20,
      },
    ];

    this.teachers = [
      {
        image:
          'https://s3-alpha-sig.figma.com/img/f985/5f48/8816bbd4756f4a9e986b19c0233d984f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhKbGYMiHvumOsHV783PKTGTQLwIz47Lbgz5fsHPEvl4pgkXNi-ODpCW0iC0HHnOjk08YaAXvMMzqqHS-1MYuwrjLyABQYIGFa~10xvSXe85z4P1fkyvh5PXYp-ePtBbSKEfZ61OZqazEBFL7cfEWyfl7gnLd~TiFYbGoDHdL3fV167ficswpoFTSzBPGI8VUOR2x9T-g8jOeHO1AcAy9PKzmYmE~u91OyK~Qczb4pvWuxNV-75-u7oqMowM0Tj9Y-C4ba2MEioZFP9YHnyeOpXv4Yi~-5IEA1nAsWFiFMLukVXoSb2bixV22ppFl2Qsluh-ztGeQgZAdPlCSng5NA__',
        name: 'Sarah Rizk',
        role: 'Arabic Teacher',
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/057c/5037/d6bf0fcc380ab5e47363209a46b2e3a5?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSX8K7fY1Xc~tmTXFnf8pCOYIp-wcg6BAL0771DxOD6xXwTm0ISSh2A-3fwcR~X2NsxX6Mc3wubWqj-s05YTx5zbYQrQn-3QIr7QOFXK6eyOZ7uaAmXZbDDS3AAzmiHIMjEIDyJWg8QRwHD6eDCA-jaaUDBNX-qCcbj8CtUYwT2K4rDI0l0PyNr1Ugx3mxZlI1oElirQeZuygsKrpP2-NOTUp6UIWCC3gt7WCmyFQ41SoHSXm8yvmZD4x5arPesTLzYyznjFcYC~3-7O-ZfDDTYvWQOu-W4ctD5Ykik6r6R6fXzDnu8nn0WC52sYryZQtvahdpKC6tzGEc8ueG0HbA__',
        name: 'Micheal Wattson',
        role: 'Arabic Teacher',
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/df6e/7b9e/719c1aa4e6225840c7ddffa1126360a7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ymlcr8ZdCQhwQQxMt5PSw0VLnmRONsr6bNu2AdWUWyBeImnADCbzebQDyBV4RXlJl3IjNRKGzX14CEWPvv-vrrJAbIo0zoEboi604qrmMD5VrygTv5KTIXf86BTyJZCum5qfS6g3yZ8Oee6WHOnRjvz2IB8~d9-lhyxrTD-9FO1i3FD131VslVhaSxF6Z3pHLAWHlRjk96eQAOwk0bhWVVPccdPEq0U~QMUC3ZZEIuaTDkOrzbyb96nOu2ete9fZxP-TKBpX0yK0P4s9062HzFMv9ko9YwlLDkg5QfWBwYwoCC6CuL-~jiIWMMHiHOBvrq1c6l4y2nYlxxzqVNdwyA__',
        name: 'Ahmed Mohamed',
        role: 'Arabic Teacher',
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/61c7/5601/0d5f058312945728a2faa0d0df5d19b4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~FbsCNVjvFY34F~i5pollIFOJipBYCYMat4kxv1nhed4etuI~tyL~VPDtD5DONWYqkq0qbcGc3Z12WfFxOptIVKD7o4Z4T9LLHEGOGvhXMUykTcF3mrs4~CjynEl8FgkW3ViTYlF2qRNfm7LZU4Vec9G~qRbqaecuZcZRyoXZtCiQQhRvsE-teWdRSezlalvAeWy7YECqPAJl1yKTB4RG1JjYCYi~D2Kbm0FjnN932tpg13RXywmwEn6FdG9EimKIpf2IRa6WLX1gCdCJ-FfBAHRyeIIWAcdNcZgV9tuw8hxjvw0l3u2BKs6M1ZvkQncnNbKJmbP5N~REr-kNXddw__',
        name: 'Abdelrhman Nasser',
        role: 'Arabic Teacher',
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/84b9/d56a/724f72eb2c73d3e7560e01a5f0093700?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hM5n~O6NvaNdzDKv0J4-xvZrtBkecv3R6Oi6W-Mz8MRP7fLrVlXeH2UXC5vTqawzX5HjLQuYA3gpDHvSSlOKz8rqwQNnyEFnmf9TAv6~GHqnkaiiBTPvq7ppwa8C78mR62uaprp~8YrW3Ap53UEHzuQRWBTpwb1UMKf-nw~vCKoZqSkxR6R3dPQFhtQgZWvmlM04EwkUW-Ys2-QRjrKsrlCYhR66zDu0ZiyC8FLqClni-lPIFhe03ZrqUY8V~acFur2mlOM9ryV1Uajy15hxyHyTEvplGRsct29OjUBag34EVQQ9oAirbDtiXfWcuDkaZso218n9sGFVSpcSajQcMQ__',
        name: 'Eman Ahmed',
        role: 'Arabic Teacher',
      },
    ];

    this.reviews = [
      {
        image:
          'https://s3-alpha-sig.figma.com/img/84b9/d56a/724f72eb2c73d3e7560e01a5f0093700?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hM5n~O6NvaNdzDKv0J4-xvZrtBkecv3R6Oi6W-Mz8MRP7fLrVlXeH2UXC5vTqawzX5HjLQuYA3gpDHvSSlOKz8rqwQNnyEFnmf9TAv6~GHqnkaiiBTPvq7ppwa8C78mR62uaprp~8YrW3Ap53UEHzuQRWBTpwb1UMKf-nw~vCKoZqSkxR6R3dPQFhtQgZWvmlM04EwkUW-Ys2-QRjrKsrlCYhR66zDu0ZiyC8FLqClni-lPIFhe03ZrqUY8V~acFur2mlOM9ryV1Uajy15hxyHyTEvplGRsct29OjUBag34EVQQ9oAirbDtiXfWcuDkaZso218n9sGFVSpcSajQcMQ__',
        name: 'Abdelrhman Nasser',
        role: 'Verified Student',
        review:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        social: 'guest',
        stars: 5,
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/84b9/d56a/724f72eb2c73d3e7560e01a5f0093700?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hM5n~O6NvaNdzDKv0J4-xvZrtBkecv3R6Oi6W-Mz8MRP7fLrVlXeH2UXC5vTqawzX5HjLQuYA3gpDHvSSlOKz8rqwQNnyEFnmf9TAv6~GHqnkaiiBTPvq7ppwa8C78mR62uaprp~8YrW3Ap53UEHzuQRWBTpwb1UMKf-nw~vCKoZqSkxR6R3dPQFhtQgZWvmlM04EwkUW-Ys2-QRjrKsrlCYhR66zDu0ZiyC8FLqClni-lPIFhe03ZrqUY8V~acFur2mlOM9ryV1Uajy15hxyHyTEvplGRsct29OjUBag34EVQQ9oAirbDtiXfWcuDkaZso218n9sGFVSpcSajQcMQ__',
        name: 'Sarah Ahmed',
        role: 'Verified Student',
        review:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        social: 'google',
        stars: 5,
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/f21f/e97b/3b84a4ee7c6ef3164c759fd2ae33930b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Otct5EkOsE5PSng7sgJ0QV6EG3Z6jP0lJqq8yse9RrjbMeGuEkVU9QPl9nJlVDPWQi1-DlbvUB~1jIhHnTBuHrKvl65TTvF5lb2ln4N3-2qOdyBZUtTSqvcB6kTViq4aSPw5WAm~4INUEWNul2gomT4ZKsT9k5ejloLK2Dmf1OI4udc5dZov5HpZF8Biu9YJN7Mr8oz4mQKo2AjWhTX1Mrsn12hLp08mOHRDJscUptiX3xn8iyjoQcIrS-lLJbJX790lg~RgDtMmNjtaaw9U5-4zwC3DEN~sBo~seINngbQ~aOOWqmozk13myyVFjS61MzTWngfHlWy34FPiMn5ZbQ__',
        name: 'Mohamed Ahmed',
        role: 'Verified Student',
        review:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        social: 'facebook',
        stars: 3,
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/aa89/d96d/1f8d6036279c1352c2f402fd96df3692?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aKOaSiKpt4CX9V7S4wo-OiEYs1l-rURDL0VyebhtU2BGFYngzIkaREFk0rGPB-J7a0vhcuG-eRn5QnNyf0kRGo6GbvWgkzVbwbXqxPZnSEgJmh1FRQ960heGl8oyE1up6GPp61gz-9iY4DDL-pHG2NEWN72Yervjn7qczuMsibldn51eoIqyP0vlWd4BYRxA--o4WcOhPENcUNTbUqliwut7G2FSjF2P2mIVLyqqtSzNmHo2Kr3qc0AXEhkRdDaq49IoPArfJl0rGIpyggzGtOehhc1Q80cGcPfjq9~TbNsfF1kgvSLJkqNn-tgbXM7xCPoOARyOm5FXanScB0WrEg__',
        name: 'Eman Ahmed',
        role: 'Verified Student',
        review:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        social: 'google',
        stars: 5,
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/84b9/d56a/724f72eb2c73d3e7560e01a5f0093700?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hM5n~O6NvaNdzDKv0J4-xvZrtBkecv3R6Oi6W-Mz8MRP7fLrVlXeH2UXC5vTqawzX5HjLQuYA3gpDHvSSlOKz8rqwQNnyEFnmf9TAv6~GHqnkaiiBTPvq7ppwa8C78mR62uaprp~8YrW3Ap53UEHzuQRWBTpwb1UMKf-nw~vCKoZqSkxR6R3dPQFhtQgZWvmlM04EwkUW-Ys2-QRjrKsrlCYhR66zDu0ZiyC8FLqClni-lPIFhe03ZrqUY8V~acFur2mlOM9ryV1Uajy15hxyHyTEvplGRsct29OjUBag34EVQQ9oAirbDtiXfWcuDkaZso218n9sGFVSpcSajQcMQ__',
        name: 'Eman Ahmed',
        role: 'Verified Student',
        review:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        social: 'guest',
        stars: 4,
      },
      {
        image:
          'https://s3-alpha-sig.figma.com/img/84b9/d56a/724f72eb2c73d3e7560e01a5f0093700?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hM5n~O6NvaNdzDKv0J4-xvZrtBkecv3R6Oi6W-Mz8MRP7fLrVlXeH2UXC5vTqawzX5HjLQuYA3gpDHvSSlOKz8rqwQNnyEFnmf9TAv6~GHqnkaiiBTPvq7ppwa8C78mR62uaprp~8YrW3Ap53UEHzuQRWBTpwb1UMKf-nw~vCKoZqSkxR6R3dPQFhtQgZWvmlM04EwkUW-Ys2-QRjrKsrlCYhR66zDu0ZiyC8FLqClni-lPIFhe03ZrqUY8V~acFur2mlOM9ryV1Uajy15hxyHyTEvplGRsct29OjUBag34EVQQ9oAirbDtiXfWcuDkaZso218n9sGFVSpcSajQcMQ__',
        name: 'Eman Ahmed',
        role: 'Verified Student',
        review:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
        social: 'google',
        stars: 5,
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
