---
layout: post
title: "Percabagan atau Selection di JavaScript"
date: 2016-10-22T13:21:37+07:00
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
image_path: /images/2016-10/js-fundamental-3/
---

Halo, di [postingan sebelumnya]({% post_url 2016-10-16-js-operator %}) kita telah memahami tentang membuat variable dan operator. Sekarang kita akan mengenal lebih dekat bahasa pemograman JavaScript yaitu selection atau percabangan, Percabangan sendiri dari dulu ada 3 yaitu `?` ,`if` dan `switch`.

<!--more-->

Ok sekarang kita akan lihat 1 per 1 bagaimana sifat atau prilaku dari ketiga percabangan tersebut. yang pertama kita akan bahas dulu selection yang paling sedarhana yaitu dengan menggunakan `?`. seperti berikut:

{% gist page.gist "question.js" %}

Coba anda jalankan maka hasilnya adalah

```
Benar
```

Ok mungkin ini adalah koding paling sederhana untuk masalah percabagan karena hanya memiliki 2 opsi yaitu true or false.

## Seleksi dengan IF

sekarang kita beranjak ke yang sedikik lebih kompleks yaitu percabangan dengan `if`. berikut koding dasarnya:

{% gist page.gist "if-else.js" %}

dan berikut adalah contoh percabangan dengan `if - else if` seperti berikut:

{% gist page.gist "if-elseif.js" %}

Jadi kesimpulannya kurang lebih sama seperti bahasa pemograman lain seperti Java, C++, PHP dll tetapi Javascript sendiri memiliki keunikan yaitu contohnya seperti koding berikut:

{% gist page.gist "if-elseif-2.js" %}

Sekarang coba perhatikan logika berikut:

```js
(bilangan === 10)
```

dan

```js
(bilangan == 10)
```

Apa bedanya??? jadi gini kalo sama dengan nya ada tiga atau triple equals (`===`) dia membedakan tipe data meskipun isinya sama seperti berikut

```
10 tidak sama seperti "10"
```

sedangkan kalo sama dengannya duakali atau double equals (`==`), dia tidak membedakan tipe data jadi mesikipun tipe data yang dibandingkan berbeda seperti diatas maka hasilnya akan bernilai benar. Selain itu juga di JavaScript untuk memerika jika dalam sebuah variable bernilai null bisa dengna menggunakan cara yang sederhana yaitu seperti berikut:

{% gist page.gist "if-null.js" %}

Nah itu tentang `IF` sekarang kita maju lagi ke tahap selanjutnya yaitu menggunakan `switch-case`

## Seleksi dengan Switch Case

 Seleksi dengan menggunakan switch case ini pada dasarnya sama dengan percabangan `IF` tapi lebih sering digunakan untuk nilai yang pasti (konstanta) artinya tidak berbentuk range seperti berikut:

 {% gist page.gist "switch-case.js" %}

 Jika dijalankan maka hasilnya adalah

 ```js
 Selamat anda lulus dengan predikat Sangat Memuaskan.
 ```

 Ok mungkin sekian dulu apa yang bisa saya share tentang percabangan di JavaScript yang sangat sederhana ini, mohon maaf jika ada kesalahan. See you next post!.
