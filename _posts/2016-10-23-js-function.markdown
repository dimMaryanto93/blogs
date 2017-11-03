---
layout: post
title: "Function di JavaScript"
date: 2016-10-23T12:13:12+07:00
author: Dimas Maryanto
comments: yes
page_category: js
language: javascript
gist: dimMaryanto93/b956151354fb8a1454d3b36d22d61a63
repository: https://github.com/dimMaryanto93/tutorial.js.git
categories:
- Web
- Js
tags:
- Web
- JavaScript
- Client Side Programming
references:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
image_path: /images/2016-10/js-fundamental-5/
---

Halo, [postingan sebelumnya]({% post_url 2016-10-23-js-loop %}) kita udah mengenal perulangan, tahap belajar selanjutnya adalah menggunakan function, seperti yang ketahui JavaScript ini tidak mengenal yang namanya `Class` sebagai gantinya kita bisa menggunakan function sebagai pembungkusnya.

<!--more-->

Sekarang kita akan membuat function di JavaScript format dasarnya kurang lebih seperti berikut:

{% gist page.gist "function-basic.js" %}

Jadi disini untuk membuat function kita cukup gunakan keyword `function` kemudian diikuti dengan nama functionnya contohnya seperti diatas `halo` setelah itu untuk memanggil fungsi tersebut atau menjalankannya seperti berikut:

```js
halo();
```

Lanjut, sekarang kita akan membuat function dengan menggunakan parameter atau arguments, arguments ini digunakan untuk meng-inject sebuah atau beberapa nilai ke dalam variable supaya dikenali di dalam function tersebut contohnya seperti berikut:

{% gist page.gist "function-args.js" %}

Jadi koding di atas kita melakukan perkalian berdasarkan `bil1` dan `bil2` yang di inject dari luar nilainya kemudian mengembalikan nilanya dengan menggunakan keyword `return`. Selain itu ada hal unique yang bisa dilakukan di JavaScript yaitu function dalam function seperti berikut:

{% gist page.gist "function-inner-function.js" %}

Nah jadi disini kesimpulannya dengan menggunakan function kita bisa me reuseable atau menggunakannya secara berkali-kali tanpa perlu menulis ulang kode programnya dari awal cukup dengan memanggil fungsinya saja. Ok mungkin cukup sekian dulu penjelasan tentang function di JavaScript mohon maaf jika ada kesalahan, See you next post!.
