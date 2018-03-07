## ES6面试专题  
关于es6的新特性的问题，已经在面试中被问到好多次了，每次回答都是乱七八糟的，想想，是时候总结下了，感谢各位前辈提供的参考  

### Promise必知必会  
1. Promise构造函数是同步执行的，promise.then中的函数是异步执行的  
2. Promise有3种状态，pending，fulfilled，rejected，状态改变只能从pending->fulfilled或者是pending->rejected，状态一旦改变则不能再变  
3. 构造函数中的resolve或者reject只有一次执行有效，多次调用没有任何作用  
4. Promise可以链式调用，每次调用.then或者.catch都会返回一个新的Promise，从而实现链式调用  
5. Promise的.then或者.catch可以被调用多次，但这里Promise构造函数只能执行一次，或者说Promise内部状态一经改变，并且有了一个值，那么后续调用.then或者.catch都会直接拿到这个值  
6. .then或者.catch中的一个error对象并不会抛出错误，所以不会被后续的.catch捕获，返回任何非Promise的值都会被包裹成Promise对象  
7. .then或者.catch返回的对象不能是Promise本身，不然会陷入死循环  
8. .then或者.catch的参数期望是函数，传入非函数会发生值穿透  
9. .then可以接受两个参数，第一个是处理成功的函数，第二个是处理错误的函数，.catch是.then第二个参数的简便写法，但是他们用法上需要注意一点的是：.then的第二个处理错误的函数捕获不了第一个处理成功的函数抛出的错误，而后续的.catch可以捕获之前的错误  
10. process.nextTick和promise.then都属于microtask，而setImmediate属于macrotask，在事件循环的check阶段执行，事件循环的每个阶段(macrotask)之间都会执行microtask，事件循环的开始会执行一次microtask  

参考链接 [Promise必知必会](https://juejin.im/post/5a04066351882517c416715d)  
