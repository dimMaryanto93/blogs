---
layout: post
title: "Mendeteksi IP Address dari Client (Debian Based) dengan menggunakan nmap"
date: 2016-11-19T14:52:12+07:00
author: Dimas Maryanto
comments: yes
page_category: ubuntu
language: ubuntu
gist:
repository:
categories:
- Linux
- Ubuntu
tags:
- Linux
- Ubuntu
- Install
references:
- https://nmap.org/
---

Halo, udah cukup lama gak nulis lagi kurang lebih hampir 2 minggu ya hehe!. Jadi kali ini saya mau share pengalaman saya ketika dikantor ber-urusan dengan Jaringan atau bahasa Kerennya Networking, Seperti ini kasusnya di dalam 1 kantor ada 2 wireless router dan khusus di lantai 4 atau bagian IT menggunakan cabel UTP nah masing-masing terhubung dengan Laptop dan Komputer dengan sistem jaringan DHCP. karena menggunakan Sistem DHCP artinya IP Addressnya akan berubah ketika perangkat Networking di matikan, karena ribet harus buka rak server untuk mendeteksi berapa IP Address server maka saya pun mencatat MAC Addressnya kemudian di sisi client saya kebetulan menggunakan OS based Debian yaitu elementary yang tidak lain turunan dari Ubuntu

<!--more-->

Setelah mengetahui berapa MAC Addressnya kita mulai...

Persiapan pertama kita harus siapkan koneksi internet, kemudian install package berikut:

{% highlight bash %}
sudo apt-get install nmap
{% endhighlight %}

Menampilkan daftar ip address dan mac address dalam sebuah jaringan `192.168.1.*`

{% highlight bash %}
sudo nmap -sP 192.168.1.*
{% endhighlight %}

Outputnya kurang lebih seperti ini:

{% highlight bash %}
MAC Address: 30:B5:C2:F6:D3:74 (Tp-link Technologies)
Nmap scan report for 192.168.1.101
Host is up.
Nmap scan report for 192.168.1.106
Host is up.
Nmap done: 256 IP addresses (14 hosts up) scanned in 55.29 seconds
root@Aspire-E5:~# exit
{% endhighlight %}

Ok bagaimana mudah khan, nah mungkin sekian dulu apa yang bisa saya share. sampai jumpa di postingan lainnya.
