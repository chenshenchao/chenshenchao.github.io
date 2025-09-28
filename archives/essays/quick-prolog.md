# Prolog 速查

## [SWI-Prolog](https://www.swi-prolog.org/)

[GitHub](https://github.com/SWI-Prolog/swipl-devel)

一个 Prolog 语言的实现，支持多平台。

注：windows 下文件带中文最好用 utf8-bom 的，不然中文会报错。

## 语法

- abc 常量（小写开头，是一些标志，类似 pi 和 e 这种。）
- Abc 变量（大写开头，类似方程的解，有多个。）
- A = B 符号 = 的关系.
- [your_prolog_file] 引入模块
- your_relation(a,b) 定义关系（类似公设。）
- your_relation(A,B) :- your_relation(B,A), your_relation_other(A). 定义规则（推导逻辑，如果左一条关系成立，可推导出右一到多条关系也成立。）
- your_relation(A,B) :- \+ your_relation(B, A). 否定关系用 \+ 前缀 
- is 赋值，规则里可定义新变量

### 示例

```prolog
% 3 色填 5 空不重色无解 %

cbox(r).
cbox(g).
cbox(b).

colorify(A, B, C, D, E) :-
    cbox(A),
    cbox(B),
    cbox(C),
    cbox(D),
    cbox(E),
    \+ A = B,
    \+ A = C,
    \+ A = D,
    \+ A = E,
    \+ B = C,
    \+ B = D,
    \+ B = E,
    \+ C = D,
    \+ C = E,
    \+ D = E.
```

```prolog
% 关系定义 %
myrelation(a, b).
myrelation(c, d).

% 规则定义，定义带变量参数的关系 %
myrelation(A, B) :- myrelation(B, A).

myrule(A, B, C) :-
    myrelation(B, A),
    \+ myrelation(A, C).
```

```prolog
[your_prolog_file].

\+ your_relation(X).
```

注：规则（rule）必须写在文件里面，swipl-win.exe 不能直接定义规则和关系。

```prolog
myr(a).
myr(b).

% 居然只给出一个解， X = a %
myr(X).
```

```prolog
% 阶乘 1 * 2 * 3 * 4 * ... %
fac(0, 1).
fac(1, 1).
fac(N, F) :-
    N > 1,
    % 无法使用这句 fac(N - 1, F1) 替代一下2句 %
    N1 is N - 1,
    fac(N1, F1), % 递归点 %
    F is N * F1. % 巨坑，还是给 F 赋值了，结果从 F 给外部得到。 %
```

### 规则

```prolog

cd("/path/to/dir").

pwd.

listing(your_rule).
```