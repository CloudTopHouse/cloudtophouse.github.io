# IntelliJ IDEA 快捷键说明大全-Windows


## 1-编辑【Editing】
|快捷键|英文说明|中文说明|
|:---------|:---------|:---------|
|`Ctrl` + `Space`|Basic code completion (the name of any class, method or variable)|基础代码补全（任意类名，方法名，变量名），默认在 Windows 系统上被输入法占用，建议修改为 `Ctrl + 逗号`|
|`Ctrl` + `Shift` + `Space `|Smart code completion (filters the list of methods and variables by expected type|智能代码补全（所期望类型的变量和方法列表供选择）**（常用）**|
|`Ctrl` + `Alt` + `Space `|Class name completiion(the name of any project class independently of current imports)|类名自动完成，如果没有import会自动import(Project里的任意类名，包括jar包里)|
|`Ctrl` + `Shift` + `Enter`|Complete statement|在末尾自动添加";"完成当前语句 **（常用）**|
|`Ctrl` + `P`|Parameter info (within method call arguments)|提示当前调用方法的入参信息|
|`Ctrl` +`Q`|Quick documentation lookup|快速查看类或者方法的 API 说明文档|
|`Shift`+`F1`|External Doc|外部文档|
|`Ctrl` + `mouse` over code|Brief Info|按住Ctrl键，然后鼠标移动到上面会显示信息摘要**（常用）**|
|`Ctrl`+`F1`|Show descriptions of error or warning at caret|在错误或者警告标志上显示说明|
|`Al` + `Insert`|Generate code… (Getters, Setters, Constructors, hashCode/equals, toString)|代码自动生成（Getters, Setters,构造方法, hashCode/equals, toString 等对象常用代码**（常用）**|
|`Ctrl` + `O`|Override methods|展示该类中所有覆盖或者实现的方法列表，注意这里是字母小写的 O！|
|`Ctrl` + `I`|Implement methods|实现方法|
|`Ctrl` + `Alt` + `T`|Surround with… (if..else,try..catch, for, synchronized, etc.)|调用代码模板，生成具有环绕性质的代码，比如：if..else,try..catch, for, synchronized 等等，使用前要先选择好需要环绕的代码块。**（常用）**|
|`Ctrl` + `/`|Comment/uncomment with line comment|行注释的启用和取消。分为两种情况：如果只是光标停留在某行，那么连续使用该快捷键，会不断注释掉下一行的代码；如果选定了某行代码（选定了某行代码一部分也算这种情况），那么连续使用该快捷键，会在添加或删除该行注释之间来回切换。**（常用）**|
|`Ctrl` + `Shift` + `/`|Comment/uncomment with block comment|代码块注释的启用和取消。它与 Ctrl + / 的区别是，它只会在代码块的开头与结尾添加注释符号！**（常用）**|
|`Ctrl` + `W`|Select successively increasing code blocks| 递进式选择代码块**（常用）** |
|`Ctrl` + `Shift` + `W`|Decrease current selection to previous state|返回上一次选择的代码块状态，是 Ctrl + W 的反向操作，多次触发，代码块会逐级变小，最小变为光标。|
|`Alt` + `Q`|Context info|上下文信息，展示包含当前光标所在代码的父节点信息，比如在 java 方法中调用，就会展示方法签名信息。|
|`Alt` + `Enter`|Show intention actions and quick-fixes|显示可能的动作和快速修复的方式供选择|
|<kbd>XXX</kbd> + <kbd></kbd>|||
|`Ctrl` + `Alt` + `L `|Reformat code|代码格式化 **（常用）**|
|`Ctrl` + `Alt` + `O`|Optimize imports|优化import导入，去除没有实际用到的包，这在 java 类中特别有用。**（常用）**|
|`Ctrl` + `Alt` + `I`|Auto-indent line(s)|自动缩进|
|`Tab` / `Shift` + `Tab`|Indent/unindent selected lines|缩进/取消缩进选择的代码段。**（常用）**|
|`Ctrl` + `X` 或 `Shift` + `Delete`|Cut current line or selected block to clipboard|剪切当前行或选定块到剪贴板 **（常用）**|
|`Ctrl` + `C` 或 `Ctrl` + `Inser`|Copy current line or selected block to clipboard|复制当前行或选定块到剪贴板**（常用）**|
|`Ctrl` + `V` 或 `Shift` + `Insert`|Paste from clipboard|从剪贴板粘贴**（常用）**|
|`Ctrl` + `Shift` + `V`|Paste from recent buffers…|从剪贴板缓存中选择信息粘贴**（常用）**|
|`Ctrl` + `D`|Duplicate current line or selected block|复制并粘贴当前行或选定块**（常用）**|
|`Ctrl` + `Y`|Delete line at caret|删除当前行或选定块**（常用）**|
|`Ctrl` + `Shift` + `J`|Smart line join|把下一行的代码接续到当前的代码行。|
|`Ctrl` + `Enter`|Smart line split|智能分割行。当前代码行与下一行代码之间插入一个空行，原来所在的光标不变。**（常用）**|
|`Shift` + `Enter`|Start new line|开始新一行。当前代码行与下一行代码之间插入一个空行，原来光标现在处于新加的空行上。**（常用）**|
|`Ctrl` + `Shift` + `U`|Toggle case for word at caret or selected block|切换当前词或选定块的大小写**（常用）**|
|`Ctrl` + `Shift` + `]` / `[`|Select till code block end/start|从当前光标所在位置开始，一直选择到当前光标所在代码段结束或者起始位置|
|`Ctrl` + `Delete`|Delete to word end|删除到当前词结尾|
|`Ctrl` + `Backspace`|Delete to word start|删除到当前词开头|
|`Ctrl` + `NumPad+/-`|Expand/collapse code block|展开或折叠代码块 **（常用）**|
|`Ctrl` + `Shift` + `NumPad+`|Expand all|展开所有代码段|
|`Ctrl` + `Shift` + `NumPad-`|Collapse all|收缩所有代码段|
|`Ctrl` + `F4`|Close active editor tab|关闭当前编译tab页|




## 2-查找或替换【Search/Replace】

|快捷键|英文说明|中文说明|
|:---------|:---------|:---------|
|`Ctrl` + `F`|Find|**查找（常用）**  在当前标签页中进行查找，支持正则表达式|
|`F3`|Find next|**查找下一个**  如果找到了多个查找结果，每调用一次就会跳到下一个结果，很方便|
|`Shift` + `F3`|Find previous|**查找上一个**是 F3 的反向操作，即每调用一次就会跳到上一个结果|
|`Ctrl` + `R`|Replace|**替换（常用）**在当前标签页中进行替换操作|
|`Ctrl` + `Shift` + `F`|Find in path|在指定路径查找**（常用）**|
|`Ctrl` + `Shift` + `R`|Replace in path|在指定路径替换**（常用）**|
|`Ctrl` + `Shift` + `S`|Search structurally(Ultimate Edtion only)|搜索结构(旗舰版才支持)，这里的结构可以是方法，代码模板等|
|`Ctrl` + `Shift` + `M`|Replace structurally(Ultimate Edtion only)|替换结构(旗舰版才支持)，这里的结构可以是方法，代码模板等|

## 3-查看使用情况【Usage Search】

主要是查看当前光标所在内容使用情况。 

|快捷键|英文说明|中文说明|
|:---------|:---------|:---------|
|`Alt` + `F7`|Find usages|搜索最近使用的地方|
|`Ctrl` + `F7`|Find usages in file|在文件中搜索使用的地方|
|`Ctrl` + `Shift` + `F7`|Highlight usages in file|高亮显示文件中使用的部分|
|`Ctrl` + `Alt` + `F7`|Show usages|显示使用的地方（可以显示方法、变量等在哪些地方被使用） **（常用）**|

## 4-编译与运行【Compile and Run】

|快捷键|英文说明|中文说明|
|:---------|:---------|:---------|
|`Ctrl` + `F9`|Make project (compile modifed and dependent)|项目构建（编译修改和相关）|
|`Ctrl` + `Shift` + `F9`|Compile selected file, package or module|编译选定的文件，包或模块|
|`Alt` + `Shift` + `F10`|Select configuration and run|选择配置和运行（弹出窗口，选择要运行的项目，运行）|
|`Alt` + `Shift` + `F9`|Select configuration and debug|选择配置和调试（弹出窗口，选择要调试的项目，调试）|
|`Shift` + `F10`|Run|运行 **（常用）**|
|`Shift` + `F9`|Debug|调试|
|`Ctrl` + `Shift` + `F10`|Run context configuration from editor|从编译器运行配置的上下文。按照编辑器绑定的文件类型，运行相关的程序。比如一个 html 页面，调用后，会直接打开一个浏览器。|

## 5-调试【Debugging】

|快捷键|英文说明|中文说明|
|:---------|:---------|:---------|
|`F8`|Step over|**跳过（常用）**跳到当前代码下一行|
|`F7`|Step into|**步入（常用）**跳入到调用的方法内部代码|
|`Shift` + `F7`|Smart step into|智能步入，会打开一个面板，让你选择具体要跳入的类方法，这个在复杂的嵌套代码中特别有用|
|`Shift` + `F8`|Step out|**跳出（常用）**跳出当前的类，到上一级|
|`Alt` + `F9`|Run to cursor|**运行到光标处（常用）**让代码运行到当前光标所在处，非常棒的功能|
|`Alt` + `F8`|Evaluate expression|计算表达式|
|`F9`|Resume program|**恢复程序运行（常用）**结束当前断点的本轮调试（因为有可能代码会被调用多次，所以调用后只会结束当前的这一次）；如果有下一个断点会跳到下一个断点中|
|`Ctrl` + `F8`|Toggle breakpoint|切换断点，在当前光标处，添加或者删除断点|
|`Ctrl` + `Shift` + `F8`|View breakpoints|查看断点，打开当前断点的面板，可以进行条件过滤|

## 6-导航【Navigation】

|快捷键|英文说明|中文说明|
|:---------|:---------|:---------|
|`Ctrl` + `N`|Go to class|打开指定类**（常用）**|
|`Ctrl` + `Shift` + `N`|Go to file|打开指定文件**（常用）**|
|`Ctrl` + `Alt` + `Shift` + `N`|Go to symbol|前往指定的变量、方法，打开文本查询框|
|`Alt` + `Right/Left`|Go to next/previous editor tab|转到下一个/上一个编辑器标签|
|`F12`|Go back to previous tool window|回到前一个工具窗口。如果当前在编辑窗口，触发后，会跳到之前操作过的工具栏上|
|`ESC`|Go to editor (from tool window)|进入编辑器（从工具窗口）。从工具栏上，再跳回原来的编辑窗口，一般与 F12 配合使用|
|`Shift` + `ESC`|Hide active or last active window|隐藏当前或最后一个激活的工具窗口|
|`Ctrl` + `Shift` + `F4`|Close active run/messages/find/… Tab|关闭当前运行/消息/查找/...标签|
|`Ctrl` + `G`|Go to line|跳转到指定行**（常用）**|
|`Ctrl` + `E`|Recent files popup|弹出最近查看过的文件|
|`Ctrl` + `Alt` + `Left/Right`|Navigate back/forward|（导航）前进/后退|
|`Ctrl` + `Shift` + `Backspace`|Navigate to last edit location|跳转到最近一次编辑的位置|
|`Alt` + `F1`|Select current file or symbol in any view|打开一个类型列表，选择后会导航到当前文件或者内容的具体与类型相关的面板中。|
|`Ctrl` + `B` 或 `Ctrl` + `Click`|Go to declaration|跳到声明。如果是类，那么会跳转到当前光标所在的类定义或者接口；如果是变量，会打开一个变量被引用的列表**（常用）**|
|`Ctrl` + `Alt` + `B`|Go to implementation(s)|跳转到具体的实现方法，查找抽象方法的具体实现很好用**（常用）**|
|`Ctrl` + `Shift` + `I`|Open quick definition lookup|快速查找定义|
|`Ctrl` + `Shift` + `B`|Go to type declaration|前往类型声明|
|`Ctrl` + `U`|Go to super-method/super-class|前往父类方法/父类|
|`Alt` + `Up/Down`|Go to previous/next method|上一个/下一个方法|
|`Ctrl` + `]/[`|Move to code block end/start|移动到代码块结束/开始|
|`Ctrl` + `F12`|File structure popup|打开文件结构，支持迅速查找当前类的变量，方法，可以使用模糊查询**（常用）**|
|`Ctrl` + `H`|Type hierarchy|类层次结构**（常用）**|
|`Ctrl` + `Shift` + `H`|Method hierarchy|方法层次结构|
|`Ctrl` + `Alt` + `H`|Call hierarchy|调用层次**（常用）**|
|`F2` / `Shift` + `F2`|Next/previous highlighted error|下一个/上一个高亮突出的错误|
|`F4` / `Ctrl`+`Enter`|Edit source / View source|编译源/查看源|
|`Alt` + `Home`|Show navigation bar|显示包路径的导航栏|
|`F11`|Toggle bookmark|**设定/取消书签（常用）**把光标所处的代码行添加为书签或者从书签中删除|
|`Ctrl` + `Shift` + `F11`|Toggle bookmark with mnemonic|使用助记符设定/取消书签。把光标所处的代码行添加为带快捷键的书签或者从快捷键书签中删除|
|`Ctrl` + `[0-9]`|Go to numbered bookmark|跳转到指定标号的书签|
|`Shift` + `F11`|Show bookmarks|查看书签**（常用）**|

## 7-重构【Refactoring】

| 快捷键               | 英文说明            | 中文说明         |
| :------------------- | :------------------ | :--------------- |
| `F5`                 | Copy                | 文件复制         |
| `F6`                 | Move                | 文件移动         |
| `Alt` +  `Delete`    | Safe Delete         | 安全删除         |
| `Shift` + `F6`       | Rename              | 重命名           |
| `Ctrl` + `F6`        | Change Signature    | 更改签名         |
| `Ctrl` + `Alt` + `N` | Inline              | 内联             |
| `Ctrl` + `Alt` + `M` | Extract Method      | 提取方法         |
| `Ctrl` + `Alt` + `V` | Introduce Variable  | 提取作为局部变量 |
| `Ctrl` + `Alt` + `F` | Introduce Field     | 提取作为实例变量 |
| `Ctrl` + `Alt` + `C` | Introduce Constant  | 提取作为常量     |
| `Ctrl` + `Alt` + `P` | Introduce Parameter | 提取作为方法入参 |





## 8-版本控制【VCS/Local History】

| 快捷键                | 英文说明                | 中文说明         |
| :-------------------- | :---------------------- | :--------------- |
| `Ctrl` + `K`          | Commit project to VCS   | 提交项目         |
| `Ctrl` + `T`          | Update project from VCS | 更新项目         |
| `Alt` + `Shift` + `C` | View recent changes     | 查看最近的更改   |
| `Alt` + `BackQuote()` | 'VCS' quick popup       | 弹出快速操作窗口 |





## 9-代码模板【Live Templates】

| 快捷键               | 英文说明                                          | 中文说明                                     |
| -------------------- | ------------------------------------------------- | -------------------------------------------- |
| `Ctrl` + `Alt` + `J` | Surround with Live Template                       | 弹出模板选择窗口，将选定的代码放入动态模板中 |
| `Ctrl` + `J`         | Insert Live Template                              | 插入动态模板                                 |
| `iter`               | Iteration according to Java SDK 1.5 style         | 选择**SDK1.5**方式的迭代循环模板             |
| `inst`               | Check object type with instanceof and downcast it | **instanceof**模板                           |
| `itco`               | Iterate elements of java.util.Collection          | 集合的循环迭代模板                           |
| `itit`               | Iterate elements of java.util.Iterator            | 迭代器的循环模板                             |
| `itli`               | Iterate elements of java.util.List                | list的循环模板                               |
| `psf`                | public static final                               | 静态常量模板                                 |
| `thr`                | throw new                                         | 抛出新异常模板                               |

## 10-常规【General】

| 快捷键                          | 英文说明                                  | 中文说明                                           |
| :------------------------------ | :---------------------------------------- | :------------------------------------------------- |
| `Alt` + `#[0-9]`                | Open corresponding tool window            | 打开相应工具窗口                                   |
| `Ctrl` + `S`                    | Save all                                  | 全部保存                                           |
| `Ctrl` + `Alt` + `Y`            | Synchronize                               | 同步、刷新                                         |
| `Ctrl` + `Alt` + `F11`          | Toggle full screen mode                   | 切换全屏模式                                       |
| `Ctrl` + `Shift` + `F12`        | Toggle maximizing editor                  | 编辑器最大化                                       |
| `Alt` + `Shift` + `F`           | Add to Favorites                          | 添加到收藏夹                                       |
| `Alt` + `Shift` + `I`           | Inspect current file with current profile | 查看项目当前文件                                   |
| `Ctrl` + `BackQuote()`          | Quick switch current scheme               | 快速切换当前系统架构(配色方案、代码模板、快捷键等) |
| `Ctrl` + `Alt` + `S`            | Open Settings dialog                      | 打开IDE系统设置                                    |
| `Ctrl` + `Alt` + `Shift ` + `S` | Open Project Structure dialog             | 打开项目结构设置                                   |
| `Ctrl` + `Shift` + `A`          | Find Action                               | 查找操作                                           |
| `Ctrl` + `Tab`                  | Switch between tabs and tool window       | 标签和工具窗口快速切换                             |






