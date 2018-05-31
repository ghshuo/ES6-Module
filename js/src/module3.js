// 默认暴露   可以暴露任意数据类型
export default {
    msg: '默认暴露',
    foo() {
        console.log(this.msg);
    }
}