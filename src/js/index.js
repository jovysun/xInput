// import {XInput} from './xInput';
const XInput = require('./xInput');
import '../css/_tip.scss';
import '../css/index.scss'


// let options = {
//     'ele': '[name=desc]', 
//     'onCutOut': (extendInput) => {
//         console.log('截取完成');
//         alert('您粘贴的内容已超过'+ extendInput.max +'个字符，超出部分已被系统自动删除，请检查。');
//     },
//     'onX2En': (extendInput) => {
//         console.log('非英文转换完成');
//         if (extendInput.hasLast) {
//             console.log('存在无法转换的非英文字符，直接删除方法：rmLast');
//             let result = confirm('系统将帮您删除非英文字符，确定继续操作吗？');
//             if (result) {
//                 extendInput.rmLast();
//             }          
//         }

//     }
// };

// ExtendInput.use(options);


// ExtendInputUI.use({
//     'ele': '[name=desc]',
//     'maxlength': 1000
// });


// X2En.use({
//     'ele': '[name=desc]'
// });

XInput.use({
    'ele': '[name=username]'
})
XInput.use({
    'ele': '[name=desc]',
    'maxlength': 50    
})
