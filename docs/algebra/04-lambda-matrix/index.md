---
sidebar_position: 1
---

# λ-矩阵

λ-矩阵是以多项式为元素的矩阵。其初等变换下的 Smith 标准形引出了**不变因子**和**初等因子**，后者唯一决定了数字矩阵的 Jordan 标准形——这是代数中最漂亮的理论链条之一。

```mermaid
graph TB
    LambdaM["λ-矩阵 A(λ)"] -->|初等变换| Smith["Smith 标准形<br/>diag(d1,...,dr,0,...,0)"]
    Smith -->|对角元| InvFactor["不变因子 d_i(λ)<br/>d_i | d_{i+1}"]
    InvFactor -->|复数域分解| ElemFactor["初等因子<br/>(λ - λ_j)^{e_{ij}}"]
    ElemFactor -->|一一对应| Jordan["数字矩阵的 Jordan 标准形"]
```

## 子主题

- [Smith 标准形与不变因子](./smith-invariant-factor.md)
- [初等因子与 Jordan 标准形推导](./elementary-factor-jordan.md)
