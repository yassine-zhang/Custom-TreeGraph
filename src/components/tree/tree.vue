<template></template>
<script setup lang="ts">
import "@/less/tree/main.less"
import { propsOptions, TreeGroupDir } from "@/components/tree/types"
import { append } from "@/components/tree/utils"
import hotkeys from 'hotkeys-js';

/* 起初想直接使用tsx来实现，结果发现tsx并非这么灵活，
* 所以决定通过render和cloneVnode...来实现效果，其内部也使用jsx */

// 定义夫级传递数据Attributes
const props = defineProps(propsOptions)

// 定义生成树过程中必须变量
const data = props.data

// 查询#app选择器是否存在，以作为根
const app = document.querySelector('#app') as Element
// clear
// app.innerHTML = ''
console.log(app)

// 最外围元素
const periphery = append('div', app, 'auto-w-h flex flex-center')

// 根元素level1
const level1 = append('div', periphery, 'root flex flex-center pos-relative')
level1.textContent = props.data.label

// 根元素水平垂直线条判断
if (props.direction && props.direction[0] != undefined) {
    if (props.direction[0] === TreeGroupDir.horizontal) {
        // loopGenerateNode(props.data)


        const level1_h = append('div', level1, 'dir-h pos-absolute')
        const level2_out = append('div', level1_h, 'level2-out')

        // 添加level2外围自适应高度线条
        const level2OutSide = append('div', level2_out, 'level2-out-side')
        const level2OutRight = append('div', level2_out, 'level2-out-right')
        // 循环追加所有level2节点的水平线
        if (props.data.children && props.data.children.length != 0) {
            props.data.children.forEach((data: Record<string, any>) => {
                console.log(data)
                const level2_line_h = append('div', level2OutRight, 'level2-line-h')
                // level2 node
                const level2 = append('div', level2_line_h, 'level2')
                level2.innerText = data.label
                // level2.style.
            });
        }
    }
    else {
        const level1_v = append('div', level1, 'dir-v pos-absolute')
    }
}

function loopGenerateNode(data: Record<string, any>, parent?: Element) {
    /** 
     * 三者少一都不行，数据对象不为空，数据对象长度不为0，数据id存在（且唯一）
     *  */
    if (!data) return;


    // 根节点
    if (!parent) {
        if (Object.keys(data).length === 0) return;

        const level1_h = append('div', level1, 'dir-h pos-absolute')
        const level2_out = append('div', level1_h, 'level2-out')
        // 添加level2外围自适应高度线条
        const level2OutSide = append('div', level2_out, 'level2-out-side')
        const level2OutRight = append('div', level2_out, 'level2-out-right')
        loopGenerateNode(data.children, level2OutRight)
    }
    else {
        if (Array.isArray(data)) {
            data.forEach((single: Record<string, any>) => {
                const level2_line_h = append('div', parent, 'level2-line-h')
                // level2 node
                const level2 = append('div', level2_line_h, 'level2')
                level2.innerText = single.label

                if (single.children) loopGenerateNode(single.children, level2)
            })
        }
        else {
            const level2_line_h = append('div', parent, 'level2-line-h')
            // level2 node
            const level2 = append('div', level2_line_h, 'level2')
            level2.innerText = data.label

            if (data.children) loopGenerateNode(data.children, level2)
        }
    }
}






// let endVNode = h('div', {
//     class: 'auto-w-h flex flex-center',
//     // innerText: 'Hello, This is Declarative Programming.',
// }, [
//     h('div', { class: 'root flex flex-center pos-relative', innerText: props.data.label })
// ])


// setTimeout(() => {
//     render(endVNode, app)
// }, 0)


// 刷新页面
hotkeys('r', function (event, _handler) {
    event.preventDefault()
    location.reload()
})


</script>