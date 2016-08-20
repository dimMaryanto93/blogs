---
layout: post
title: "Dependency Injection dengan Spring Framework"
date: 2016-08-20T09:59:19+07:00
author: Dimas Maryanto
comments: yes
page_category: springframework
language: java
gist:
repository: https://github.com/dimMaryanto93/belajar-spring-framework.git
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

Ok setelah sebelumnya kita udah [meload XML konfigurasi]({% post_url 2016-08-19-load-xml-spring-config %}) untuk project Spring Framework, sekarang kita langsung aja untuk membuat Dependency Injection dengan Spring Framework berikut kodingnya:

<!--more-->

Nah kita buat sebuah kelas dulu, saya buat dengan nama ```Bean``` dalam package ```com.hotmail.dimmaryanto.software.beans``` berikut isinya:

{% highlight java %}
package com.hotmail.dimmaryanto.software.beans;

public class Bean {

    private String pesan;

    // setter dan getter
}
{% endhighlight %}

Setelah membuat kelas ```Bean``` sekarang kita daftarkan kelas tersebut ke spring container yang tidak lain adalah file XML yang telah kita buat di postingan sebelumnya. tambahkan seperti berikut:

{% highlight xml %}
<bean id="aBean" class="com.hotmail.dimmaryanto.software.beans.Bean">
    <property name="pesan" value="Nama saya, Dimas Maryanto"/>        
</bean>
{% endhighlight %}

Maka hasilnya seperti berikut:

{% highlight xml %}
<?xml version="1.0" encoding="windows-1252"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation=  "http://www.springframework.org/schema/beans
                            http://www.springframework.org/schema/beans/spring-beans-4.3.xsd">
    <!--
        menjadikan kelas Bean
        dalam package com.hotmail.dimmaryanto.software.bean
        menjadi sebuah bean dalam spring container
    -->
    <bean id="aBean" class="com.hotmail.dimmaryanto.software.beans.Bean">
        <!-- meng inject nilai menggunakan setter injection -->
        <property name="pesan" value="Nama saya, Dimas Maryanto"/>        
    </bean>
</beans>
{% endhighlight %}

Nah jadi kalo anda perhatikan mendefinisikan sebuah bean pasti memiliki properti ```id``` dan ```class``` dan magsud dari membuat bean itu sama seperti kita meng-instance objek seperti berikut:

{% highlight java %}
new com.hotmail.dimmaryanto.software.beans.Bean();
{% endhighlight %}

Kemudian didalamnya kita meng-set properti ```pesan``` dengan nilai ```"Nama saya, Dimas Maryanto"``` maka ini sama seperti kita melakukan seperti berikut:

{% highlight java %}
new com.hotmail.dimmaryanto.software.beans.Bean().setPesan("Nama saya, Dimas Maryanto");
{% endhighlight %}

Atau

{% highlight java %}
Bean bean = new Bean();
bean.setPesan("Nama saya, Dimas Maryanto");
{% endhighlight %}

Ok ngerti khan magsud saya diatas? masih gampang lah ya!. Nah sekarang kita lanjutkan untuk bagaimana cara memanggil objek yang ada dalam spring container tersebut keluar atau dipanggil. Ok sekarang edit file ```App.java``` seperti berikut:

{% highlight java %}
package com.hotmail.dimmaryanto.software;

import com.hotmail.dimmaryanto.software.beans.Bean;
// import kelasnya spring
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

    public static void main(String[] args) {
        // cara meload spring configurasi dari xml yang disimpan didalam classpath
        ApplicationContext springContext = new ClassPathXmlApplicationContext("/SpringConfig.xml");

        // cara memanggil objek dari spring container menggunakan ApplicationContext
        Bean sebuahBean = (Bean) springContext.getBean("aBean");

        // menampilkan hasil yang telah diinisialisasi oleh spring container
        System.out.println(sebuahBean.getPesan());
    }
}
{% endhighlight %}

Sekarang coba anda running maka hasilnya seperti berikut:

{% highlight bash %}
--- exec-maven-plugin:1.2.1:exec (default-cli) @ springframework-belajar ---
Aug 20, 2016 9:38:19 AM org.springframework.context.support.ClassPathXmlApplicationContext prepareRefresh
INFO: Refreshing org.springframework.context.support.ClassPathXmlApplicationContext@4d405ef7: startup date [Sat Aug 20 09:38:19 ICT 2016]; root of context hierarchy
Aug 20, 2016 9:38:19 AM org.springframework.beans.factory.xml.XmlBeanDefinitionReader loadBeanDefinitions
INFO: Loading XML bean definitions from class path resource [SpringConfig.xml]

# Lihat ini hasilnya
Nama saya, Dimas Maryanto
------------------------------------------------------------------------
BUILD SUCCESS
------------------------------------------------------------------------
Total time: 0.765s
Finished at: Sat Aug 20 09:38:19 ICT 2016
Final Memory: 5M/123M
{% endhighlight %}

Nah penjelasnya dari koding tersebut,

* Kelas ```ClassPathXmlApplicationContext``` menggembalikan sebuah objek dengan nama ```ApplicationContext```, ApplicationContext ini lah yang akan menyediakan objek-objek yang nantinya kita pake setelah kita definisikan di Konfigurasi spring atau spring container.
* Cara memanggilnya kita bisa banyak cara sebenarnya, tapi basicnya kurang lebih seperti koding diatas yaitu kita lihat di file konfigurasi ```xml``` klo bean yang telah kita buat memiliki ```id="aBean"``` maka kita panggil method ```getBean("aBean")``` jadi dia akan mengambil sebuah bean yang memiliki ```id``` tesebut,
* method ```getBean()``` tersebut, dia mengembalikan dengan tipe ```Object``` maka kita harus casting dengan kelasnya ```Bean```
* Maka dari itu ketika di ```println()``` maka hasilnya ```Nama saya, Dimas Maryanto``` sama seperti file konfigurasi spring ```SpringConfig.xml``` kita menginject sebuah nilai tesebut.

Ok mungkin sekian dulu penjelasan tentang dependency injection dengan spring framework. See you next post!.
