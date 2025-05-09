# NSIS 速查

一个通过脚本语言定制打包安装软件的工具。

注：*.nsi 文件必须以 UTF-8 with BOM 编码。

[官方文档](https://nsis.sourceforge.io/Docs/)

- makensis.exe 命令行
- makensisw.exe 图形界面
- nsis.exe 无参数会启动 makensisw 图形界面，或者带参数就执行makensis。

```bash
# 因为引入了外部定义的常量，所以需要通过命令行执行。
makensis /MY_VERSION="0.6.0" /IS_MY_DEV your_script.nsi
```

而图形化的 makensisw 可以通过多个 nsi 来做多种配置，这样就不用带命令行参数了。

## 示例

```nsis
; 定义常量
!define DEMO_NAME "DemoExe"

!ifdef IS_MY_DEV
!define DEMO_SETUP_NAME "${DEMO_NAME}-dev-setup.exe"
!else
!define DEMO_SETUP_NAME "${DEMO_NAME}-setup.exe"
!endif

; 安装器名称
Name "Demo Setup"

; 安装器文件名
OutFile ${DEMO_SETUP_NAME}

; 执行需要用户级别，如无必要不用管理员权限，这个是由于要安装 VC++ Redist
RequestExecutionLevel admin

; 指定压缩算法
SetCompressor /SOLID lzma
; 强制压缩
SetCompress force

; 使用 Unicode
Unicode True

; 默认安装路径
; $PROGRAMFILES 是 C:\Program Files
InstallDir $PROGRAMFILES\YourDemo

; 引入其他 nsi 脚本文件
!include "vc_redist_x86_util.nsi"

; ------------------------------------
; 页面，按顺序让用户填

Page components
Page directory ; 【NISI预设界面】选择安装目录。
Page instfiles ; 【NISI预设界面】安装文件。

UninstPage uninstConfirm ; 【NISI预设界面】卸载前确定界面。
UninstPage instfiles ; 【NISI预设界面】卸载文件。

; -------------------------------------
; 安装段脚本定制
Section "Install"
    SectionIn RO ; 只读，用户不可修改。

    SetOutPath $INSTDIR ; 设置安装路径
    
    ; 打包单个文件指定，一般是要发布的exe 文件，可多句
    File /oname=my_v2.exe "my.exe"
    ; 也可以把 VC Redist 打包进去安装包，安装的时候会解压，这样会使得包变大，而且可能有侵权风险。
    File /oname=vc_redist_x86.exe "vc_redist_x86.exe"
    
    ; 多文件
    ; "*" 是匹配所有文件
    ; /r 指定匹配复制到顶层
    ; /x "" 多个来排除
    !ifdef IS_MY_DEV
    File /r /x "*setup.exe" /x "*.nsi" "*"
    !else
    File /r /x "*setup.exe" /x "*.nsi" /x "dev" "*"
    !endif

    ; 调用 函数 InstallVCRedist
    Call InstallVCRedist

    ; 添加卸载程序
    WriteUninstaller "$INSTDIR\uninstall.exe"

    ; 添加快捷方式
    ; 快捷文件.lnk 目标文件 参数 [图标文件] [图标索引号] [启动选项] [键盘快捷键] [描述]
    ;CreateShortCut "$DESKTOP\DemoExe.lnk" "$INSTDIR\DemoExe.bat" "" "$INSTDIR\DemoExe.ico"
    CreateShortCut "$DESKTOP\${DEMO_NAME}.lnk" "$INSTDIR\${DEMO_NAME}.bat"

    ; 添加注册表，加入“添加删除程序”
    ; 图标路径，可以直接指向带图标的 exe 或者 ico 文件
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\$DEMO_NAME" "DisplayIcon" "$INSTDIR\${DEMO_NAME}.ico"
    ; 程序名
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\$DEMO_NAME" "DisplayName" "$DEMO_NAME Nsis Demo"
    ; 版本信息
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\$DEMO_NAME" "DisplayVersion" ${ONE_VERSION}
    ; 卸载程序路径
    WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\$DEMO_NAME" "UninstallString" "$INSTDIR\uninstall.exe"
SectionEnd

; 卸载段脚本
Section "Uninstall"
    ; 逐个删除文件
    Delete "$INSTDIR\uninstall.exe"

    ; 删除注册表信息
    DeleteRegKey HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\$DEMO_NAME"

    ; 删除目录，如果目录非空不会被删除。
    RMDir "$INSTDIR"
SectionEnd
```

## 通过注册表判断是否安装

```bat
@rem 打开注册表编辑器
regedit
```

通过向注册表添加自己软件的信息，来注册“添加删除程序”里的信息。

- 【32位】HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall
- 【64位】HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall

找到相应的注册表，判断是否存在来做验证是否安装。

## 安装 VC++ Redist

```nsis
; vc_redist_x86_util.nsi 文件
; 指定一起分发的 VC Redist 文件，在安装时通过脚本安装。
Function "InstallVCRedist"
    Push $R0 ; 声明变量

    ; 安装 32位
    ClearErrors
    ReadRegStr $R0 HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{13A4EE12-23EA-3371-91EE-EFB36DDFFF3E}" "Version"
    IfErrors 0 InstalledVCRedist ; 存在就跳到已安装

    ; 安装 64位
    ClearErrors
    ReadRegStr $R0 HKLM "SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\{13A4EE12-23EA-3371-91EE-EFB36DDFFF3E}" "Version"
    IfErrors 0 InstalledVCRedist ; 存在就跳到已安装

    ; 运行安装，这个文件让用户自己微软官网下载或连同安装文件一起发给使用者。
    Exec "$INSTDIR\your_vcr_x86.exe"

    ; 注：这个只是示例，如果需要同时安装2个，需要把逻辑写得更完善。
InstalledVCRedist:
    Pop $R0
FunctionEnd
```
