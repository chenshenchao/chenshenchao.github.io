# COM 和 OLE 速查

COM 被设计出来虽然有考虑跨平台，但是由于其过度设计，使用复杂，现实情况是除了微软和其相关的部分技术不得不使用 COM 外，没有人愿意用 COM。
由于其扎根在 Windows 开发的一部分区域，所以在 Windows 开发里，不可避免（可以避免使用，但是一定会遇到。）地会遇到 COM 。

COM 可以说是因 C++ 而产生的，其二进制定义里，用了 VC++ 虚表的实现。
由于虚表的复杂，GO 语言在设计上故意规避了虚表这种方式，其 interface 的实现更接近 C# 的委托，来提升编译器的健壮。

## IUnknown

COM 接口都必须继承 IUnknown 接口。

```c++
// IUnknown 是所有 COM 接口的基接口，定义接口查询和引用计数规则
interface IUnknown {
    // 查询对象是否支持指定接口（通过 IID 标识）
    // 参数：riid - 请求的接口 ID；ppvObject - 输出的接口指针
    // 返回值：S_OK（成功）或 E_NOINTERFACE（不支持）
    virtual HRESULT STDMETHODCALLTYPE QueryInterface(
        _In_ REFIID riid,
        _COM_Outptr_ void** ppvObject
    ) = 0;

    // 增加对象的引用计数（用于资源管理）
    // 返回值：递增后的引用计数值
    virtual ULONG STDMETHODCALLTYPE AddRef( void ) = 0;

    // 减少对象的引用计数（当计数为 0 时销毁对象）
    // 返回值：递减后的引用计数值（若为 0 则对象已销毁）
    virtual ULONG STDMETHODCALLTYPE Release( void ) = 0;
};
```

IUnknown 就是设计模式里面的“抽象工厂”，“容器(依赖注入)”，QueryInterface 就是设计模式里的工厂函数，所以 IUnknown 是多种设计模式的混合体。

### QueryInterface

QueryInterface 实现规则，在无法靠语言特性或设计模式做约束的情况下，规定了以下规则。
因为 C++ 没有反射，导致了需要强转，用过 C# Asp.Net（Microsoft.Extensions.Hosting） 的都清楚容器 Host 作为容器，可以通过反射注册类型单例等，依赖注入可以控制生命周期。

1. QueryInterface 返回的总是同一个 IUnknown 指针。(即，IID_IUnknown 获取到的必须是个单例。)
2. 若曾经获取过某个接口，那么它将总能再获取此接口。（即，要求接口稳定，不能时不时就不能调用了。）
3. 可以再次获取已拥有的接口。（即，不同封装内参数传递类型丢了，不保证这条无法确保各个封装内能强转类型。）
4. 可以返回到起始接口。（即，可以获取依赖注入的容器）
5. 可以从任意接口获取接口。（这点泛化了接口，使得接口有容器的功能，主要是为了方便吧。）

所以为什么 COM 会如此复杂，因为它揉捏了多种设计模式，又自己改造了它们，同时因为 C++ 缺少反射，使得设计上类型缺失，丢掉接口类型，不利于 IDE 提示。
IID 其实就是 反射的类型参数，所以 COM 相当于自建了一套 反射机制。

接口与版本，新接口命名为老版本接口名字加数字，IFly => IFly2。
隐含条约，接口调用顺序要确保在版本更新时不做变动。

### 引用计数：AddRef 和 Release

因为 IUnknown 的另外两个接口函数是引用技术内存管理（可能出现循环引用），主要也是因为其没有 GC。

1. AddRef 由 QueryInterface 或 CreateInstance 此类创建者调用第一次。
2. Release 由使用者调用。
3. 在使用者需要传递接口指针时，也要调用 AddRef,并由下一个使用者用完后调用 Release 释放。（这一步就容易产生循环引用，因为 COM 没有弱指针。）

可以用 Windows API 的 InterlockedIncrement 和 InterlockedDecrement 实现，确保多线程。

引用计数的设计被放到接口上，而不是智能指针上，出现了“我杀了我自己”的设计。

```c++
ULONG __stdcall AddRef() {
    return InterlockedIncrement(&m_cRef);
}
ULONG __stdcall Release() {
    if (InterlockedDecrement(&m_cRef) == 0) {
        delete this; // 这也是一个设计上的缺陷，“我杀了我自己。”
        return 0;
    }
    return m_cRef;
}
```

规则：

