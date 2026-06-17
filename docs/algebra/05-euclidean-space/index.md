---
sidebar_position: 1
---

# 欧几里得空间

欧氏空间是带有内积的实线性空间。内积赋予了空间"长度"和"角度"的概念，使正交变换、实对称矩阵对角化、向量到子空间的距离等几何概念有了代数表述。

```mermaid
graph TB
    Inner["内积 (α, β)"] -->|标准正交基| OrthoBasis["施密特正交化"]
    OrthoBasis -->|保持内积| OrthoTrans["正交变换"]
    Inner -->|对称算子| SymOp["对称变换"]
    SymOp -->|可正交对角化| Diag["实对称矩阵<br/>正交对角化"]
    Inner -->|距离最小化| Proj["正交投影"]
    Proj -->|应用| LS["最小二乘法"]
```

## 子主题

- [标准正交基与正交变换](./orthogonal-basis-transform.md)
- [向量到子空间的距离](./distance-to-subspace.md)
