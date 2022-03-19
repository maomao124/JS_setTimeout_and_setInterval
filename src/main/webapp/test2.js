/**
 * Project name(项目名称)：JS_setTimeout_and_setInterval
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 13:09
 * Version(版本): 1.0
 * Description(描述)： JS setInterval() 函数可以定义一个能够重复执行的定时器，每次执行需要等待指定的时间间隔。
 * function：一个函数（通常使用匿名函数），其中定义了定时器中要执行的代码；
 code：字符串类型的代码，这些代码会在定时器到期后被编译执行，出于安全考虑不建议使用；
 delay：可选参数，定时器在执行的其中代码之前，要等待的时间，单位为毫秒（1秒 = 1000毫秒），如果省略此参数，则表示立即执行；
 arg1、arg2、...、argN：要传递给函数的参数。
 */


var number=1;
    
function f1(str)
{
    var  date=new Date();
    document.write(str+number+"，"+date.toLocaleString()+"<br>");
    number++;
}

setInterval(f1,100,"测试：")