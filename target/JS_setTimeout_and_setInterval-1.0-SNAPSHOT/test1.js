/**
 * Project name(项目名称)：JS_setTimeout_and_setInterval
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 13:06
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// 方法	说明
// setTimeout()	在指定的时间后（单位为毫秒），执行某些代码，代码只会执行一次
// setInterval()	按照指定的周期（单位为毫秒）来重复执行某些代码，定时器不会自动停止，除非调用 clearInterval() 函数来手动停止或着关闭浏览器窗口

function f(str)
{
    document.write(str + "<br>");
}

setTimeout(f, 1000, "hello");