---
layout: post
title: "Operator di JavaScript"
date: 2016-10-16T14:15:13+07:00
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

Halo di [postingan sebelumnya]({% post_url 2016-10-16-js-variable %}) kita udah memahami tentang membuat variable di JavaScript, sekarang kita akan membahas tentang operator di JavaScript.

<!--more-->

Ok langsung aja operator pada dasarnya dibagi 3 yaitu aritmatika, assignment dan bitwise. Kali ini saya mau membahas dulu tentang assignment atau penugasan (inisialisasi).

ok sekarang coba perhatikan contoh koding berikut ini:

{% gist page.gist "assignment.js" %}

Seperti yang dijelaskan di postingan sebelumnya penugasan adalah memberikan nilai ke variable lainnya. Hanya di disini ada yang unique dari bahasa JavaScript, kenapa unique? contohnya terlihat dari koding baris ke 7. kita melakukan concat dengan berbeda tipe data yaitu string dan number tpi hasil akhirnya menjadi string.

Selanjutnya kita akan membahas tentang aritmatika atau perhitungan matematika seperti pertambahan, pengurangan, perkalian, pembagian dan lain-lain seperti berikut:

{% gist page.gist "aritmath.js" %}

Berikut ini hasilnya:

{% highlight bash %}
bil1 : 10; bil2 : 20;

bil1 + bil2 : 30
bil1 x bil2 : 200
bil1 / bil2 : 0.5
bil1 - bil2 : -10
Math.sqrt(bil1) : 3.1622776601683795
bil1+= 1 : 11
bil2-= 2 : 18
{% endhighlight %}

Ok mungkin sekian dulu penjelasan tentang operator assignment dan aritmatika, mohon maaf jika ada kesalahan. See you next post!.
