---
sidebar_position: 1
---

# 线性变换

线性变换是从线性空间到自身的线性映射，是高等代数的核心。本章重点涵盖不变子空间（空间分解）、Jordan 标准形（复矩阵的相似最简形）和最小多项式。

```mermaid
graph TB
    LT["线性变换 σ: V → V"] -->|特征值| Eigen["特征值与特征向量"]
    Eigen -->|空间分解| Invariant["不变子空间<br/>σ(W) ⊆ W"]
    Invariant -->|准素分解| Primary[准素分解定理]
    LT -->|零化多项式| MinPoly[最小多项式<br/>次数最低的首一零化多项式]
    LT -->|复矩阵| Jordan[Jordan 标准形<br/>由 Jordan 块组成]
    MinPoly -->|与特征多项式| Relationship[有相同的根]
    Jordan -->|Jordan 块| Block["J_k(λ)"]
```

## 子主题

- [不变子空间](./invariant-subspace.md)
- [Jordan 标准形](./jordan-form.md)
- [最小多项式](./minimal-polynomial.md)
