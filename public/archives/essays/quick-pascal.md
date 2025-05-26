# Pascal 速查

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