1. 输出参数规则，QueryInterface 此类需要调用第一次 AddRef。
2. 输入参数规则，函数调用传递接口指针，要确保其生命周期内有效。
3. 输入-输出参数规则，传递一个接口后使用它后释放并返回新接口，需要确保引用计数正确。
4. 局部变量规则，局部变量确保引用计数正确的情况下，可不操作引用计数。
5. 全局变量规则，全局变量传递前必须调用 AddRef，不再使用时调用 Release。
6. 不确定时规则，不确定该怎么做时，成对使用 AddRef 和 Release。

### HRESULT

- 15-0：返回代码，
- 31-16：设备代码，

常见值，因为 HRESULT 是 Windows API 定义的，而 COM 又在之上扩展利用了这个值，所以要注意不能和系统的以及别人重复。

- S_OK      0 成功
- S_FALSE   1 假
- E_UNEXPECTED 无法预知失败
- E_NOIMPLE 成员未实现
- E_NOINTERFACE 不支持接口
- E_OUTOFMEMORY 组件分配内存失败
- E_FAIL 失败

设备代码：
- FACILITY_WINDOWS  8
- FACILITY_STORAGE  3
- FACILITY_SSPI     9
- FACILITY_RPC      1
- FACILITY_WIN32    7
- FACILITY_CONTROL  10
- FACILITY_NULL     0
- FACILITY_ITF      4
- FACILITY_DISPATCH 2
- FACILITY_CERT     11

## 动态链接 DLL

组件以 DLL 分发，用户需显式链接 CreateInstance 以创建 COM 组件实例。

```c++
// CreateInstance 必须是 C 函数，C++ 函数导出名字会由于其 ABI 导致函数名带类型信息。
// 此函数还必须动态导出。
extern "C" IUnknown *CreateInstance() {
    IUnknown * pI = (IUnknown*)(void *)new CA;
    pI->AddRef();
    return pI;
}
```

```bat
@rem 打印 DLL 导出信息，这个命令要 VS Native Tools Command 下才会默认在 PATH 里。
dumpbin -exports YorCom.dll
```

```bat
@rem 注册（这个命令需要管理员权限）
regsvr32  "组件路径.dll"

@rem 反注册G:\MartinTrummer\lazarus-com-example\LazComDll
regsvr32 /u "组件路径.dll"
```

## IDL(Interface Definition Language) 接口定义语言

IDL 用于生成 tlb 文件，类似 GRPC 的 Protobuf 语言，用此定义来生成二进制文件和对应的语言代码。

- MIDL（Microsoft Interface Definition Language）微软提供的用来生成 C++ 或 C 语言。后缀 *.idl
- RIDL（RAD Studio Interface Definition Language） Borland 提供的一种生成 Delphi(Object Pascal) 语言。后缀 *.ridl

他们虽然由不同公司提供实现，但是基本语言的语法是大体一致，有细微差别。

```bat
@rem Lazarus 没有带这种工具，所以要依赖 Visual Studio 或者 RAD Studio 的命令行工具。

@rem 微软 VS 命令行工具可以使用。 
midl your.idl

@rem 或者 Delphi RAD 的命令行工具
GenTLB your.ridl
```

### 常用类型与对照

COM 的类型是 C++ 类型为基础，之后是对应的其他语言的类型。

[官方文档（类型）](https://learn.microsoft.com/zh-cn/windows/win32/com/data-type-conversions)

- BSTR 字符串，(Pascal：WideString; Java: String)
- BOOL 布尔值，(Pascal：没有自动转换，用整数代替吧; Java: bool)
- INT 4字节整数，(Pascal：Integer; Java: int)
- IUnknown COM接口，(Pascall: ; Java: com.ms.com.IUnknown)


## 术语、缩写、文件

- <objbase.h> COM 基础头文件

- *.idl COM 用来生成 tlb 的定义文件。
- *.tlb COM 用来描述接口的二进制定义文件，需要链接到 dll 或者 exe 文件里。
- *.def Windows 下 DLL 导出定义文件。
- *.dll Windows 下 动态链接文件。
- *.exe Windows 下 可执行文件。

- API(Application Programming Interface)应用编程接口
- ABI(Application Binary Interface)应用二进制接口
- COM(Component Object Model)组件对象模型，一个二进制标准，一套ABI。
- OLE(Object Linking and Embedding)对象链接与嵌入
- ActiveX 扩展 OLE，相当于 OLE 升级改名为 ActiveX。
- TLB(Type Library Binary)