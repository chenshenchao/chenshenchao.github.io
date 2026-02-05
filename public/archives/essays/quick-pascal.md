# Pascal 速查

Pascal 是一个比 C 还古老的语言。目前有两个比较主流的分支，Object Pascal（Delphi） 和 Free Pascal（Lazarus） ，两者在语法上基本一致，但是开发环境和依赖库会有比较大的区别和不兼容。

## 常用库

- [mORMot2](https://github.com/synopse/mORMot2) 数据库 ORM，支持 Delphi 和 Lazarus 环境。 
- [CEF4Delphi](https://github.com/salvadordf/CEF4Delphi) CEF 封装，支持 Delphi 和 Lazarus 环境。 
- [WebView4Delphi](https://github.com/salvadordf/WebView4Delphi) WebView2 封装，支持 Delphi 和 Lazarus 环境。 

## 语法

```pascal
// if
if True then begin
  WriteLn('yes');
end else begin
  WriteLn('no');
end;
```

```pascal
// case of 类似其他语言的 switch 或者 模式匹配
type
  TWeekDay = (wdMonday, wdTuesday, wdWednesday, wdThursday, wdFriday, wdSaturday, wdSunday);

var
  Today: TWeekDay;
begin
  Today := wdSaturday;
  case Today of
    wdMonday: begin
      ShowMessage('BOSS 是智障，脑子有问题。'); // 作用域
    end;
    wdTuesday..wdFriday: ShowMessage('工作日');  // 范围匹配（周二到周五）
    wdSaturday: wdSunday: ShowMessage('休息日');  // 多个值匹配（周六、周日）
    else begin // else 后面没有冒号 : 
      ShowMessage('这个应该不会走到'); // 类似其他语言的 default
    end;
  end;
end; 
```

```pascal
// while 循环
while True do begin
  WriteLn('do');
end;
```

```pascal
// for 循环
var
  I: Integer;
begin
  for I := 1 to 5 do begin
    WriteLn('i = ', I);
  end;
end;
```