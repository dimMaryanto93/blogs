---
layout: post
title: "Spring Konfigurasi dengan XML"
date: 2016-08-19T08:34:52+07:00
author: Dimas Maryanto
comments: yes
page_category: springframework
language: java
gist:
repository: https://github.com/dimMaryanto93/tutorial.springframework-ioc.git
categories:
- Java
- Framework
- SpringFramework
tags:
- Java
- Spring Framework
- Dependency Injection
references:
- https://projects.spring.io/spring-framework/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
image_path: /images/2016-08/spring-di-3/
---

Di [postingan sebelumnya]({% post_url 2016-08-18-setup-env-spring-maven %}) kita telah mengelesaikan setup development environtment untuk Spring Framework ini sekarang kita akan menggunakan spring, tahap pertama adalah

<!--more-->

Membuat konfigurasi spring container? mungkin muncul lagi pertanyaan **apa itu Spring Container?** ok tahan dulu ya! nanti ada materi sediri tentang Spring Container karena lumayan rada panjang penjelasannya. OK balik lagi ke topik utama yaitu membuat spring konfigurasi, nah disini sebenarnya ada pilihan untuk membuat spring konfigurasi yaitu dengan **XML dan Java**. Sebenarnya sih **saya gak terlalu suka sama gaya bahasa XML** tapi karena ```xml``` rata" mudah dibaca maka untuk pembahasan kali ini menggunakan ```xml``` ya!.

Sekarang anda tingal buat file konfigurasi springnya, Tapi sebelum itu, sebaiknya kita buat dulu folder dengan nama ```resources``` dalam folder ```src/main/``` berikut perintahnya

{% highlight bash %}
mkdir src/main/resources
{% endhighlight %}

atau bisa juga buat dari netbeans, buka **Tab Files** kemudian pada folder ```src/main``` klik kanan **New** lalu pilih **Folder** tingall ketik namanya ```resources``` seperti berikut:

![new folder resource]({{ page.image_path}}new-folder-resources.png)

kemudian input namananya ```resources``` seperti berikut

![resources folder]({{ page.image_path }}resources-folder.png)

Nah sekarang kita buat file konfigurasinya di folder ```resources``` tersebut dengan cara klik kanan di folder tersebut lalu **New** kemudian **Other** lalu filter aja spring maka tampil seperti berikut:

![new xml konfigurasi spring]({{ page.image_path}}new-xml-file.png)

Sekarang kita tinggal masukan namanya klo saya ```SpringConfig``` seperti berikut:

![spring config]({{ page.image_path }}spring-config-xml.png)

Berikut hasilnya

![xml configurasi]({{ page.image_path }}xml-spring-config.png)

Dan berikut sintaxnya

{% highlight xml %}
<?xml version="1.0" encoding="windows-1252"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation=  "http://www.springframework.org/schema/beans
                            http://www.springframework.org/schema/beans/spring-beans-4.3.xsd
">

</beans>
{% endhighlight %}

Nah sekarang tingal kita load si Spring Konfigurasinya dari Java dan dijalakan di main method. Nah sekarang kita edit kelas ```App.java``` yang ada di dalam folder atau package ```com.hotmail.dimmaryanto.software``` seperti berikut:

{% highlight java %}
package com.hotmail.dimmaryanto.software;

public class App {

    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
{% endhighlight %}

Menjadi seperti berikut:

{% highlight java %}
package com.hotmail.dimmaryanto.software;

// import kelasnya
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

    public static void main(String[] args) {
        // cara meload spring configurasi dari xml yang disimpan didalam classpath
        new ClassPathXmlApplicationContext("/SpringConfig.xml");
    }
}
{% endhighlight %}

Nah sekarang coba anda run filenya, bisa dari netbeans toolbar atau klik kanan **Run file** maka hasilnya seperti berikut:

{% highlight bash %}
Building springframework-belajar 1.0-SNAPSHOT
------------------------------------------------------------------------

--- exec-maven-plugin:1.2.1:exec (default-cli) @ springframework-belajar ---
Aug 19, 2016 8:15:47 AM org.springframework.context.support.ClassPathXmlApplicationContext prepareRefresh
INFO: Refreshing org.springframework.context.support.ClassPathXmlApplicationContext@4d405ef7: startup date [Fri Aug 19 08:15:47 ICT 2016]; root of context hierarchy
Aug 19, 2016 8:15:47 AM org.springframework.beans.factory.xml.XmlBeanDefinitionReader loadBeanDefinitions
INFO: Loading XML bean definitions from class path resource [SpringConfig.xml]
------------------------------------------------------------------------
BUILD SUCCESS
------------------------------------------------------------------------
Total time: 2.813s
Finished at: Fri Aug 19 08:15:47 ICT 2016
Final Memory: 5M/123M
------------------------------------------------------------------------
{% endhighlight %}

Ok mungkin sekian dulu tentang bagaimana cara load spring configurasi dengan XML. See you next post!.
