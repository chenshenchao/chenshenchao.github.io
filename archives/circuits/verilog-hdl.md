# [草稿] Verilog HDL 

- (01) 上升沿
- r 上升沿 raise
- (10) 下降沿
- f 下降沿 fall
- ? 代表状态不变，维持原状态，不可以写在输出。
- - 代表状态不变，维持原状态，只能写在输出。
- x 代表状态改变了，随意输出。
- 1'b0 初始化 1 bit 为 0
- 2'b11 初始化 2 bit 为 11

## 组合电路 UDP 写法

```hdl
table
    ? 0 1 : x;
endtable
```

## 时序 UDP 写法

```hdl
table
    (01) ? 1 : ? : x;
endtable
```