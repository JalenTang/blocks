# Gen 类的说明文档

## Gen 类接收的 options 参数说明

```typescript
type options = {
  id: number; // 标志id
  tag: string; // 指定生成标签
}
```

| id  |   tag   | 说明 |
| :-: | :-----: | :--: |
|  1  | `<img>` | 图片 |
|  2  |  `<p>`  | 段落 |

## Gen 类配置化规范

### 图片配置参数

- `width` 指定图片的宽度，默认 100%
- `height` 指定图片的高度
- `src` 指定图片的地址，默认将上传的图片转成 base64
