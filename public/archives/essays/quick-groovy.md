# [草稿]Groovy 速查

Groovy 是谷歌开发用于 gradle 构建脚本的语言，在 kotlin script 被推荐作为安卓脚本前，groovy 就是安卓项目的主要构建脚本语言。

作为 gradle 的 groovy 脚本后缀是 *.gradle ，主要用于安卓项目的构建。
作为通用语言的 groovy 源文件后缀是 *.groovy ，基于 JVM 生态和 Java 兼容，可以混合编程。

## 配置

```groovy
plugins {
    id 'groovy'
    // ...
}

dependencies {
    implementation 'org.codehaus.groovy:groovy-all:3.0.13'
    // ...
}
```

## 语法

注：一些语法示例，是乱的，不可直接运行。

```groovy
// 包名，要与目录一致
package demopkg

class User {
    Long id
    public String name

    // 定义构造函数将不提供默认的 User(Map) 构造函数
    // User(String name) {
    //     this.name = name
    // }

    String getName() { "Name: $name" } 

    def getAt(int i) { // 操作符 [] get
        switch (i) {
            case 0: return id
            case 1: return name
        }
        return "undefined"
    }
    void putAt(int i, def value) { // 操作符 [] set
        switch (i) {
            case 0: id = value; return
            case 1: name = value; return
        }
    }
}

class App {
    String getGreeting() {
        return 'Hello World!'
    }

    static void main(String[] args) {
        def app = new App()
        app.stringDemo()
        app.numberDemo()
        app.listDemo()
        app.mapDemo()
        app.classDemo()
        println app.greeting
    }

    void classDemo() {
        println "class ======= start"

        def user = new User(id: 1, name: 'Bob')
        println user.name // getName
        println user.@name // name

        def str = 'example of method reference'            
        def fun1 = str.&toUpperCase //
        def fun2 = { str.toUpperCase() }
        println fun1()
        println fun2()

        println "${user[0]} ${user[1]}"
        user[1] = "Bob2"
        println "${user[0]} ${user[1]}"

        println "class ======= end"
    }

    void numberDemo() {
        println "number ======= start"
        byte b = 1
        char  c = 2
        short s = 3
        int   i = 4i
        long  l = 5l
        println "${b} $c $s $i $l"

        BigInteger bi = 6.54321g // 6
        println bi

        float f1 = 1.0f
        Float f2 = 2.0f
        double d1 = 1.0d
        Double d2 = 2.0d
        println "$f1 $f2 $d1 $d2"

        BigDecimal bd = 3.45678912345g
        println bd

        println "number ======= end"
    }

    void stringDemo() {
        println "string ======= start"

        def func1 = { w -> w << 4 }
        println func1(100)

        println "1 + 2 == ${-> 3}"
        println "1 + 2 == ${ w -> w << 3}" // 不理解,w哪来的？ 输出居然是 1 + 2 == 3

        println '''
        1
        1
        1
        '''
        println """
        多行2
        22
        """

        def regxPattern = /.*foo.*/
        println regxPattern

        def token = 'safa'
        def regx2Pattern = /^${token}.+?other$/
        println regx2Pattern
        println regx2Pattern.dump()

        def regxJavaPatter = ~/^${token}.+?other$/ // java.util.regex.Pattern
        println regxJavaPatter
        println regxJavaPatter.dump()

        def text = "some text to match, text too"
        def m = text =~ /text to/ // match operator =~ 模糊匹配
        println m // Matcher 返回
        println m.find(0) ? m[0] : 'not match'
        println m.size() // 匹配多个

        def mm = text ==~ /^.+?text to.+$/ // match operator ==~ 严格匹配
        println mm // Boolean 返回

        def dollar = $/
        bbb
            ${token}
            aaa
            bbb

        /$
        println dollar

        println "string ======= end"
    }

    void listDemo() {
        println "list ======= start"

        def ns = [1,2,3]
        println ns

        def a = ns as int[]
        println a instanceof int[]

        def m3x3 = new Integer[3][3]
        println m3x3

        def ts = ["aaa", "bbb", "ccc"]
        println "aaa" in ts
        println "bbbb" !in ts
        
        println "list ======= end"
    }

    void mapDemo() {
        def map1 = [:]
        println "map ======= start"

        map1."an identifier with a space and double quotes" = "ALLOWED"
        map1.'with-dash-signs-and-single-quotes' = "ALLOWED"

        assert map1."an identifier with a space and double quotes" == "ALLOWED"
        assert map1.'with-dash-signs-and-single-quotes' == "ALLOWED"

        println ''
        println map1.dump()
        println ''
        println map1

        map1.each { k, v -> 
            println "## $k => $v"
        }


        def map2 = [
            aaa: "bbb",
            "bbb": "123123",
            "cc c": 123123,
        ]

        println ''
        println map2.dump()
        println ''
        println map2

        for (pair in map2) {
            println "@@ ${pair.key} => ${pair.value}"
        }

        println "map ======= end"
    }
}


class DemoApp {
    Long n

    // 成员函数定义
    String run() {
        byte b = 1
        char  c = 2
        short s = 3
        int   i = 4i
        long  l = 5l
        println "${b} $c $s $i $l"

        BigInteger bi = 6.54321g // 6
        println bi

        float f1 = 1.0f
        Float f2 = 2.0f
        double d1 = 1.0d
        Double d2 = 2.0d
        println "$f1 $f2 $d1 $d2"

        BigDecimal bd = 3.45678912345g
        println bd


        def text = 'test foo'
        def token = 'tttt'
        // 和 js 一样有专门的正则字面量
        def regx = /.*foo.*/
        // 比 JS 强的一点是正则字面量居然带字符串格式化
        def r2 = /${token}.+?other/
        // 专门的正则运算符 =~ 模糊匹配
        // 专门的正则运算符 ==~ 严格匹配
        def m = text ==~ regx
        println m


        // 列表
        def ns = [1, 2, 3]
        def a = ns as int[]

        // 字典
        def map1 = [:]
        map1."bbb" = "the b"
        map1."aaa" = 123

        def map2 = [
            aaa: "bbb",
            "dd d": 123,
        ]

        // 字符串格式化
        println "a: ${a.dump()}"
        println "map1: ${map1.dump()}"

        for (pair in map2) {
            println "${pair.key} => ${pair.value}"
        }

        return 'hello'
    }

    // 静态成员函数，这个基本和 Java 一致。
    static void main(String[] args) {
        println new DemoApp().run();
    }

    // 定义操作符 [] get
    def getAt(int i) {
        return n
    }

    // 定义操作符 [] set
    void putAt(int i, def v) {
        n = v
    }
}

```