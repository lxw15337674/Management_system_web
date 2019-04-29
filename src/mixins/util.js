export default {
    methods: {
        /**
         * 首先判断对象是否存在，再判断属性是否有数值
         * @param obj   对象
         * @param text  属性不存在时返回的文本
         * @param keyList   需要显示的属性,如果显示属性的属性则传入多个参数
         */
        itemValue(obj, keyList, text = '',) {
            for (let item of keyList){
                if (obj[item]) {
                    obj = obj[item]
                } else {
                    return text
                }
            }
            return obj
        }
    }
}
