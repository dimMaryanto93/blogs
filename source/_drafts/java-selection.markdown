---
layout: post
title: "Java - Percabangan menggunakan IF dan Switch-case"
author: Dimas Maryanto
comments: yes
page_category: java_fundamental
language: java
gist:
repository:
categories:
- Java
tags:
- Java
- Netbeans
references:
---

Halo kembali lagi di blog saya, kali ini saya mau melanjutkan pembahasan struktur kendali percabangan atau kata lainnya yaitu seleksi. Di Java pada dasarnnya ada 2 yaitu ```IF``` dan ```SWITCH```, jadi di postingan kali ini kita tidak hanya menggunakan bahasa dari bahasa pemograman java tapi juga kita akan sedikit menggambarkan bagaimana alur supaya lebih paham dan bagaimana cara memvisualisasikan koding yang kita buat. Ok langsung aja ke topik yang pertama yaitu kita akan membahas tentang seleksi dengan ```IF```

<!--more-->

## Seleksi dengan ```IF```

berikut ini adalah sample code percabangan dengan ```if``` dengan kasus yang umum digunakan:

{% highlight java %}
int bil1 = 10;
int bil2 = -10;

if (bil1 == bil2) {
  System.out.println("10 == -10");
}else if(bil1 < bil2){
  System.out.println("10 < -10");
} else {
  System.out.println("lain-lain")
}
{% endhighlight %}

Pada dasarnya seleksi dengan IF ini kalo digambarkan ke diagram UML dengan activity diagram berdasarkan koding diatas jadi seperti berikut:

![Basic IF](/images/2016-08/java-selection/if-basic.jpg)

* Nah jadi disini kita mendefinisikan 2 variable integer yaitu ```bil1 = 10``` dan ```bil2 = -10```.
* Seleksi pertama yaitu ```bil1 == bil2``` jadi kita ubah ke bilangan jadi ```10 == -10``` hasilnya ```false``` karena 10 tidak sama dengan -10 maka perintah dalam ```(bil1 == bil2)``` dilewat atau tidak dijalankan.
* Seleksi ke dua yaitu ```bil1 < bil2``` jadi kita ubah ke bilangan jadi ```10 < -10``` hasilnya ```false``` karena 10 lebih besar dari -10 maka peritah dalam ```(bil1 < bil2)``` dilewat atau tidak dijakankan.
* ```else``` adalah pilihan terakhir artinya jika kedua seleksi gagal atau bernilai salah maka otomatis perintah dalam else akan dijalankan dengan begitu kesimpulannya adalah ```lain-lain```

Nah sekarang kita akan coba studi kasus yang lain, berikut codingannya:

{% highlight java %}
int bil = 10;
if (bil == 10) {
  System.out.println("yang ini diksekusi (==)");
} else if(bil % 2 = 0){
  System.out.println("yang ini diksekusi (%)");
} else{
  System.out.println("Lain-lain");
}
{% endhighlight %}

Sekarang coba tebak outputnya yang mana?

* ```yang ini diksekusi (==)```?
* ```yang ini diksekusi (%)```?
* ```Lain-lain```?

Ok, nah jadi jawabanya seperti berikut supaya lebih gampang kita buat dulu activity diagramnya dulu seperti berikut:

![IF yang aneh](/images/2016-08/java-selection/if-aneh.jpg)

Berikut penjelasnnya:

* ```bil = 10``` kemudian diseksi ```10 == 10``` maka hasilnya benar. ok kita udah tau ya jawabanya yang ini. tpi angap ja gak tau.
* ```bil = 10``` kemudian diseleksi ```10 % 2 = 0``` jadi 10 dibagi 2 sama dengan 5 sisanya khan 0 maka hasilnya benar tpi perintah didalamnya tidak akan diksekusi karena buat apa khan statement pertama udah benar dan sebenarnya statement ke 2 ini tidak dieksekusi lagi karena statement ke 1 udah bener jadi hasilnya adalah ```yang ini dieksekusi (==)```
