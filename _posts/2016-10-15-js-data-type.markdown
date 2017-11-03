---
layout: post
title: "Data Type di JavaScript"
date: 2016-10-15T19:20:31+07:00
author: Dimas Maryanto
comments: yes
page_category: js
language: javascript
gist:
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

Halo, di postingan sebelumnya kita udah mengenal apa itu javascript dan software apa aja yang dibutuhkan untuk melakukan koding javascript. Sekarang saya mau menjelaskan tipe data di JavaScript.

<!--more-->

Ok langsung aja ya gak perlu basa-basi lagi dari pada kepanjangan, jadi kita akan bahas dulu tipe data ya supaya menjelaskannya lebih terstruktur ya.


## Tipe Data

Seperti yang ada ketahui tipe data ada bagian dari bahasa pemograman yang paling penting, pada dasarnya tipe data di JavaScript dibagai menjadi 2 yaitu primitive dan object (tidak akan di bahas di bagian ini). Untuk tipe data terdiri dari

* Number
* String
* Boolean
* Date
* Null
* Undefined

### Number

Di JavaScript tipe data number ini terdiri dari bilangan positive, negative, dan pecahan contohnya `1`, `1.0`, `0.25` dan lain-lain. Perbedaannya dengan bahasa pemograman lainnya jika di Java bilangan bulat dengan bilangan pecahan itu diagap berbeda tapi di JavaScript di tipe data number adalah double presition 64bit.

{% highlight js %}
var bulat = 2016;
var pecahan = 0.25;
{% endhighlight %}

### String

Seperti anda ketahui untuk tipe data ini memang primitive artinya dari dulu udah ada jadi saya tidak akan membahasnya lebih detail karena kurang lebih sama. Contohnya seperti berikut:

{% highlight js %}
var bulat = "2016";
var pecahan = "Bilangan Pecahan";
{% endhighlight %}

### Boolean

Seperti yang ada ketahui klo tipe data Boolean ini hanya bernilai `true` atau `false`, contoh penggunaanya seperti berikut:

{% highlight js %}
var benar = true;
var selah = false;
{% endhighlight %}

### Date atau tanggal

Tanggal di JavaScript ini bersifat Object jadi cara menggunakannya harus di instasiasi dengan keywork `new` seperti berikut:

{% highlight js %}
var hariIni = new Date();
{% endhighlight %}

### Null

Tipe data null adalah variable yang memiliki nilai tapi kita tidak tau isinya berbeda dengan `0` udah jelas nilainya nol sedangkan kosong berarti tidak ada nilainya klo null ya kita gak tau nilainya berapa. contohnya penggunaanya seperti berikut:

{% highlight js %}
var bulat = null;
{% endhighlight %}

### Undefined

Tipe data undefined adalah variable yang tidak memiliki nilai atau belum di inisialisasi contohnya seperti berikut:

{% highlight js %}
var bulat;
console.log(bulat); // akan mengembalikan undefined
{% endhighlight %}

Ok mungkin sekian dulu postingan kali ini tentang tipe data di JavaScript, See you next post!.
