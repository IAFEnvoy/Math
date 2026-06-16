---
sidebar_position: 1
---

# 一维随机变量

随机变量将样本空间 $\Omega$ 上的事件映射为实数，从而可以用微积分和实分析的工具来研究概率。本章涵盖分布函数、常用分布、数字特征和变量函数分布。

```mermaid
graph TB
    RV[随机变量] -->|离散| Disc[离散型<br/>分布列 PMF]
    RV -->|连续| Cont[连续型<br/>概率密度 PDF]
    Disc -->|例子| ExDisc[二项/泊松/几何/超几何]
    Cont -->|例子| ExCont[正态/均匀/指数/伽马]
    RV -->|数字特征| Num[期望 / 方差 / 矩]
    RV -->|函数分布| Trans[分布函数法 / 公式法]
```

## 子主题

- [分布函数与分布类型](./distribution-function.md)
- [常用离散分布](./discrete-distributions.md)
- [常用连续分布](./continuous-distributions.md)
- [数学期望与方差](./expectation-variance.md)
- [随机变量函数的分布](./function-of-rv.md)
