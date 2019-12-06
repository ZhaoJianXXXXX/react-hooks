/**
 * 校验是否有值的改变
 * @params {array} oldInputs 旧状态数组
 * @params {array} newInputs 新状态数组
 * @return {boolean} true(不同)/false(相同)
 */

export function inputsChange(oldInputs, newInputs) {
    if (oldInputs && newInputs) {
        if (oldInputs.length > 0 && oldInputs.length > 0) {
            if (oldInputs.length === newInputs.length) {
                for (let i = 0, l = oldInputs.length; i < l; i++) {
                    if (oldInputs[i] !== newInputs[i]) {
                        return true
                    }
                }
            } else {
                return true
            }
        }
        return false
    }
    return true
}
