// 在 src 目录下创建 shims-vue.d.ts 文件
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
