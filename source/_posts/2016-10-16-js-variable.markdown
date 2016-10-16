---
layout: post
title: "Variable di JavaScript"
date: 2016-10-16T11:52:24+07:00
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
image_path: /images/2016-10/js-fundamental-2/
---

Halo, kembali lagi di blog saya. Kali ini saya mau membahas tentang variable di JavaScript diantaranya pembahasanya local & global variable, dan inisialisasi variable.

<!--more-->

## Inisialisasi Variable

Membuat variable pada dasarnya sama seperti bahasa pemograman lainnya yaitu Java, C++, PHP tapi disini JavaScript lebih mirip dengan PHP karena untuk variablenya tidak dibedakan dengan tipe data, dalam satu variable bisa support dengan berbagai macam tipe data. contohnya yaitu seperti berikut:

{% gist page.gist "varBaru.js" %}

Jika di running di Firefox maka hasilnya seperti berikut:

![membuat variable baru]({{ page.image_path }}varBaru.png)

Jadi penjelasanya dari koding diatas, kita membuat variable dengan nama `log` setelah itu kita memberikan nilai ke variable tersebut dengan nilai `Dimas Maryanto` setelah itu method `console.log()` digunakan untuk menampilkan ke console di firefox.

## Unique konsep pada Variable di JavaScript

Di JavaScript seperti yang telah saya ceritakan di awal semua tipe data bisa ditampung dalam variable `var` dan yang lebih uniquenya lagi tidak tergantung pada tipe data, contohnya seperti berikut:

{% gist page.gist "uniqueVar.js" %}

Disini kita membuat variable dengan nama `log`, variable tersebut dapat digunakan untuk beberapa tipe data sekaligus contohnya pertama kita membuat variable dengan tipe data `String` kemudian yang kedua diinisialisasi kembali dengan tipe data `Number` setelah itu di inisialisasi kembali dengan `Boolean` dan yang terakhir diinisialisasi kembali dengan `Date` apakah dengan begitu menghasilkan error? tentu tidak nih hasil eksekusinya

![var multi value]({{ page.image_path }}variable-2.png)

Sekarang supaya lebih membuktikan bahwa hal tersebut benar coba modifikasi kodingnya menjadi seperti berikut:

{% highlight js %}
var log = "Dimas Maryanto"; // variable bertipe string
console.log(log + "tipe datanya adalah "+ typeof(log));

log = 12; // variable bertipe number
console.log(log + "tipe datanya adalah "+ typeof(log));

log = false; // variable bertipe boolean
console.log(log + "tipe datanya adalah "+ typeof(log));

log = new Date(); // variable bertipe Date();
console.log(log + "tipe datanya adalah "+ typeof(log));
{% endhighlight %}

Hasilnya seperti berikut:

![var hasilnya typeof]({{ page.image_path }}variable-3.png)

Jadi dengan kesimpulannya dengan menggunakan `typeof()` kita bisa mengetahui variable tersebut memilliki tipe data apa.

## Scope variable

Di javascript juga sama seperti bahasa pemograman lain yaitu mengenal local dan global variable. berikut adalah contoh local variable di javascript:

{% gist page.gist "localVar.js" %}

diatas saya membuat sebuah function dengan nama `halo` kemudian di dalamnya saya membuat lagi variable dengan nama `local` yang di inisialisasi dengan value `Dimas Maryanto` setelah itu saya panggil method halo tersebut untuk di jalankan. setelah method `halo` dijalakan saya memanggil variable `local` dari luar dan hasilnya adalah `undefined`

![local variable ]({{ page.image_path }}variable-4.png)

Setelah itu sekarang saya jelaskan tentang global variable seperti berikut:

{% gist page.gist "globalVar.js" %}

Penjelasannya kurang lebih sama seperti local variable hanya kebalik saya yaitu variable `global` bisa dikenali di method `halo()`. 

Ok mungkin cukup sekian dulu yang bisa saya share kali ini tentang pengetahuan dasar di JavaScript yaitu membuat variable. Mohon maaf jika ada kekurangan See you next post!.
